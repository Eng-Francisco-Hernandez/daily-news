export function encodeToBase64(str: string) {
  const base64 = Buffer.from(str).toString("base64");
  return base64.replace("/", "_");
}

export function decodeFromBase64(base64: string) {
  const str = base64.replace("_", "/");
  return Buffer.from(str, "base64").toString("utf-8");
}
