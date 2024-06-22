import { prisma } from "@/common/db";
import { User } from "@prisma/client";

export const createUser = (payload: User) => {
  return prisma.user.create({ data: payload });
};
