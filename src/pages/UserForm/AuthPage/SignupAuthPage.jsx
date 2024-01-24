import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../../../components/UserForm/SignupForm/SignupForm";
import LoginAuthPage from "./LoginAuthPage";
import { useNavigate } from "react-router-dom";

export default function SignupAuthPage({ setUser }) {
  const navigate = useNavigate();

  return (
    <main>
      <h1>AuthPage</h1>
      <SignUpForm
        setUser={setUser}
        navigate={navigate}
      />
      <p>
        {" "}
        If you already have an account, just <Link to="/login"> login</Link>.
      </p>
    </main>
  );
}
