import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/countries', async (req, res, next) => {
  try {
    const sql = `
    select "countryId" ,"countries"."name", count(*) as "cities"
    from "countries"
    join "cities" using ("countryId")
    group by "countryId";
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/cities/:cityId', async (req, res, next) => {
  try {
    const { cityId } = req.params;
    if (!Number(cityId)) {
      throw new ClientError(400, 'cityId must be a positive number');
    }
    const sql = `
    select "cities".*, "countries"."name" as "country"
    from "countries"
    join "cities" using ("countryId")
    where "cityId" = $1;
    `;
    const result = await db.query(sql, [cityId]);
    const city = result.rows[0];
    if (!city) {
      throw new ClientError(404, `city ${city} not found`);
    }
    res.json(city);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
