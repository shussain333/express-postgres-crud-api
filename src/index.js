// Create simple express js server

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import pool from "./configs/db.js";
import userRoutes from "./routes/userRoutes.js"
import errorHandling from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

//Middlewares
app.use(express.json()); // It will help to pass json payload in the API
app.use(cors());

// Routes middleware
app.use("/api", userRoutes);

// Error Handling middleware
app.use(errorHandling);

// Create table before starting server
createUserTable();

// Testing postgres connection
app.get("/", async(req, resp) => {
    console.log(`Checking database connection`);
    const result = await pool.query("select current_database()");
    resp.send(`The database name is ${result.rows[0].current_database}`);
});

// Server running
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
