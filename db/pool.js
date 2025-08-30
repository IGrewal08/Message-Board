import { Pool } from "pg";
import 'dotenv/config';

export default new Pool ({
    user: process.env.ROLE_NAME,
    host: "localhost",
    database: "messages",
    password: process.env.ROLE_PASSWORD,
    post: 5432,
});