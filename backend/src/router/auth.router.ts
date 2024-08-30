import { Router } from "express";
import * as controller from "../controller";

const router = Router();

router.post('/user-Registration', controller.userRegistration);
router.post('/check-mail', controller.check_mail);

export default router;