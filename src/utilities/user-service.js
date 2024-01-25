import * as usersAPI from "./user-api";

export async function signUp(userData) {
  const res = await usersAPI.signUp(userData);
  const token = res.token;
  if (!res) {
    return null;
  }
  const payload = JSON.parse(atob(token.split(".")[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem("token");
    return null;
  }
  localStorage.setItem("token", token);
  return res.user;
}

export function getToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  // Obtain the payload of the token
  const payload = JSON.parse(atob(token.split(".")[1]));
  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired - remove it from localStorage
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export async function getPublicUsers() {
  const response = await usersAPI.getPublicUsers();
  return response;
}

export async function getUser(userId) {
  const response = await usersAPI.getUser(userId);
  return response;
}

export async function addFriend(friendId) {
  const response = await usersAPI.addFriend(friendId);
  return response;
}

export async function removeFriend(userData) {
  const response = await usersAPI.removeFriend(userData);
  return response;
}
