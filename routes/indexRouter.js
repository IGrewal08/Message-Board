import { Router } from 'express';
import express from 'express';

const indexRouter = Router();
indexRouter.use(express.urlencoded({ extended: true }));
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get('/', (req, res) => {
  res.render('index', { messages: messages });
});

indexRouter.post('/new', (req, res) => {
  const message = req.body;
  messages.push({ text: message.messageText, user: message.nameText, added: new Date() });
  res.redirect('/');
});

export default indexRouter;