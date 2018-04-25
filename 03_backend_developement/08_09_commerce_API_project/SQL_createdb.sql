CREATE TABLE brands (
id uuid PRIMARY KEY,
title varchar
)

CREATE TABLE categories (
    id uuid PRIMARY KEY,
    decathlon_id integer,
    label varchar
);

CREATE TABLE products (
    id uuid PRIMARY KEY,
    decathlon_id integer,
    title varchar,
    description text,
    brand_id varchar,
    min_price float,
    max_price float,
    crossed_price float,
    percent_reduction integer,
    image_path varchar,
    rating float
);

CREATE TABLE products_categories (
id serial primary key,
product_id uuid,
categorie_id uuid
);
