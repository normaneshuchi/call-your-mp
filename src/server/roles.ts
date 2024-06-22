import { prisma } from "@/common/db";
import { UserRole } from "@prisma/client";

export const postRole = (payload: UserRole) => {
  return prisma.userRole.create({
    data: payload,
  });
};

export const getRoles = () => {
  return prisma.userRole.findMany();
};

export const getRole = (id: number) => {
  return prisma.userRole.findUnique({
    where: {
      id,
    },
  });
};

export const updateRole = (id: number, payload: UserRole) => {
  return prisma.userRole.update({
    where: {
      id,
    },
    data: payload,
  });
};
