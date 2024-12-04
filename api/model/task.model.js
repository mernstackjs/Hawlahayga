import { model, Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: String,
    desc: String,
    isComplated: {
      type: String,
      default: false,
    },
  },
  { timestamps: true }
);

const Task = model("Task", taskSchema);

export default Task;
