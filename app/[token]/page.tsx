import PermissionDenied from "@/app/[token]/ui/permission-denied";
import Client from "@/app/[token]/ui/client";
import { isInvalidClientToken } from "@/app/[token]/lib/auth";

export default async function Page({ params }: { params: { token: string } }) {
  return isInvalidClientToken(params.token) ? <PermissionDenied /> : <Client />;
}
