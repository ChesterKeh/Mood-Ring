const BASE_URL = "/api/users";

//* all the fetch for users should be here
export async function signUp(userData) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (res.ok) {
    log("return json");
    return res.json();
  } else {
    log("error in signup");
    throw new Error("Invalid Sign Up");
  }
}
