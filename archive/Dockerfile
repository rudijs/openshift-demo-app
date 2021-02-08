FROM tiangolo/uwsgi-nginx-flask:python3.6-alpine3.7

RUN apk --update add bash nano
ENV STATIC_URL /static
ENV STATIC_PATH /var/www/app/static

COPY nginx.conf /etc/nginx/conf.d/nginx.conf
COPY supervisor.conf /etc/supervisord.conf
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 8080:8080

COPY ./requirements.txt /var/www/requirements.txt
RUN pip install -r /var/www/requirements.txt

