import crypto from "crypto";

const IV_SIZE = 16;

function createDecipheriv(iv: Buffer) {
  /**
   * NOTE:
   * `Buffer.from` で "base64" を指定しているのは CRYPTO_SECRET_KEY が
   * バイナリ列(文字列ではない)を base64 でエンコードした文字列であるため。
   *
   * また aes-256 アルゴリズムの key は 32 byte 固定である必要がある。
   * このため CRYPTO_SECRET_KEY は `openssl rand -base64 32` で 32 byte の
   * バイナリ列を base64 でエンコードしたものとなっている。
   *
   * このため `Buffer.from` には CRYPTO_SECRET_KEY が base64 であることを
   * 伝える必要がある。
   */
  return crypto.createCipheriv(
    "aes-256-ctr",
    Buffer.from(process.env.CRYPTO_SECRET_KEY, "base64"),
    iv
  );
}

export function encryptText(text: string) {
  const iv = crypto.randomBytes(IV_SIZE);
  const cipher = createDecipheriv(iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return Buffer.concat([iv, encrypted]).toString("base64");
}

export function decryptText(encryptedData: string) {
  const encryptedBuffer = Buffer.from(encryptedData, "base64");
  const iv = encryptedBuffer.subarray(0, IV_SIZE);
  const encrypted = encryptedBuffer.subarray(IV_SIZE);
  const decipher = createDecipheriv(iv);
  return Buffer.concat([
    decipher.update(encrypted),
    decipher.final(),
  ]).toString();
}
