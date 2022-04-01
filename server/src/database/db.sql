CREATE DATABASE servicesdb;

CREATE TABLE service(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE,
    description VARCHAR(255)
);