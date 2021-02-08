CREATE TABLE users ( ID SERIAL PRIMARY KEY, name VARCHAR(30), email VARCHAR(30));

INSERT INTO users (name, email) VALUES ('Bob', 'bob@example.com'), ('Alice', 'alice@example.com');

SELECT * FROM users;