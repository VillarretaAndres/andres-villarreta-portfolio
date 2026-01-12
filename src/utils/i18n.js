import fs from "fs";
import path from "path";

export function loadLocale(lang = "es") {
  const filePath = path.resolve("./src/locales", `${lang}.json`);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}
