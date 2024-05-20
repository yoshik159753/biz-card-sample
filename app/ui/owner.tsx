import { generateAccessToken } from "@/app/lib/auth";
import Image from "next/image";
import QRCode from "qrcode";

export default async function Owner() {
  const token = generateAccessToken();
  const url = `${process.env.BASE_URL}/?token=${token}`;
  const qrcodeImg = await QRCode.toDataURL(url);
  return (
    <>
      <h1>Owner page</h1>
      <p>token: {token}</p>
      <Image src={qrcodeImg} width={150} height={150} alt="qrcode" />
    </>
  );
}
