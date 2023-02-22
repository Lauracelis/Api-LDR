const mongoose = require("mongoose");

const NewSchema = new mongoose.Schema({
  nameAlbum: String,
  releaseDate: String,
  numberOfSongs: String,
  duration: String,
  mostPopularSong: String,
});

module.exports=mongoose.model("Album",NewSchema);
