CREATE TABLE region (
id SERIAL PRIMARY KEY,
name varchar(25)
);

CREATE TABLE country (
id SERIAL PRIMARY KEY,
code varchar(2),
name varchar(25),
region_id smallint
);

CREATE TABLE location (
id SERIAL PRIMARY KEY,
street_address varchar(255),
postal_code varchar(10),
city varchar(30),
state_province varchar(20),
country_id smallint
);

ALTER TABLE location
ALTER COLUMN street_address SET DATA TYPE varchar(255);

CREATE TABLE job (
id SERIAL PRIMARY KEY,
code varchar(15),
title varchar(30),
min_salary float,
max_salary float
);

CREATE TABLE job_grade (
id SERIAL PRIMARY KEY,
level varchar(1),
lowest_salary integer,
highest_salary integer
);

CREATE TABLE job_history (
id SERIAL PRIMARY KEY,
employee_id smallint,
start_date date,
end_date date,
job_id smallint,
department_id smallint
);

CREATE TABLE department (
id SERIAL PRIMARY KEY,
name varchar(15),
manager_id smallint,
location_id smallint
);

CREATE TABLE employee (
id SERIAL PRIMARY KEY,
first_name varchar(30),
last_name varchar(40),
email varchar (30),
phone_number varchar(20),
hire_date date,
job_id smallint,
salary float,
commission_pct float,
manager_id smallint,
department_id smallint
);
