import { Router } from 'express';

const newRouter = Router();

newRouter.get('/', (req, res) => {
  res.send("Sample from new Route");
  //res.sendFile(__dirname + "");
});

export default newRouter;