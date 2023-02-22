//imports moongose library
const mongoose = require("mongoose");
//Define the new schema with the properties for the fields that will be stored in the Album collection in th database
const NewSchema = new mongoose.Schema({
  nameAlbum: String,
  releaseDate: String,
  numberOfSongs: String,
  duration: String,
  mostPopularSong: String,
});
//exports the schema model
module.exports=mongoose.model("Album",NewSchema);
