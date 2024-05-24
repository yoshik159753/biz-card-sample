import dayjs from "dayjs";
import { decryptText, encryptText } from "@/app/lib/crypt";

function encryptDateTimeToToken(date: dayjs.Dayjs) {
  return encryptText(date.toISOString());
}

function decryptTokenToDateTime(token: string) {
  return dayjs(decryptText(token));
}

export function generateAccessToken() {
  return encryptDateTimeToToken(dayjs());
}

export function isInvalidClientToken(token: string) {
  try {
    const dt = decryptTokenToDateTime(token);
    if (!dt.isValid()) return true;
    return dt
      .add(Number(process.env.ACCESS_TOKEN_EXPIRATION_MONTH), "M")
      .add(Number(process.env.ACCESS_TOKEN_EXPIRATION_DAY_OF_MONTH), "d")
      .isBefore(dayjs());
  } catch {
    return true;
  }
}

export function isValidOwnerToken(token: string) {
  return decryptTokenToDateTime(token).isValid();
}
