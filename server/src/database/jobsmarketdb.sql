CREATE DATABASE jobsmarketdb;

CREATE TABLE "Users" (
  "user_id" SERIAL PRIMARY KEY,
  "email" varchar(255) UNIQUE NOT NULL,
  "password" varchar(255) NOT NULL,
  "full_name" varchar,
  "title_profile" varchar,
  "profesional_profile_description" varchar(255),
  "category" varchar(255),
  "phone_num" int,
  "photo_profile" longblob NOT NULL,
  "code_country" varchar(255),
  "country_name" varchar(255)
);

CREATE TABLE "Workers" (
  "worker_id" SERIAL PRIMARY KEY,
  "email" varchar(255) UNIQUE NOT NULL,
  "full_name" varchar,
  "title_profile" varchar,
  "profesional_profile_description" varchar(255),
  "phone_num" int,
  "photo_profile" longblob NOT NULL,
  "code_country" varchar(255),
  "country_name" varchar(255),
  "name_service" varchar,
  "price" int,
  "status" boolean
);

CREATE TABLE "Seekers" (
  "seeker_id" SERIAL PRIMARY KEY,
  "email" varchar(255) UNIQUE NOT NULL,
  "full_name" varchar,
  "title_profile" varchar,
  "profesional_profile_description" varchar(255),
  "plan" varchar(255),
  "phone_num" int,
  "photo_profile" longblob NOT NULL,
  "code_country" varchar(255),
  "country_name" varchar(255)
);

CREATE TABLE "Teamers" (
  "teamer_id" SERIAL PRIMARY KEY,
  "email" varchar(255) UNIQUE NOT NULL,
  "full_name" varchar,
  "title_profile" varchar,
  "profesional_profile_description" varchar(255),
  "plan" varchar(255),
  "phone_num" int,
  "photo_profile" longblob NOT NULL,
  "code_country" varchar(255),
  "country_name" varchar(255)
);

ALTER TABLE "Users" ADD FOREIGN KEY ("category") REFERENCES "Workers" ("worker_id");

ALTER TABLE "Users" ADD FOREIGN KEY ("category") REFERENCES "Seekers" ("seeker_id");

ALTER TABLE "Users" ADD FOREIGN KEY ("category") REFERENCES "Teamers" ("teamer_id");