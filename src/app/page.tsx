import { Container, Text } from "@mantine/core";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  if (!session) redirect("auth/sign-in");

  return (
    <Container fluid p={0}>
      <Text>{JSON.stringify(session)}</Text>
    </Container>
  );
}
