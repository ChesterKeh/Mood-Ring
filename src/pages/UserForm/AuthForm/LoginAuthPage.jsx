import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../../components/UserForm/LoginForm/LoginForm";

export default function LoginAuthPage() {
  return (
    <main>
      <h1>AuthPage</h1>
      <LoginForm />

      <p>
        If you don't have an account, <Link to="/signup">signup</Link> here.
      </p>
    </main>
  );
}
