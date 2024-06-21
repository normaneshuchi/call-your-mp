import { Button, Container, Text } from "@mantine/core";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {

  const session = await getServerSession();


  return (
    <Container fluid p={0}>
      <Text>
        <Button component={Link} href="/api/auth/signin">Login</Button>
        {JSON.stringify(session)}
      </Text>

    </Container>
  );
}
