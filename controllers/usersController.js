//import { body, validationResult } from 'express-validator';
import db from '../db/queries.js';

async function getMessages(req, res) {
    const messages = await db.searchAllUsers();
    res.render('index', { messages: messages });
}

async function getSelectedMessage(req, res) {
  const myQuery = req.params.user;
  console.log(myQuery);
  const selectedMessage = await db.searchUser(myQuery);
  console.log(selectedMessage);
  res.render('detail', { selectedMessage: selectedMessage });
}

async function postNewMessage(req, res) {
    const message = req.body;
    await db.addUser({ name: message.nameText, message: message.messageText, date: new Date() });
    res.redirect('/');
}

export { getMessages, getSelectedMessage, postNewMessage };