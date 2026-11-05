export function formatThaiDate(date: string) {
  return new Date(date).toLocaleDateString("th-TH", { day: "numeric", month: "short", year: "numeric" });
}
