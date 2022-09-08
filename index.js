import express from 'express';
import errorHandler from './modules/core/error/errorHandler';
import logger from './modules/core/logger';
import parseResponse from './modules/core/parseResponse';
import cors from './modules/core/cors';
import routes from './modules/core/routes';
import bdConnect from './modules/core/db';

const app = express();
const PORT = 5001;

bdConnect();
logger(app);
parseResponse(app);
cors(app);
routes(app);
errorHandler(app);

app.listen(PORT, () => {
  console.log(`Kisel App listening at http://localhost:${PORT}`);
});
