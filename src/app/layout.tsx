import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";

import { ColorSchemeScript, Container, MantineProvider } from "@mantine/core";

import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { RootStyleRegistry } from "./EmotionRootStyleRegistry";

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
    <html suppressHydrationWarning={true} lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <RootStyleRegistry>
          <MantineEmotionProvider>
            <MantineProvider
              theme={{
                fontFamily: inter.style.fontFamily,
              }}
              stylesTransform={emotionTransform}
            >
              <Container bg="#FAFAFA" component="main" fluid p={0} mx="auto">
                {children}
              </Container>
            </MantineProvider>
          </MantineEmotionProvider>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
