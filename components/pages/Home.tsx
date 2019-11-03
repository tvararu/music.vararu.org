import Player from "../lib/Player";

const files = [
  "/static/music/Clams Casino/Rainforest/01 Natural.mp3",
  "/static/music/Clams Casino/Rainforest/02 Treetop.mp3",
  "/static/music/Clams Casino/Rainforest/03 Waterfalls.mp3",
  "/static/music/Clams Casino/Rainforest/04 Drowning.mp3",
  "/static/music/Clams Casino/Rainforest/05 Gorilla.mp3"
];

const Home = () => <Player files={files} />;

export default Home;
