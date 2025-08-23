import express from "express";
import path from "node:path";

import indexRouter from "./routes/indexRouter.js";
import newRouter from "./routes/newRouter.js";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/new", newRouter);
app.use("/", indexRouter);

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    },
];

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        throw error
    }
    console.log(`Express app on ${PORT}`);
});