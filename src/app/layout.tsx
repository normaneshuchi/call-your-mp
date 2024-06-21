import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";

import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  Text,
  Center,
  ColorSchemeScript,
  MantineProvider,
  Container
} from "@mantine/core";
import { APP_NAME } from "@/common/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Call Your MP",
  description: "We Must Hold Them Accountable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider
          theme={{
            fontFamily: inter.style.fontFamily,
          }}
        >
          <AppShell
            header={{ height: 40, offset: true, }}
            padding={0}>
            <AppShellHeader pt={5} >
              <Container fluid>
                <Text fw={700} size="xl"> {APP_NAME} </Text>
              </Container>
            </AppShellHeader>
            <AppShellMain>{children}</AppShellMain>
            <AppShellFooter>
              <Center py={16}>
                <Text fw={600}>Peace. Love. Harmony</Text>
              </Center>
            </AppShellFooter>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
