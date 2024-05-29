import { generateAccessToken } from "@/app/lib/auth";
import Image from "next/image";
import QRCode from "qrcode";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

const info = {
  logoPath: "/logo.jpeg",
  affiliationSummary: "affiliationSummary",
  affiliationDetails: "affiliationDetails",
  name: "name",
  nameKana: "nameKana",
  companyName: "companyName",
  companyPostCode: "companyPostCode",
  companyAddress1: "companyAddress1",
  companyAddress2: "companyAddress2",
  companyTel: "companyTel",
  companyEMail: "companyEMail",
  companyUrl: "companyUrl",
};

export function ProfileLayout({ children }: { children: React.ReactNode }) {
  return <div className="px-10 font-mono">{children}</div>;
}

export function ProfileHeaderLogo() {
  return (
    <div>
      <p className="mb-40">&nbsp;</p>
    </div>
  );
}

export function ProfileLogo() {
  return (
    <div className="mt-8">
      <Image src={info.logoPath} width={200} height={200} alt="logo" />
    </div>
  );
}

export async function ProfileRedirectClientPageQRCode() {
  const token = generateAccessToken();
  const url = `${process.env.BASE_URL}/${token}`;
  const qrcodeImg = await QRCode.toDataURL(url);
  return (
    <div>
      <Image src={qrcodeImg} width={100} height={100} alt="qrcode" />
    </div>
  );
}

export function ProfileUser() {
  return (
    <div className="text-sm">
      <p>{info.affiliationSummary}</p>
      <p>{info.affiliationDetails}</p>
      <p className="text-3xl font-bold">{info.name}</p>
      <p>{info.nameKana}</p>
    </div>
  );
}

export function ProfileCompany() {
  return (
    <div className="mt-8 text-sm">
      <p className="text-lg font-medium">{info.companyName}</p>
      <p>
        〒{info.companyPostCode} {info.companyAddress1}
      </p>
      <p>{info.companyAddress2}</p>
      <div className="flex gap-1">
        <DevicePhoneMobileIcon className="w-3" />
        <p>{info.companyTel}</p>
      </div>
      <div className="flex gap-1">
        <EnvelopeIcon className="w-3" />
        <p>{info.companyEMail}</p>
      </div>
      <p>{info.companyUrl}</p>
    </div>
  );
}
