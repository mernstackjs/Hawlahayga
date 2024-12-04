import { Router } from "express";
import {
  createTask,
  getAllTasks,
  taskDalate,
} from "../../controller/task.controller.js";

const router = Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.delete("/:taskId", taskDalate);

export default router;
