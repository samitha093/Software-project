FROM nginx:1.23.3
COPY . .

ARG DEV_DOMAIN
ARG NGINX_SSL
ENV DEV_DOMAIN $DEV_DOMAIN
ENV NGINX_SSL $NGINX_SSL

# RUN apk update && apk add \
#     openssl \
#     bash

COPY ssl/generate-ssl.sh /etc/nginx/generate-ssl.sh

COPY certificates/ssl-cert.crt /etc/nginx/ssl-cert.crt
COPY certificates/ssl-cert.info /etc/nginx/ssl-cert.info
COPY certificates/ssl-cert.key /etc/nginx/ssl-cert.key
# RUN chmod +x /etc/nginx/generate-ssl.sh
# RUN cd /etc/nginx && ./generate-ssl.sh

COPY vhosts/vhost.sh /etc/nginx/vhost.sh
# RUN chmod +x /etc/nginx/vhost.sh
# RUN cd /etc/nginx && ./vhost.sh


EXPOSE 443
