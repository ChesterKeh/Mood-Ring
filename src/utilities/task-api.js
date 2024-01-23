const BASE_URL = "/api/task";

export async function createTask(taskData) {
  const res = await fetch(BASE_URL + "/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
  });
  if (res.ok) {
    return res.json();
  } else {
    return res;
    // throw new Error("Create Event Error");
  }
}
