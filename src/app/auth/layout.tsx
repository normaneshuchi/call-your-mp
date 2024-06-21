import { Container } from "@mantine/core";
import React from "react";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container
      sx={{ minHeight: "100vh" }}
      size="sm"
    >
      {children}
    </Container>
  )
}

export default Layout;