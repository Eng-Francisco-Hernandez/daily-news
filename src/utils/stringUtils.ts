export function encodeToBase64(str: string) {
  return Buffer.from(str).toString("base64");
}

export function decodeFromBase64(base64: string) {
  return Buffer.from(base64, "base64").toString("utf-8");
}
