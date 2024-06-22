import { prisma } from "@/common/db";
import { UserRole } from "@prisma/client";

export async function POST(request: Request) {
  const payload: UserRole = await request.json();
  try {
    const role = await prisma.userRole.create({
      data: payload,
    });
    return Response.json({ role });
  } catch (error) {
    return Response.json({ error });
  }
}
