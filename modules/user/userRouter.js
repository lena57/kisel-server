import { Router } from 'express';
import {userRegister} from "./userRegister";
import {userGetAll} from "./userGetAll";

const router = Router();
router.post('/', userRegister); //POST localhost:5007/user
router.get('/', userGetAll); //GET localhost:5007/user

export default router;