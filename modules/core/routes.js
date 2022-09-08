import infoRouter from "../info/infoRouter";
import userRouter from "../user/userRouter";

export default function routes(app){
  app.use('/info', infoRouter);
  app.use('/user', userRouter);
}