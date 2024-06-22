"use client";

import {
  INPUT_RADIUS,
  PRIMARY_GRADIENT,
  SECONDARY_COLOR,
} from "@/common/styles";
import { Button, Container, TextInput, Textarea, Title } from "@mantine/core";
import { UserRole } from "@prisma/client";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import axios from "axios";

const validators = object().shape({
  name: string().required("Enter a valid name"),
  description: string().required("Enter a valid description"),
});
type OmittedFields = "id" | "createdAt" | "updatedAt";
type UserRolePayload = Omit<UserRole, OmittedFields>;

export const UserRoleForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
      }}
      onSubmit={async (values) => {
        const payload: UserRolePayload = {
          name: values.name,
          description: values.description,
        };
        try {
          await axios.post("/api/user/role", payload);
          window.location.reload();
          close();
        } catch (error) {
          console.log(error);
        }
      }}
      validationSchema={validators}
    >
      {({ isSubmitting, errors, isValid, handleSubmit, handleChange }) => (
        <Form onSubmit={handleSubmit}>
          <Title c={SECONDARY_COLOR} mb="xs" fz="h3" fw="bold">
            Add a Role
          </Title>
          <Container fluid p={0} my="sm">
            <TextInput
              my="sm"
              id="name"
              name="name"
              type="text"
              label="Name"
              radius={INPUT_RADIUS}
              error={errors.name}
              onChange={handleChange}
            />
            <Textarea
              my="sm"
              id="description"
              name="description"
              label="Description"
              minLength={4}
              radius={INPUT_RADIUS}
              error={errors.description}
              onChange={handleChange}
            />
            <Button
              type="submit"
              radius={INPUT_RADIUS}
              variant="gradient"
              gradient={PRIMARY_GRADIENT}
              fullWidth
              disabled={!isValid}
              loading={isSubmitting}
              mt="md"
              mb="xl"
            >
              Submit
            </Button>
          </Container>
        </Form>
      )}
    </Formik>
  );
};
