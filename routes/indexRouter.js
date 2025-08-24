import { Router } from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const indexRouter = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  res.render("index", { messages: messages });
});

export default indexRouter;