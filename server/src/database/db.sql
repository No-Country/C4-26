CREATE DATABASE servicesdb;

CREATE TABLE services(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE,
    description VARCHAR(255)
);