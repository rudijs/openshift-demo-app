FROM ubuntu 

RUN apt-get update && apt-get install -y \
  curl \
  postgresql-client \
  && rm -rf /var/lib/apt/lists/*

COPY ./load-database.sh /tmp/load-database.sh

CMD [ "echo", "==> Error: Require database load script command" ]