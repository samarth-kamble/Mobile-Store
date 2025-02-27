"use server";

import { currentRole } from "@/lib/auth";
import { db } from "@/lib/db";
import { UserRole } from "@prisma/client";

export const admin = async () => {
  const role = await currentRole();

  if (role === UserRole.ADMIN) {
    return { success: "Allowed Server Action!" };
  }

  return { error: "Forbidden Server Action!" };
};

export const promoteToAdmin = async (userId: string) => {
  const role = await currentRole();

  if (role !== UserRole.ADMIN) {
    return { error: "Forbidden! Only admins can perform this action." };
  }

  const updatedUser = await db.user.update({
    where: { id: userId },
    data: { role: UserRole.ADMIN },
  });

  return { success: `User ${updatedUser.email} is now an admin!` };
};
