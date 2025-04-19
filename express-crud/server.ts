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

// GET /api/grades
app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select *
    from "grades";
    `;
    const result = await db.query<Grade>(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

// GET /api/grades/:gradeId
app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);
    const sql = `
    select *
    from "grades"
    where "gradeId" = $1
    `;
    const result = await db.query<Grade>(sql, [gradeId]);
    const grade = result.rows[0];
    validateGrade(grade, gradeId);
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

// POST /api/grades
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
    const result = await db.query<Grade>(sql, [name, course, score, gradeId]);
    const grade = result.rows[0];
    validateGrade(grade, gradeId);
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/grades/:gradeId
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

// these are the helper functions to reduce repeated code in the main sequence code

function validateBody(name: any, course: any, score: any): void {
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
}

function validateGrade(grade: Grade, gradeId: string): void {
  if (!grade) {
    throw new ClientError(404, `grade ${gradeId} not found`);
  }
}

function validateGradeId(gradeId: string): void {
  if (!Number(+gradeId)) {
    throw new ClientError(400, 'gradeId must be a positive integer');
  }
}
