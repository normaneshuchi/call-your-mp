import { prisma } from "@/common/db";
import { User } from "@prisma/client";

export async function POST(request: Request) {
  const payload: User = await request.json();
  payload.roleId = 4;
  try {
    const user = await prisma.user.create({
      data: payload,
    });
    return Response.json({ user });
  } catch (error) {
    console.log(error);
    return Response.json({ error });
  }
}
