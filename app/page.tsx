import { cookies } from "next/headers";
import AuthOwner from "@/app/AuthOwner";

export default async function Page() {
  const cookieStore = cookies();

  const token = cookieStore.has("name")
    ? cookieStore.get("name").value
    : undefined;

  function isValidOwnerToken(token: string) {
    // TODO: cookie のあれこれを復号化してチェックしてOKなら true
    return token === "lee";
  }

  return (
    <>
      {isValidOwnerToken(token) ? (
        <h1>Owner Page!!!</h1>
      ) : (
        <AuthOwner></AuthOwner>
      )}
    </>
  );
}
