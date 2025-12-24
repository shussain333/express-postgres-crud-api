import pool from "../configs/db.js";

export const createUserService = async (name, email) => {
    const result = await pool.query("insert into users (name, email) values ($1, $2) RETURNING *", 
        [name, email]);
    return result.rows[0];
};

export const getAllUsersService = async () => {
    const results = await pool.query("select * from users");
    return results.rows;
};

export const getUserByIdService = async (id) => {
    const result = await pool.query("SELECT * FROM users where id = $1", 
        [id]);
    return result.rows[0];
};

export const updateUserService = async (id, name, email) => {
    const result = await pool.query("UPDATE users set name = $1, email = $2 where id = $3 RETURNING *", 
        [name, email, id]);

    return result.rows[0];
};

export const deleteUserService = async (id) => {
    const result = await pool.query("DELETE from users where id = $1 RETURNING *", [id]);
    return result.rows[0];
};