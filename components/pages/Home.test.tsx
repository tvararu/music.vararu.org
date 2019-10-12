import { cleanup, fireEvent, render, act } from "@testing-library/react";
import Home from "./Home";

const times = (n, fn) => Array.from(Array(n)).forEach(fn);

const currentTrack = {
  play: jest.fn(),
  pause: jest.fn()
};
global.Audio = jest.fn(() => currentTrack);

afterEach(cleanup);

let getByText;

beforeEach(() => {
  getByText = render(<Home />).getByText;
});

const playBtn = () => getByText("Play");
const pauseBtn = () => getByText("Pause");

const play = () => fireEvent.click(playBtn());
const pause = () => fireEvent.click(pauseBtn());
const next = () => fireEvent.click(getByText("Next"));
const previous = () => fireEvent.click(getByText("Previous"));

const firstSong = () => getByText(/Natural/);
const secondSong = () => getByText(/Treetop/);

const exists = el => expect(el).toBeInTheDocument();

const expectIsPlaying = () => {
  expect(currentTrack.play).toHaveBeenCalled();
  exists(pauseBtn());
};

const expectIsPaused = () => {
  expect(currentTrack.pause).toHaveBeenCalled();
  exists(playBtn());
};

it("allows playing and pausing", () => {
  play();
  expectIsPlaying();
  pause();
  expectIsPaused();
});

it("allows skipping to next track and previous track", () => {
  next();
  exists(secondSong());
  previous();
  exists(firstSong());
});

it("keeps playing after skipping", () => {
  play();
  next();
  expectIsPlaying();
});

it("loops to first song after last song and stops playing", () => {
  play();
  times(5, next);
  exists(firstSong());
  expectIsPaused();
});

it("stays at the first song when skipping backwards and stops playing", () => {
  play();
  previous();
  exists(firstSong());
  expectIsPaused();
});

describe("DOM events", () => {
  it("onplay plays", () => {
    act(() => currentTrack.onplay());
    expectIsPlaying();
  });

  it("onpause pauses", () => {
    play();
    act(() => currentTrack.onpause());
    expectIsPaused();
  });

  it("onended skips to next track", () => {
    play();
    act(() => currentTrack.onended());
    exists(secondSong());
    expectIsPlaying();
  });
});
