import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";

import type { Adapter } from "next-auth/adapters";
import { prisma } from "@/common/db";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth({
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: PrismaAdapter(prisma) as Adapter,
  secret: "some secret",
});

export { handler as GET, handler as POST };
