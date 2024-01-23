import * as taskAPI from "./task-api";

// export async function createTask(taskData) {
//   const response = await taskAPI.createTask(taskData);
//   return response;
// }

export async function createTaskWithSubtasks(taskData) {
  const taskResponse = await taskAPI.createTask(taskData);

  return taskResponse;
}

// Function to create a subtask
export async function createSubtask(taskID, subtaskData) {
  try {
    const response = await taskAPI.createSubtask({
      taskID: taskID,
      subtask: subtaskData.item,
    });

    console.log("Subtask created:", response);

    return response;
  } catch (error) {
    console.error("Error creating subtask:", error);
    throw error; // Re-throw the error to propagate it further if needed
  }
}
