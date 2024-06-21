import React from "react";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import { Button, Text, TextInput } from "@mantine/core";
import Link from "next/link";
import { PRIMARY_GRADIENT, SECONDARY_COLOR } from "@/common/styles";

const validators = object().shape({
  email: string()
    .email("Please enter a valid email address")
    .required("Required"),
});

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function SignInForm() {
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={async (values) => {
        await sleep(3000);
        console.log(values);
      }}
      validateOnChange={true}
      validationSchema={validators}
    >
      {({ isSubmitting, errors, isValid, handleSubmit, handleChange }) => (
        <Form onSubmit={handleSubmit}>
          <Text c={SECONDARY_COLOR} ta="center" my="lg" fz="h3" fw="bold">
            Sign In
          </Text>
          <TextInput
            my="md"
            type="email"
            name="email"
            id="email"
            label="Enter your email address"
            placeholder="neal@abc.com"
            radius="lg"
            error={errors.email}
            onChange={handleChange}
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
            Don&apos;t have an account? <strong>Sign Up Here</strong>
          </Text>
        </Form>
      )}
    </Formik>
  );
}

export default SignInForm;
