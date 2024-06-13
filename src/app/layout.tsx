import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import '@mantine/core/styles.css';

import { AppShell, AppShellFooter, AppShellHeader, AppShellMain, Burger, Center, ColorSchemeScript, MantineProvider } from '@mantine/core';

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
        <MantineProvider>
          <AppShell>
            <AppShellHeader p={16}>
              Logo
            </AppShellHeader>
            <AppShellMain>{children}</AppShellMain>
            <AppShellFooter>
              <Center py={16}>Peace. Love. Harmony</Center>
            </AppShellFooter>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
