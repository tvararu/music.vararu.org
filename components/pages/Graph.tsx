import fetch from "isomorphic-unfetch";
import ArtistLink from "../lib/ArtistLink";
import AlbumLink from "../lib/AlbumLink";

const Graph = ({ graph }) => (
  <ul>
    {Object.keys(graph).map(artist => (
      <>
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
        <hr />
      </>
    ))}
  </ul>
);

Graph.getInitialProps = async () => ({
  graph: await (await fetch("http://localhost:5000/graph-library.json")).json()
});

export default Graph;
