import express from 'express';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import indexRouter from './routes/indexRouter.js';
import newRouter from './routes/newRouter.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);          // get resolved path to file
const __dirname = path.dirname(__filename);                 // get name of directory

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/new', newRouter);
app.use('/', indexRouter);

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express app on ${PORT}`);
});
