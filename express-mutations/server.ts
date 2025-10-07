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

// CRUD operations for the server. Create = post, Read = get, update = put, delete = delete

// Read
app.get('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
    select *
    from "actors"
    where "actorId" = $1
    `;
    const result = await db.query(sql, [actorId]);
    const actor = result.rows[0];
    if (!actor) {
      throw new ClientError(404, `actor ${actorId} not found`);
    }
    res.json(actor);
  } catch (err) {
    next(err);
  }
});

// Create. Insert "firstName" and "lastName", into actors table which should be provided by as JSON in the request body
// return the newly-created object as JSON with status 201. you can chain the status to .json()

app.post('/api/actors', async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;
    if (!firstName || !lastName) {
      throw new ClientError(400, 'firstName and lastName are required');
    }
    const sql = `
    insert into "actors" ("firstName","lastName")
    values ($1, $2)
    returning *;
    `;
    const result = await db.query(sql, [firstName, lastName]);
    const actor = result.rows[0];
    res.status(201).json(actor);
  } catch (err) {
    next(err);
  }
});

// Update. add a route at '/api/actors/:actorId' by updating an actor in the actors table
// update "firstName" and "lastName" which should be provided as JSON in the request body
// return newly create object as JSON with status 200. remember to do returning * in SQL statement.

app.put('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number(+actorId)) {
      throw new ClientError(400, `actorId must be a positive integer`);
    }
    const { firstName, lastName } = req.body;
    if (!firstName || !lastName) {
      throw new ClientError(400, 'firstName and lastName required');
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

// Delete. Add a route '/api/actors/:actorId' by deleting an actor in the "actors" table
// return a 204 if successful

app.delete('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number(+actorId)) {
      throw new ClientError(400, `actorId must be a positive integer`);
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
