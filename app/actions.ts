"use server";

import { unstable_noStore } from "next/cache";
import { cookies } from "next/headers";

export async function authOwner(num: string) {
  unstable_noStore();
  if (num !== process.env.OWNER_PASSCODE) return false;
  // TODO: 暗号化したあれこれを cookie で保持する
  // TODO: session の期限も短く設定
  cookies().set({
    name: "name",
    value: "lee",
    httpOnly: true,
    path: "/",
  });
  return true;
}
