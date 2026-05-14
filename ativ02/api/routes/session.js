import { Router } from "express";
import { sessionController } from "../controllers";

const router = Router();

router.get("/", sessionController.getSession);
router.post("/login", sessionController.login);
router.post("/logout", sessionController.logout);
router.post("/refresh", sessionController.refresh);

export default router;
