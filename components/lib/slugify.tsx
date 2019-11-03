const slugify = str =>
  str
    .toLowerCase()
    .replace(/[\s\+"\;]+/g, "-")

    .replace(/[&:,!\/'\.\(\)\?]/g, "")
    .replace(/\$/g, "s")

    .replace(/-+/g, "-")
    .replace(/^-|-$/, "");

export default slugify;
