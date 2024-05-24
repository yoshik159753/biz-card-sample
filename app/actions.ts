"use server";

import { unstable_noStore } from "next/cache";
import { cookies } from "next/headers";
import { generateAccessToken } from "./lib/auth";

export async function authOwner(num: string) {
  unstable_noStore();
  if (num !== process.env.OWNER_PASSCODE) return false;
  const token = generateAccessToken();
  const oneDay = 24 * 60 * 60 * 1000;
  cookies().set({
    name: "token",
    value: token,
    httpOnly: true,
    path: "/",
    maxAge: oneDay,
  });
  return true;
}
