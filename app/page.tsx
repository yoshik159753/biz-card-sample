import { cookies } from "next/headers";
import { isInvalidClientToken, isValidOwnerToken } from "@/app/lib/auth";
import Owner from "@/app/ui/owner";
import PermissionDenied from "@/app/ui/permission-denied";
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

  const ownerToken = cookieStore.has("token")
    ? cookieStore.get("token").value
    : undefined;

  if (searchParams.token) {
    return isInvalidClientToken(searchParams.token) ? (
      <PermissionDenied />
    ) : (
      <Client />
    );
  }

  return !!process.env.SHOULD_SKIP_OWNER_TOKEN_AUTHENTICATION ||
    (ownerToken && isValidOwnerToken(ownerToken)) ? (
    <Owner />
  ) : (
    <AuthOwner />
  );
}
