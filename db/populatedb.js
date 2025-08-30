#! /usr/bin/env node
import { Client } from "pg";
import 'dotenv/config';

const SQL = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255),
    message TEXT,
    date TIMESTAMP
);

INSERT INTO users (name, message, date)
VALUES 
    ('Amando', 'Hi there!', NOW()),
    ('Charles', 'Hello World!', NOW());
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        host: 'localhost',
        port: 5432,
        name: process.env.ROLE_NAME,
        password: process.env.ROLE_PASSWORD,
        database: 'messages',
    });
    await client.connect();
    await client.query(SQL);
    await client.end();                 // ending client after done creating sql table
    console.log("done");
}

main();