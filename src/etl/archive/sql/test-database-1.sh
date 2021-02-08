psql --user postgres -f /tmp/sql/create-role.sql
psql --user me -d postgres -c "REVOKE CONNECT ON DATABASE api FROM public; SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity WHERE pg_stat_activity.datname = 'api';"
psql --user me -d postgres -c "DROP DATABASE IF EXISTS api;"
psql --user me -d postgres -c "CREATE DATABASE api;"
psql --user me -d api -f /tmp/sql/create-database-1.sql
