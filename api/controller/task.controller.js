import Task from "../model/task.model.js";

export const createTask = async (req, res) => {
  const { title, desc } = req.body;
  try {
    if (!title || !desc)
      return res.status(404).json({
        success: false,
        message: "Fill all fields !",
      });
    const task = new Task({ title, desc });

    await task.save();
    res.status(201).json({
      success: true,
      message: "create Task is success",
      task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
      Error: error.message,
    });
  }
};
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "All tasks are here",
      Tasks: tasks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      Error: error.message,
    });
  }
};

export const taskDalate = async (req, res) => {
  const { taskId } = req.params;
  try {
    const task = await Task.findByIdAndDelete(taskId);
    if (!task)
      return res.status(404).json({
        success: false,
        message: `Don't Find any task releated this ${taskId}`,
      });
    res.status(200).json({
      success: true,
      message: "Deleted Tasks is Success",
      task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
      Error: error.message,
    });
  }
};
