CREATE DATABASE knex_shopping OWNER user2;
\c knex_shopping;
CREATE TABLE users (
    user_id SERIAL NOT NULL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP,
    update_at TIMESTAMP
);
ALTER TABLE users OWNER TO user2;
CREATE TABLE products (
    product_id SERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    inventory INTEGER,
    price DECIMAL(8,2),
    created_at TIMESTAMP,
    update_at TIMESTAMP
);
ALTER TABLE products OWNER TO user2;
CREATE TABLE cart (
    cart_id SERIAL NOT NULL PRIMARY KEY,
    user_id INTEGER REFERENCES users,
    products_id INTEGER REFERENCES products,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
ALTER TABLE cart OWNER TO user2;