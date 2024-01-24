import * as taskAPI from "./task-api";

export async function getTask() {
  const response = await taskAPI.getTask();
  return response;
}

export async function createTask(taskData) {
  const response = await taskAPI.createTask(taskData);
  return response;
}

export async function createTaskWithSubtasks(taskData) {
  const taskResponse = await taskAPI.createTask(taskData);

  return taskResponse;
}

export async function createSubtask(taskID, subtaskData) {
  const response = await taskAPI.createSubtask({
    taskID: taskID,
    subtask: subtaskData.item,
  });
  return response;
}

export async function updateTask(taskData) {
  const response = await taskAPI.updateTask(taskData);
  return response;
}

export async function deleteTask(taskData) {
  const response = await taskAPI.deleteTask(taskData);
  return response;
}
