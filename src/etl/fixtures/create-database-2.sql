CREATE TABLE users ( ID SERIAL PRIMARY KEY, name VARCHAR(30), email VARCHAR(30));

INSERT INTO users (name, email) VALUES ('Joe', 'joe@example.com'), ('Jane', 'jane@example.com');

SELECT * FROM users;