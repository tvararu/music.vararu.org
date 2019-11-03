import Link from "next/link";
import slugify from "./slugify";

const AlbumLink = ({ artist, album }) => (
  <Link href={`/${slugify(artist)}/${slugify(album)}`}>
    <a className="underline">
      {album}: <code className="bg-gray-200">{slugify(album)}</code>
    </a>
  </Link>
);

export default AlbumLink;
