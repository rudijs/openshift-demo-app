psql --user postgres -c "CREATE ROLE me WITH LOGIN PASSWORD 'password';"
psql --user postgres -c "ALTER ROLE me CREATEDB;"
psql --user me -d postgres -c "CREATE DATABASE api;"
psql --user me -d api -c "CREATE TABLE users ( ID SERIAL PRIMARY KEY, name VARCHAR(30), email VARCHAR(30));"
psql --user me -d api -c "INSERT INTO users (name, email) VALUES ('Bob', 'bob@example.com'), ('Alice', 'alice@example.com');"
psql --user me -d api -c 'SELECT * FROM users;'