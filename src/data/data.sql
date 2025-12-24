CREATE TABLE if not exists users (
    id SERIAL PRIMARY KEY,
    name varchar(100) NOT NULL,
    email varchar(100) NOT NULL,
    created_at TIMESTAMP default NOW()
);