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
