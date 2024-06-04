FROM postgres:16.0
COPY food-table.sql /docker-entrypoint-initdb.d/1.sql
COPY food-data.sql /docker-entrypoint-initdb.d/2.sql
COPY user-table.sql /docker-entrypoint-initdb.d/3.sql
COPY user-data.sql /docker-entrypoint-initdb.d/4.sql