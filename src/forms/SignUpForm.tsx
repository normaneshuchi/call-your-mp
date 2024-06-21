"use client";

import {
  INPUT_RADIUS,
  PRIMARY_GRADIENT,
  SECONDARY_COLOR,
} from "@/common/styles";
import { sleep } from "@/common/utils";
import { Button, Grid, GridCol, TextInput, Title, Text } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { Form, Formik } from "formik";
import Link from "next/link";
import { object, string, ref } from "yup";

const signUpValidators = object().shape({
  email: string()
    .email("Please enter a valid email address")
    .required("Required"),
  firstName: string().required("Enter your first name"),
  lastName: string().required("Enter your last name"),
  confirmEmail: string()
    .required("Confirm your email address")
    .oneOf([ref("email")], "Your Email addresses do not match"),
});
const SignUpForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        confirmEmail: "",
      }}
      onSubmit={async (values) => {
        await sleep(3000);
        console.log(values);
      }}
      validateOnChange={true}
      validationSchema={signUpValidators}
    >
      {({
        isSubmitting,
        errors,
        isValid,
        handleSubmit,
        handleChange,
        touched,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Title c={SECONDARY_COLOR} my="md" fz="h2" fw="bold">
            Sign Up
          </Title>
          <Grid gutter={"md"}>
            <GridCol span={6}>
              <TextInput
                name="firstName"
                id="firstName"
                label="First Name"
                placeholder="John"
                radius={INPUT_RADIUS}
                error={touched.firstName && errors.firstName}
                onChange={handleChange}
              />
            </GridCol>
            <GridCol span={6}>
              <TextInput
                name="lastName"
                id="lastName"
                label="Last Name"
                placeholder="Doe"
                radius={INPUT_RADIUS}
                error={touched.lastName && errors.lastName}
                onChange={handleChange}
              />
            </GridCol>
            <GridCol span={12}>
              <TextInput
                name="email"
                id="email"
                label="Email address"
                placeholder="neal@abc.com"
                radius={INPUT_RADIUS}
                error={errors.email}
                onChange={handleChange}
                leftSection={<IconAt size={16} />}
                leftSectionPointerEvents="none"
              />
            </GridCol>
            <GridCol span={12}>
              <TextInput
                name="confirmEmail"
                id="confirmEmail"
                label="Confirm your email address"
                placeholder="neal@abc.com"
                radius={INPUT_RADIUS}
                error={errors.confirmEmail}
                onChange={handleChange}
                leftSection={<IconAt size={16} />}
                leftSectionPointerEvents="none"
              />
            </GridCol>
            <GridCol span={12}>
              <Button
                type="submit"
                radius={INPUT_RADIUS}
                variant="gradient"
                gradient={PRIMARY_GRADIENT}
                fullWidth
                disabled={!isValid}
                loading={isSubmitting}
              >
                Submit
              </Button>
              <Text fz="xs" component={Link} href={"/auth/sign-in"}>
                Have an account? <strong>Sign In Here</strong>
              </Text>
            </GridCol>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
