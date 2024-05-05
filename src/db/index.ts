import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { Pool } from "pg";
import * as schema from './schema'
import { NodePgDatabase } from "drizzle-orm/node-postgres";
//NOTE: THIS IS FOR POSTGRES
// import { drizzle } from "drizzle-orm/node-postgres";

//NOTE: THIS IS FOR NEON DATABASE
import { drizzle } from 'drizzle-orm/neon-http';
import {neon} from '@neondatabase/serverless'


// or
// const pool = new Pool({
//   host: process.env.DATABASE_IP,
//   port: 5432,
//   user: "root",
//   password: "root",
//   database: "innovaTec",
// });

const NEON_DATABASE_URL = process.env.NEON_DATABASE_URL;
const sql = neon(NEON_DATABASE_URL!)
export const db = drizzle(sql, {schema});


// export const db:NodePgDatabase<typeof schema> = drizzle(pool, {schema})
