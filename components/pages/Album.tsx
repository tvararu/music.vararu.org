import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import slugify from "../lib/slugify";
import Player from "../lib/Player";

const findArtist = (graph, slug) =>
  Object.keys(graph).find(artist => slugify(artist) == slug);

const findAlbum = (graph, slug) =>
  Object.keys(graph).find(album => slugify(album) == slug);

const Album = ({ graph }) => {
  const router = useRouter();
  const artistSlug = router.query.artist;
  const albumSlug = router.query.album;
  const artist = findArtist(graph, artistSlug);

  if (!graph[artist]) return 404;

  const album = findAlbum(graph[artist], albumSlug);

  const content = graph[artist][album];

  if (!content) return 404;

  const files = Object.keys(content.tracks).map(
    n => "/static/linked-music/" + content.tracks[n].filePath
  );

  return <Player files={files} />;
};

Album.getInitialProps = async () => ({
  graph: await (await fetch("http://localhost:3000/graph-library.json")).json()
});

export default Album;
