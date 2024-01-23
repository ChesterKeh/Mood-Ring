import * as taskAPI from "./task-api";

export async function createTask(taskData) {
  const response = await taskAPI.createTask(taskData);
  return response;
}
