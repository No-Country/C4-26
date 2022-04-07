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

CREATE TABLE "Services" (
  "id" int PRIMARY KEY,
  "name_service" varchar,
  "price" int,
  "status" boolean
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
  "id" SERIAL PRIMARY KEY,
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
  "id" SERIAL PRIMARY KEY,
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

ALTER TABLE "Users" ADD FOREIGN KEY ("user_id") REFERENCES "Workers" ("worker_id");

ALTER TABLE "Services" ADD FOREIGN KEY ("id") REFERENCES "Users" ("user_id");

ALTER TABLE "Services" ADD FOREIGN KEY ("id") REFERENCES "Workers" ("worker_id");

ALTER TABLE "Workers" ADD FOREIGN KEY ("worker_id") REFERENCES "Services" ("name_service");

ALTER TABLE "Workers" ADD FOREIGN KEY ("worker_id") REFERENCES "Services" ("price");

ALTER TABLE "Workers" ADD FOREIGN KEY ("worker_id") REFERENCES "Services" ("status");

ALTER TABLE "Seekers" ADD FOREIGN KEY ("id") REFERENCES "Users" ("user_id");

ALTER TABLE "Seekers" ADD FOREIGN KEY ("id") REFERENCES "Users" ("email");

ALTER TABLE "Seekers" ADD FOREIGN KEY ("id") REFERENCES "Users" ("title_profile");

ALTER TABLE "Seekers" ADD FOREIGN KEY ("id") REFERENCES "Users" ("profesional_profile_description");

ALTER TABLE "Teamers" ADD FOREIGN KEY ("id") REFERENCES "Users" ("user_id");

ALTER TABLE "Teamers" ADD FOREIGN KEY ("id") REFERENCES "Users" ("email");

ALTER TABLE "Teamers" ADD FOREIGN KEY ("id") REFERENCES "Users" ("title_profile");

ALTER TABLE "Teamers" ADD FOREIGN KEY ("id") REFERENCES "Users" ("profesional_profile_description");
