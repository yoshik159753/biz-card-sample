import dayjs from "dayjs";
import { decryptText, encryptText } from "@/app/lib/crypt";

function encryptDateTimeToToken(date: dayjs.Dayjs) {
  return encryptText(date.toISOString());
}

export function decryptTokenToDateTime(token: string) {
  return dayjs(decryptText(token));
}

export function generateAccessToken() {
  return encryptDateTimeToToken(dayjs());
}

export function isValidOwnerToken(token: string) {
  return decryptTokenToDateTime(token).isValid();
}
