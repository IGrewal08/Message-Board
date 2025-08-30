import pool from './pool.js';

async function searchAllUsers() {
    try {
        const { rows } = await pool.query('SELECT * FROM users');
        return rows;
    } catch(err) {
        console.error('Error executing query', err.stack);
    }
}

async function searchUser(user) {
    try {
        const { rows } = await pool.query('SELECT * FROM users WHERE name LIKE $1', [user]);
        return rows[0];
    } catch(err) {
        console.error('Error executing query', err.stack);
    }
}

async function addUser(params) {
    try {
        const { name, message, date } = params;
        await pool.query('INSERT INTO users (name, message, date) VALUES ($1, $2, $3)', [name, message, date]); 
    } catch(err) {
        console.error('Error executing query', err.stack);
    }
}

async function deleteUser(user) {
    try {
        await pool.query('DELETE FROM users WHERE $1 == name', [user]);
    } catch(err) {
        console.error('Error executing query', err.stack);
    }
}

export default { searchAllUsers, searchUser, addUser, deleteUser };