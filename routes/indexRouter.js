import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (res, req) => {
    res.send("Sample from index");
    //res.sendFile(__dirname + "");
});