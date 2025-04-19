import 'dotenv/config';
import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';

type Product = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  shortDescription: string;
  longDescription: string;
};

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

// these endpoints need to change so that they point to the part of the catalog it should
// the only files that need to change are this one and read.ts

app.get('/api/catalog', async (req, res, next) => {
  try {
    // change this database call so its in line with the product catalog
    const sql = `
      select *
        from "products"
        order by "productId"
    `;
    const result = await db.query<Product>(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/catalog/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    if (!Number(+productId)) {
      throw new ClientError(400, 'productId must be a number');
    }
    // change this database call so its in line with the product catalog
    const sql = `
      select *
        from "products"
        where "productId" = $1;
    `;
    const result = await db.query<Product>(sql, [productId]);
    const productResult = result.rows[0];
    if (!productResult) {
      throw new ClientError(404, `product ${productId} does not exist`);
    }
    res.json(productResult);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
