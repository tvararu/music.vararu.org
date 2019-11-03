import graph from "../../public/graph-library.json";
import ArtistLink from "../lib/ArtistLink";
import AlbumLink from "../lib/AlbumLink";

const Graph = () => (
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

export default Graph;
