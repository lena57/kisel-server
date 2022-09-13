import infoRouter from "../info/infoRouter";
import clientRouter from "../client/clientRouter";

export default function routes(app){
  app.use('/info', infoRouter);
  app.use('/client', clientRouter);
}