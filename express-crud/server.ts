import express from 'express';
import pg from 'pg';
import { errorMiddleware } from './lib/error-middleware';
import { ClientError } from './lib/client-error';

// 5 endpoints need to be implemented for this exercise

type Grade = {
  gradeId?: number;
  name: string;
  course: string;
  score: number;
};

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  // ssl = secure socket layer
  // allow non-SSL traffic to localhost
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

// for maintainability, consolidate the reused functions from each route

// GET /api/grades. Returns all rows from the grades table. the client should receive an array of objects if there are no rows, return an empty array.

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select *
    from "grades"
    `;
    const result = await db.query<Grade>(sql);
    const grades = result.rows;
    res.json(grades);
  } catch (err) {
    next(err);
  }
});

// GET /api/grades/:gradeId returns the row from the grades table with the given gradeId. the client should receive an object, not an array.
app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);
    const sql = `
    select *
    from "grades"
    where "gradeId" = $1
    `;
    const result = await db.query(sql, [gradeId]);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `grades ${gradeId} not found`);
    }
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

// POST /api/grades. inserts a new grade into the grades table and returns the entire created grade.
// the client should receive an object, not an array. your code should require the client includes the name, course, and score in the json req.body

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    validateBody(name, course, score);
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
    `;
    const result = await db.query<Grade>(sql, [name, course, score]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

// PUT /api/grades/:gradeId
app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);
    const { name, course, score } = req.body;
    validateBody(name, course, score);
    const sql = `
    update "grades"
    set "name" = $2,
        "course" = $3,
        "score" = $4
    where "gradeId" = $1
    returning *;
    `;
    const result = await db.query<Grade>(sql, [gradeId, name, course, score]);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `grade ${gradeId} does not exist`);
    }
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/grades/:gradeId
// deletes the grade in the grades table with the given gradeId

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);
    const sql = `
    delete
    from "grades"
    where "gradeId" = $1
    returning *;
    `;
    const result = await db.query<Grade>(sql, [gradeId]);
    const grade = result.rows[0];
    validateGrade(grade, gradeId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});

function validateBody(name: any, course: any, score: any): void {
  if (
    !name ||
    !course ||
    !Number.isInteger(score) ||
    score < 0 ||
    score > 100
  ) {
    throw new ClientError(400, 'name, course, score are required');
  }
}

function validateGradeId(gradeId: string): void {
  if (!Number(+gradeId)) {
    throw new ClientError(400, `gradeId must be a positive integer`);
  }
}

function validateGrade(grade: Grade, gradeId: string): void {
  if (!grade) {
    throw new ClientError(404, `grade ${gradeId} not found`);
  }
}
