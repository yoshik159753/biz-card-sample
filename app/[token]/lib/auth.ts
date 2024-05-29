import { decryptTokenToDateTime } from "@/app/lib/auth";
import dayjs from "dayjs";

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
