export async function createUser(user) {
  console.log(user);
  const newItem = {
    name: user.name,
    email: user.email,
    password: user.password,
  };
  console.log(newItem);
  const response = await fetch("http://localhost:3000/api/users/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newItem),
  });
  const jsonData = await response.json();
  return jsonData;
}
