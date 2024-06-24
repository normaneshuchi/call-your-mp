import AuthCard from "@/components/Cards/AuthCard";
import SignInForm from "@/forms/SignInForm";
import React from "react";
import { getCsrfToken } from "next-auth/react";

async function SignIn() {
  const csrfToken = await getCsrfToken();

  return (
    <AuthCard>
      <SignInForm csrf={csrfToken} />
    </AuthCard>
  );
}

export default SignIn;
