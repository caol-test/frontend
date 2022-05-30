FROM nginx:1.20.0-alpine

WORKDIR /usr/src/app
COPY volumes/nginx/nginx.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html
