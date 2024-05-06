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

export function isInvalidAccessToken(token: string) {
  return decryptTokenToDateTime(token)
    .add(Number(process.env.ACCESS_TOKEN_EXPIRATION_MONTH), "M")
    .add(Number(process.env.ACCESS_TOKEN_EXPIRATION_DAY_OF_MONTH), "d")
    .isBefore(dayjs());
}
