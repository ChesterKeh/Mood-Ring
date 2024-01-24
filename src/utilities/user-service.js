import * as usersAPI from "./user-api";

export async function signUp(userData) {
  //* data check / cleanup

  // ! does the same, clean up//
  const res = await usersAPI.signUp(userData);
  const token = res.token;

  console.log(res);
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
