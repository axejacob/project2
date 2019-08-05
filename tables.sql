CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS suggestion (
    id SERIAL PRIMARY KEY,
    title TEXT,
    composer TEXT,
    reason TEXT
);

CREATE TABLE IF NOT EXISTS songs (
    id SERIAL PRIMARY KEY,
    title TEXT,
    composer TEXT,
    genre TEXT,
    category TEXT,
    performance_date TEXT
);
