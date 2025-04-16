import express from 'express';
import pg from 'pg';
import { errorMiddleware } from './lib/error-middleware';
import { ClientError } from './lib/client-error';

// 5 endpoints need to be implemented for this exercise

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  // ssl = secure socket layer
  // allow non-SSL traffic to localhost
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

// GET /api/grades
app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select *
    from "grades";
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

// GET /api/grades/:gradeId
app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number(+gradeId)) {
      throw new ClientError(400, 'gradeId must be a positive integer');
    }
    const sql = `
    select *
    from "grades"
    where "score" = $1
    `;
    const result = await db.query(sql, [gradeId]);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `grade ${gradeId} not found`);
    }
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

// POST /api/grades
app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (
      !name ||
      !course ||
      !Number.isInteger(score) ||
      score < 0 ||
      score > 100
    ) {
      throw new ClientError(
        400,
        'Invalid input: name, course, score are required'
      );
    }
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
    `;
    const result = await db.query(sql, [name, course, score]);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `grade ${grade} not found`);
    }
    res.status(201).json(grade);
  } catch (err) {
    next(err);
  }
});

// PUT /api/grades/:gradeId
app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number(+gradeId)) {
      throw new ClientError(400, 'gradeId must be a positive integer');
    }
    const { name, course, score } = req.body;
    if (
      !name ||
      !course ||
      !Number.isInteger(score) ||
      score > 100 ||
      score < 0
    ) {
      throw new ClientError(
        400,
        'Invalid input: name, grade, and score (0-100) are required'
      );
    }
    const sql = `
    update "grades"
    set "name" = $1,
        "course" = $2,
        "score" = $3
    where "gradeId" = $4
    returning *;
    `;
    const result = await db.query(sql, [name, course, score, gradeId]);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `grade ${gradeId} not found`);
    }
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/grades/:gradeId
app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number(+gradeId)) {
      throw new ClientError(400, 'gradeId must be a positive integer');
    }
    const sql = `
    delete
    from "grades"
    where "gradeId" = $1
    returning *;
    `;
    const result = await db.query(sql, [gradeId]);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `grade ${gradeId} not found`);
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
