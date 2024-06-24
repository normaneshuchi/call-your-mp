"use client";

import {
  INPUT_RADIUS,
  PRIMARY_COLOR,
  PRIMARY_GRADIENT,
  SECONDARY_COLOR,
} from "@/common/styles";
import { Button, Grid, GridCol, TextInput, Title, Text } from "@mantine/core";
import { User } from "@prisma/client";
import { IconAt } from "@tabler/icons-react";
import axios from "axios";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

type UserPayload = Omit<
  User,
  "id" | "createdAt" | "updatedAt" | "emailVerified" | "roleId"
>;
const SignUpForm = () => {
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        confirmEmail: "",
      }}
      onSubmit={async (values) => {
        const payload: UserPayload = {
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName,
        };
        try {
          const res = await axios.post("/api/user", payload);
          console.log(res);
          router.push("/auth/sign-in");
        } catch (error) {
          console.log(error);
        }
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
                Have an account?{" "}
                <Text component="span" fz="xs" c={PRIMARY_COLOR} fw="bold">
                  Sign In Here
                </Text>
              </Text>
            </GridCol>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
