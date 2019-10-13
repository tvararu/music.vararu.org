import { useState, useEffect } from "react";
import Sr from "./Sr";

const files = [
  "/static/music/Clams Casino/Rainforest/01 Natural.mp3",
  "/static/music/Clams Casino/Rainforest/02 Treetop.mp3",
  "/static/music/Clams Casino/Rainforest/03 Waterfalls.mp3",
  "/static/music/Clams Casino/Rainforest/04 Drowning.mp3",
  "/static/music/Clams Casino/Rainforest/05 Gorilla.mp3"
];

const Button = ({ children, onClick }) => (
  <button
    className="bg-gray-200 hover:bg-gray-400 text-gray-900 font-bold py-2 px-4 text-3xl border-2 border-gray-900 m-3"
    onClick={onClick}
  >
    {children}
  </button>
);

const Previous = ({ onClick }) => (
  <Button onClick={onClick}>
    ⏮️<Sr>Previous</Sr>
  </Button>
);

const Play = ({ onClick }) => (
  <Button onClick={onClick}>
    ▶️<Sr>Play</Sr>
  </Button>
);

const Pause = ({ onClick }) => (
  <Button onClick={onClick}>
    ⏸<Sr>Pause</Sr>
  </Button>
);

const Next = ({ onClick }) => (
  <Button onClick={onClick}>
    ⏭️<Sr>Next</Sr>
  </Button>
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
    newTrack.onended = () => playNext();
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
    <div className="flex flex-col justify-center lg:h-screen">
      <style jsx>{`
        @media (min-width: 1024px) {
          .wrapper {
            height: 600px;
          }
        }
      `}</style>
      <div className="wrapper relative">
        <div className="flex flex-col items-center p-4">
          <div className="h-64 w-64 bg-gray-200 mb-4"></div>
          <h2 className="text-2xl font-bold">
            {files[count].split("/").pop()}
          </h2>
        </div>
        <div className="flex justify-center fixed lg:absolute bottom-0 w-screen">
          <Previous onClick={playPrevious} />
          {playing ? (
            <Pause onClick={playPause} />
          ) : (
            <Play onClick={playPause} />
          )}
          <Next onClick={playNext} />
        </div>
      </div>
    </div>
  );
};

export default Player;
