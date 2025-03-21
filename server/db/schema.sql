-- -- DROP DATABASE
-- DROP DATABASE IF EXISTS kanban_db;

-- -- CREATE DATABASE
-- CREATE DATABASE kanban_db;

-- filepath: c:\Computer Programming\Kanban-Board-main\server\db\schema.sql
-- DROP DATABASE
DROP DATABASE IF EXISTS kanban_db;

-- CREATE DATABASE
CREATE DATABASE kanban_db;

-- Connect to the new database
\c kanban_db

-- Create a sample table
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);