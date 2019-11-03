import { useRouter } from "next/router";
import graph from "../../public/graph-library.json";
import slugify from "../lib/slugify";
import ArtistLink from "../lib/ArtistLink";

const findArtist = (graph, slug) =>
  Object.keys(graph).find(artist => slugify(artist) == slug);

const findAlbum = (graph, slug) =>
  Object.keys(graph).find(album => slugify(album) == slug);

const Album = () => {
  const router = useRouter();
  const artistSlug = router.query.artist;
  const albumSlug = router.query.album;
  const artist = findArtist(graph, artistSlug);

  if (!graph[artist]) return 404;

  const album = findAlbum(graph[artist], albumSlug);

  const content = graph[artist][album];

  return content ? (
    <ul>
      <li className="p-2">
        <p>
          <ArtistLink artist={artist} />
        </p>
        <p>
          {album}: <code className="bg-gray-200">{slugify(album)}</code>
        </p>
        <p>Genre: {content.genre}</p>
        <ul className="pl-4">
          {Object.keys(content.tracks).map(n => (
            <li>
              {n}: {content.tracks[n].title}
            </li>
          ))}
        </ul>
      </li>
    </ul>
  ) : (
    404
  );
};

export default Album;
