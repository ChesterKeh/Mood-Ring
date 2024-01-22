import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../../../components/UserForm/SignupForm/SignupForm";

export default function SignupAuthPage() {
  return (
    <main>
      <h1>AuthPage</h1>
      <SignUpForm />

      <p>
        {" "}
        If you already have an account, just <Link to="/login"> login</Link>.
      </p>
    </main>
  );
}
