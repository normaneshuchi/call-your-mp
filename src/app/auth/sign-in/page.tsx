"use client";

import AuthCard from "@/components/Cards/AuthCard";
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
