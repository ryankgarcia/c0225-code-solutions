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

app.use(errorMiddleware);
app.use(express.json());

// GET = READ in CRUD
app.get('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
      select * from "actors"
      where "actorId" = $1;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.json(actor);
  } catch (err) {
    next(err);
  }
});

// POST = Create in CRUD
app.post('/api/actors', async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;
    if (!firstName || !lastName) {
      throw new ClientError(400, 'firstName and lastName are required');
    }
    const sql = `
    insert into "actors" ("firstName","lastName")
    values ($1 ,$2)
    returning *;
    `;
    const result = await db.query(sql, [firstName, lastName]);
    const actor = result.rows[0];
    res.status(201).json(actor);
  } catch (err) {
    next(err);
  }
});

// PUT = UPDATE in CRUD
app.put('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number(+actorId)) {
      throw new ClientError(400, 'actorId must be a positive integer');
    }
    const { firstName, lastName } = req.body;
    if (!firstName || !lastName) {
      throw new ClientError(
        400,
        'invalid input: firstName and lastName required'
      );
    }
    const sql = `
  update "actors"
  set "firstName" = $2,
        "lastName" = $3
    where "actorId" = $1
    returning *;
  `;
    const result = await db.query(sql, [actorId, firstName, lastName]);
    const actor = result.rows[0];
    if (!actor) {
      throw new ClientError(404, `actor ${actorId} not found`);
    }
    res.json(actor);
  } catch (err) {
    next(err);
  }
});

// DELETE = DELETE in CRUD
app.delete('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number(+actorId)) {
      throw new ClientError(400, 'actorId must be a positive integer');
    }
    const sql = `
    delete
    from "actors"
    where "actorId" = $1
    returning *;
    `;
    const result = await db.query(sql, [actorId]);
    const actor = result.rows[0];
    if (!actor) {
      throw new ClientError(404, `actor ${actorId} not found`);
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
