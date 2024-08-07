export function scrollPage(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
