import pool from "../configs/db.js";

const createUserTable = async () => {
    const queryText = `CREATE TABLE if not exists users (
        id SERIAL PRIMARY KEY,
        name varchar(100) NOT NULL,
        email varchar(100) NOT NULL,
        created_at TIMESTAMP default NOW()
    )`;

    try {
        pool.query(queryText);
        console.log(`users table created`);
    } catch (error) {
        console.log(`Failed to create users table`);
    }
};

export default createUserTable;