"use client";

import React from "react";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import { Button, Text, TextInput, Title } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";

import Link from "next/link";
import {
  INPUT_RADIUS,
  PRIMARY_COLOR,
  PRIMARY_GRADIENT,
  SECONDARY_COLOR,
} from "@/common/styles";
import axios from "axios";

const validators = object().shape({
  email: string()
    .email("Please enter a valid email address")
    .required("Required"),
});

function SignInForm({ csrf }: { csrf: string | undefined }) {
  return (
    <Formik
      initialValues={{ email: "", csrfToken: csrf }}
      onSubmit={async (values) => {
        try {
          const res = await axios.post("/api/auth/signin/email", values);
          console.log("res", res);
        } catch (error) {
          console.log("err", error);
        }
      }}
      validateOnChange={true}
      validationSchema={validators}
    >
      {({ isSubmitting, errors, isValid, handleSubmit, handleChange }) => (
        <Form onSubmit={handleSubmit}>
          <Title c={SECONDARY_COLOR} my="md" fz="h2" fw="bold">
            Sign In
          </Title>
          <TextInput
            my="md"
            type="email"
            name="email"
            id="email"
            label="Enter your email address"
            placeholder="neal@abc.com"
            radius={INPUT_RADIUS}
            error={errors.email}
            onChange={handleChange}
            leftSection={<IconAt size={16} />}
            leftSectionPointerEvents="none"
          />
          <Button
            variant="gradient"
            gradient={PRIMARY_GRADIENT}
            radius="lg"
            loading={isSubmitting}
            type="submit"
            fullWidth
            size="sm"
            disabled={!isValid}
          >
            Get Your Link
          </Button>
          <Text
            my="lg"
            fz="xs"
            ta="center"
            component={Link}
            href="/auth/sign-up"
          >
            Don&apos;t have an account?{" "}
            <Text component="span" fz="xs" c={PRIMARY_COLOR} fw="bold">
              Sign Up Here
            </Text>
          </Text>
        </Form>
      )}
    </Formik>
  );
}

export default SignInForm;
