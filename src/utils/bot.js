const fs = require("fs");
const path = require("path");
const Twit = require("twit");
const config = require(path.join(__dirname, "auth/config.js"));
const Subtitle = require("subtitle");
const {
  parse,
  stringify,
  stringifyVtt,
  resync,
  toMS,
  toSrtTime,
  toVttTime,
} = require("subtitle");

// console.log("Decoding subtitles...");
// const srtString = fs.readFileSync(__dirname + "/input-media/plan9.srt", {
//   encoding: "utf-8",
// });
// const subtitles = Subtitle.parse(srtString);
// console.log("Decoding subtitles done");

const twitterInstance = new Twit(config);

const postTestTweet = () => {
  twitterInstance.post(
    "statuses/update",
    { status: "Look, I am tweeting!" },
    (err, data, response) => {
      console.dir(data);
    }
  );
};

const postTestImage = (images) => {
  console.log("Opening an image...");
  console.log(images);
  const image_path = path.join(__dirname, "/output-media/" + images[0]);
  const b64content = fs.readFileSync(image_path, { encoding: "base64" });

  console.log("Uploading an image...");

  twitterInstance.post(
    "media/upload",
    { media_data: b64content },
    (err, data, response) => {
      if (err) {
        console.log("ERROR:");
        console.log(err);
      } else {
        console.log("Image uploaded!");
        console.log("Now tweeting it...");

        twitterInstance.post(
          "statuses/update",
          {
            media_ids: new Array(data.media_id_string),
            status: "Look, an image!",
          },
          (err, data, response) => {
            if (err) {
              console.log("ERROR:");
              console.log(err);
            } else {
              console.log("Posted an image!");
              console.dir(data);
              console.log("Deleting Image...");
              fs.unlink(image_path, (err) => {
                if (err) {
                  console.log("ERROR: unable to delete image " + image_path);
                } else {
                  console.log("image " + image_path + " was deleted");
                }
              });
            }
          }
        );
      }
    }
  );
};

const repeatPost = () => {
  fs.readdir(__dirname + "/output-media", (err, files) => {
    if (err) {
      console.log(err);
    } else {
      if (files.length > 0) {
        var images = [];
        files.forEach((img) => {
          images.push(img);
        });
        setInterval(() => {
          postTestImage(images);
        }, 10000);
      }
    }
  });
};

const readDirTest = () => {
  fs.readdir(__dirname + "/output-media", (err, files) => {
    if (err) {
      console.log(err);
    } else {
      if (files.length > 0) {
        const images = [];
        images.push(files[0]);
        postTestImage(images);
      }
    }
  });
};

// postTestTweet();
// postTestImage();
repeatPost();
// readDirTest();
