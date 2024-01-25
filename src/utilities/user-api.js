const BASE_URL = "/api/users";

//* all the fetch for users should be here
export async function signUp(userData) {
  const res = await fetch(BASE_URL + "/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (res.ok) {
    console.log("return json");
    return res.json();
  } else {
    console.log("error in signup");
    throw new Error("Invalid Sign Up");
  }
}

export async function getPublicUsers() {
  const res = await fetch(BASE_URL + "/getpublicusers", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Error fetching public users");
  }
}

export async function getUser(userId){
  const res = await fetch(BASE_URL + "/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" }, 
    body: JSON.stringify(userId),
  });
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    return res;
  }
}

export async function addFriend(friendId) {
  const res = await fetch(BASE_URL + "/addfriend", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(friendId),
  });
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    throw new Error("Error adding friend");
  }
}

export async function removeFriend(userData) {
  const res = await fetch(BASE_URL + "/removefriend", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Error removing friend");
  }
}