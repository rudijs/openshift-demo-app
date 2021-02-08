#!/bin/bash

DEFAULT_DATABASE_FIXTURES='create-database-1.sql'

DATABASE_FIXTURES=${1:-$DEFAULT_DATABASE_FIXTURES}

echo "==> Loading data from: ${DATABASE_FIXTURES}"

curl -o /tmp/${DATABASE_FIXTURES} https://rudijs.com/${DATABASE_FIXTURES}

psql -h $DBHOST --user me -d api -f /tmp/${DATABASE_FIXTURES}