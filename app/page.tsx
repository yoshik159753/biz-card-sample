import { cookies } from "next/headers";
import { isValidOwnerToken } from "@/app/lib/auth";
import Owner from "@/app/ui/owner";
import AuthOwner from "@/app/ui/auth-owner";

export default async function Page() {
  const cookieStore = cookies();

  const ownerToken = cookieStore.has("token")
    ? cookieStore.get("token").value
    : undefined;

  return !!process.env.SHOULD_SKIP_OWNER_TOKEN_AUTHENTICATION ||
    (ownerToken && isValidOwnerToken(ownerToken)) ? (
    <Owner />
  ) : (
    <AuthOwner />
  );
}
