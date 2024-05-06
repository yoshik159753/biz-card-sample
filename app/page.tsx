import { cookies } from "next/headers";
import { isInvalidClientToken, isValidOwnerToken } from "@/app/lib/auth";
import Owner from "@/app/ui/owner";
import Forbidden from "@/app/ui/forbidden";
import Client from "@/app/ui/client";
import AuthOwner from "@/app/ui/auth-owner";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    token?: string;
  };
}) {
  const cookieStore = cookies();

  const ownerToken = cookieStore.has("name")
    ? cookieStore.get("name").value
    : undefined;

  if (isValidOwnerToken(ownerToken)) {
    return <Owner></Owner>;
  }
  if (!searchParams.token) {
    return <AuthOwner></AuthOwner>;
  }
  if (isInvalidClientToken(searchParams.token)) {
    return <Forbidden></Forbidden>;
  }
  return <Client></Client>;
}
