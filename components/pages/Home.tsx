import { useState } from "react";

const files = [
  "/static/music/Clams Casino/Rainforest/01 Natural.mp3",
  "/static/music/Clams Casino/Rainforest/02 Treetop.mp3",
  "/static/music/Clams Casino/Rainforest/03 Waterfalls.mp3",
  "/static/music/Clams Casino/Rainforest/04 Drowning.mp3",
  "/static/music/Clams Casino/Rainforest/05 Gorilla.mp3"
];

const Button = ({ children, onClick }) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={onClick}
  >
    {children}
  </button>
);

const Player = () => {
  const [count, setCount] = useState(0);
  const currentSong = files[count];
  const skipToPreviousSong = () =>
    setCount((files.length + count - 1) % files.length);
  const skipToNextSong = () => setCount((count + 1) % files.length);

  return (
    <>
      <p>{count}</p>
      <p>Current song: {currentSong}</p>
      <audio controls src={currentSong}>
        Your browser does not support the audio element.
      </audio>
      <Button onClick={skipToPreviousSong}>Previous song</Button>
      <Button onClick={skipToNextSong}>Next song</Button>
    </>
  );
};

const Home = () => (
  <>
    <Player />
  </>
);

export default Home;
