export function canonicalPath(route: string) {
  return route === "/" ? "/" : `${route.replace(/\/$/, "")}/`;
}

export function pageTitle(title: string) {
  return title.includes("CVG") || title.includes("Centro Veterinario")
    ? title
    : `${title} | CVG`;
}
