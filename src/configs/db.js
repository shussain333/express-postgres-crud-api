import pkg from "pg";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const { Pool } = pkg;
dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    application_name: "Express DB CRUD operations",
});

pool.on("connect", async () => {
    console.log(`Connection pool has established a connection with Database`);
});

const _executeScript = async () => {
    const _filename = fileURLToPath(import.meta.url);
    const _dirname = path.dirname(_filename);
    const sqlpath = path.join(_dirname, '..', 'data', 'data.sql');
    const sql = fs.readFileSync(sqlpath, 'utf-8');
    await pool.query(sql);
    console.log(`SQL Script executed successfully`);
}

// Execute script once
_executeScript();

export default pool;