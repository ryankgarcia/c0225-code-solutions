import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

// GET /api/films returns all films in the table, ordered from highest replacement cost to lowest

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
    select *
    from "films"
    order by "replacementCost" desc;
    `;
    const result = await db.query(sql);
    res.send(result.rows);
  } catch (err) {
    next(err);
  }
});

// GET /api/films/:filmId returns a single film, based on filmId. Return a 404 not found if the filmId is not in the database

app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    if (!Number(filmId)) {
      throw new ClientError(400, 'filmId must be a positive number');
    }
    const sql = `
    select *
    from "films"
    where "filmId" = $1
    `;
    const params = [filmId];
    const result = await db.query(sql, params);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

// PUT /api/films/:filmId updates a single film title, based on filmId. pass title as a query parameter. return the updated film.
// return a 404 not found if the filmId is not in the database

// do not put template literals in your SQL queries. doing so will subject you to injection attacks

app.put('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    if (!Number(filmId)) {
      throw new ClientError(400, 'filmId must be a positive integer');
    }
    const { title } = req.query;
    if (!title) {
      throw new ClientError(400, 'title is required');
    }
    const sql = `
    update "films"
    set "title" = $2
    where "filmId" = $1
    returning *;
    `;
    const result = await db.query(sql, [filmId, title]);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
