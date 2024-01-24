const BASE_URL = "/api/task";

export async function getTask() {
  const res = await fetch(BASE_URL, {
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    return res.json();
  } else {
    return res;
  }
}

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
  }
}

export async function createSubtask(subtaskData) {
  const res = await fetch(BASE_URL + "/create/:id/subtask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(subtaskData),
  });
  if (res.ok) {
    return res.json();
  } else {
    return res;
  }
}

export async function updateTask(taskData) {
  const res = await fetch(BASE_URL + "/update", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
  });
  if (res.ok) {
    return res.json();
  } else {
    return res;
  }
}

export async function deleteTask(taskData) {
  const res = await fetch(BASE_URL + "/delete", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
  });
  if (res.ok) {
    return res.json();
  } else {
    return res;
  }
}
