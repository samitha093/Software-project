#!/usr/bin/env bash

if [ "$NGINX_SSL" = true ]; then
cat > /etc/nginx/conf.d/default.conf <<- EOF
server {
    listen 80;
    server_name $DEV_DOMAIN;
    return 301 https://$DEV_DOMAIN\$request_uri;
}
server {
    listen 443 ssl;
    index index.php index.html;
    server_name $DEV_DOMAIN;
    error_log  /var/log/nginx/error_manual.log;
    access_log /var/log/nginx/access_manual.log;
    root /code;
    ssl_certificate /etc/nginx/ssl-cert.crt;
    ssl_certificate_key /etc/nginx/ssl-cert.key;
    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers         HIGH:!aNULL:!MD5;
    location ~ \.php$ {
        try_files \$uri =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass php:9000;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME \$document_root\$fastcgi_script_name;
        fastcgi_param PATH_INFO \$fastcgi_path_info;
    }
}
EOF
else
cat > /etc/nginx/conf.d/default.conf <<- EOF
server {
    index index.php index.html;
    server_name $DEV_DOMAIN;
    error_log  /var/log/nginx/error_manual.log;
    access_log /var/log/nginx/access_manual.log;
    root /code;
    location ~ \.php$ {
        try_files \$uri =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass php:9000;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME \$document_root\$fastcgi_script_name;
        fastcgi_param PATH_INFO \$fastcgi_path_info;
    }
}
EOF
fi