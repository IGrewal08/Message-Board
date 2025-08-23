import { Router } from "express";

const newRouter = Router();

newRouter.get("/", (res, req) => {
    res.send("Sample from new Route");
    //res.sendFile(__dirname + "");
});