import Link from "next/link";
import slugify from "./slugify";

const ArtistLink = ({ artist }) => (
  <Link href={`/${slugify(artist)}`}>
    <a className="underline">
      {artist}: <code className="bg-gray-200">{slugify(artist)}</code>
    </a>
  </Link>
);

export default ArtistLink;
