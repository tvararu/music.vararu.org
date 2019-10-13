const fs = require("fs");
const path = require("path");
const jsmediatags = require("jsmediatags");

const songs = process.argv.slice(2).slice(0, 1);

if (songs.length === 0) {
  console.log(
    'usage: find -E Music -regex ".*.(mp3|m4a)" -print0 | xargs -0 node populate2.js'
  );
  process.exit(1);
}

console.log("args", songs);

songs.forEach(song => {
  jsmediatags.read(song, {
    onSuccess: tag => {
      console.log("tag", tag);
    },
    onError: error => {
      console.log(":(", error.type, error.info);
    }
  });
});
