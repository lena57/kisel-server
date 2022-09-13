import { Router } from 'express';
import { clientCreate } from "./clientCreate";
import {clientGetAll} from "./clientGetAll";

const router = Router();
router.post('/', clientCreate); //POST localhost:5007/user
router.get('/', clientGetAll); //GET localhost:5007/user

export default router;