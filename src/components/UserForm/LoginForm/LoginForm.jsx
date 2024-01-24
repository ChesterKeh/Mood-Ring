import { getUser } from "../../../utilities/user-service";
import { useState } from "react";

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export default function LoginForm({ setUser }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    const form = new FormData(event.target);
    const data = Object.fromEntries(form);
    // console.log(data);

    try {
      const token = await postData("/api/users/login", data);
      localStorage.setItem("token", token.token);
      console.log(token);
      // Correct the setUser call here
      setUser(getUser());
    } catch (error) {
      // console.error("An error occurred:", error);
      // Handle the error (e.g., display an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Login</legend>
        <label>
          Email:{" "}
          <input
            name="email"
            type="email"
          />
        </label>
        <br />
        <label>
          Password:
          <input name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </fieldset>
    </form>
  );
}
