import { useRouter } from "next/router";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import slugify from "../lib/slugify";
import ArtistLink from "../lib/ArtistLink";
import AlbumLink from "../lib/AlbumLink";

const findArtist = (graph, slug) =>
  Object.keys(graph).find(artist => slugify(artist) == slug);

const Artist = ({ graph }) => {
  const router = useRouter();
  const artistSlug = router.query.artist;
  const artist = findArtist(graph, artistSlug);

  return graph[artist] ? (
    <>
      <Link href="/graph">
        <a className="p-2 underline">All artists</a>
      </Link>
      <ul>
        <li className="p-2">
          <p>
            <ArtistLink artist={artist} />
          </p>
          <ul className="pl-4">
            {Object.keys(graph[artist]).map(album => (
              <li>
                <AlbumLink artist={artist} album={album} />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  ) : (
    404
  );
};

Artist.getInitialProps = async () => ({
  graph: await (await fetch("http://localhost:3000/graph-library.json")).json()
});

export default Artist;
