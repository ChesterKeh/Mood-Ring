import { signUp } from "../../../utilities/user-service";

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

    const form = new FormData(event.target);
    const data = Object.fromEntries(form);
    // console.log(data);
    const token = await postData("/api/users/login", data);
    localStorage.setItem("token", token.token);
    setUser(signUp());
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
        <button>Login</button>
      </fieldset>
    </form>
  );
}
