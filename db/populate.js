const fs = require("fs");
const path = require("path");
const jsmediatags = require("jsmediatags");

const songs = process.argv.slice(2);

if (songs.length === 0) {
  console.log(
    'usage: find -E Music -regex ".*.(mp3|m4a)" -print0 | xargs -0 node populate.js'
  );
  process.exit(1);
}

const parsedSongs = [];

const parseTrack = track => parseInt(track.toString().split("/")[0], 10);

const parseFilePath = filePath =>
  filePath.replace("/Users/tvararu/Music/Music/Media/Music/", "");

songs.forEach(filePath => {
  jsmediatags.read(filePath, {
    onSuccess: ({ tags: { title, artist, album, year, track, genre } }) => {
      parsedSongs.push({
        filePath: parseFilePath(filePath),
        artist,
        album,
        year,
        genre,
        title,
        track: parseTrack(track)
      });
      if (parsedSongs.length == songs.length) {
        parsedSongs.sort(sortByArtistAlbumTrack);
        outputLibrary();
        outputGraphLibrary();
      }
    },
    onError: error => {
      console.log(":(", error.type, error.info);
    }
  });
});

const sortByArtistAlbumTrack = (a, b) =>
  a.artist < b.artist
    ? -1
    : a.artist > b.artist
    ? 1
    : a.album < b.album
    ? -1
    : a.album > b.album
    ? 1
    : a.track < b.track
    ? -1
    : a.track > b.track
    ? 1
    : 0;

const outputLibrary = () => {
  fs.writeFileSync(
    "./public/library.json",
    JSON.stringify(parsedSongs, null, 2)
  );
};

const outputGraphLibrary = () => {
  const graphLibrary = parsedSongs.reduce(
    (acc, { filePath, title, artist, album, year, track, genre }) => {
      acc[artist] = acc[artist] || {};
      acc[artist][album] = acc[artist][album] || {};
      acc[artist][album].genre = genre;
      acc[artist][album].tracks = acc[artist][album].tracks || {};
      acc[artist][album].tracks[track] = { filePath, title };
      return acc;
    },
    {}
  );
  fs.writeFileSync(
    "./public/graph-library.json",
    JSON.stringify(graphLibrary, null, 2)
  );
};
