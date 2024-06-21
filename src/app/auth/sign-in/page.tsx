"use client";

import AuthCard from "@/components/buttons/Cards/AuthCard";
import SignInForm from "@/forms/SignInForm";
import React from "react";

function SignIn() {
  return (
    <AuthCard>
      <SignInForm />
    </AuthCard>
  );
}

export default SignIn;
