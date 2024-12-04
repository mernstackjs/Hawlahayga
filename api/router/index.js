import { Router } from "express";

const router = Router();
import taskRoute from "./api/task.js";
router.use("/task", taskRoute);

export default router;
