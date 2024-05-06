import { generateAccessToken } from "@/app/lib/auth";

export default function Owner() {
  const token = generateAccessToken();

  return (
    <>
      <h1>Owner page</h1>
      <p>token: {token}</p>
    </>
  );
}
