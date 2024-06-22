"use client";

import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Burger,
  Flex,
  NavLink,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 40 }}
      navbar={{ width: 260, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShellHeader>
        <Flex h="100%" px="lg" justify="space-between" align="center">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text>Admin</Text>
        </Flex>
      </AppShellHeader>
      <AppShellNavbar px={0}>
        <NavLink label="Dashboard" href="/admin" />
        <NavLink label="Users" href="#required-for-focus">
          <NavLink label="Users" href="/admin/users" />
          <NavLink label="Roles" href="/admin/users/roles" />
        </NavLink>
      </AppShellNavbar>
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
}

export default Layout;
