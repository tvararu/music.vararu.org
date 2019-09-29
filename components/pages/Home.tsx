import { useState, useEffect } from "react";

const files = [
  "/static/music/Clams Casino/Rainforest/01 Natural.mp3",
  "/static/music/Clams Casino/Rainforest/02 Treetop.mp3",
  "/static/music/Clams Casino/Rainforest/03 Waterfalls.mp3",
  "/static/music/Clams Casino/Rainforest/04 Drowning.mp3",
  "/static/music/Clams Casino/Rainforest/05 Gorilla.mp3"
];

const Button = ({ children, onClick }) => (
  <button
    className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 mr-1"
    onClick={onClick}
  >
    {children}
  </button>
);

const Player = () => {
  const [count, setCount] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [track, setTrack] = useState(null);

  useEffect(() => {
    if (track) track.pause();
    const newTrack = new Audio(files[count]);
    newTrack.onplay = () => setPlaying(true);
    newTrack.onpause = () => setPlaying(false);
    newTrack.onended = () => playing && playNext();
    setTrack(newTrack);
    if (playing) newTrack.play();
  }, [count]);

  const playPrevious = () => {
    const newCount = count - 1;
    const reachedStart = newCount < 0;
    if (reachedStart) {
      setPlaying(false);
      track.pause();
      setCount(0);
    } else {
      setCount(newCount);
    }
  };

  const playNext = () => {
    const newCount = count + 1;
    const reachedEnd = newCount >= files.length;
    if (reachedEnd) {
      setPlaying(false);
      setCount(0);
    } else {
      setCount(newCount);
    }
  };

  const playPause = () => {
    const newPlaying = !playing;
    setPlaying(newPlaying);
    if (newPlaying) {
      track.play();
    } else {
      track.pause();
    }
  };

  return (
    <>
      <p>Song count: {count}</p>
      <p>Current song: {files[count]}</p>
      <Button onClick={playPrevious}>Previous</Button>
      <Button onClick={playPause}>{playing ? "Pause" : "Play"}</Button>
      <Button onClick={playNext}>Next</Button>
    </>
  );
};

const Home = () => <Player />;

export default Home;
