//C
const Album = require("../models/albumModel");

//CRUD operations

//This function retrieves all albums in the application from the database and returns them in the response. It uses the Album model to call the find() method on the collection, and if successful, it sends a response with the results in JSON format.
exports.getAlbumList = async (req, res) => {
  try {
    const result = await Album.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
//This function retrieves a single album based on the ID parameter passed in the request. It uses the Album model to call the findById() method on the collection. If the album is found, it sends a response with the result in JSON format. If the album is not found, it sends an error response with a 404 status code.
exports.getAlbumById = async (req, res) => {
  try {
    const result = await Album.findById(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Song not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
//This function adds a new album to the database. It uses the Album model to call the create() method on the collection. If successful, it sends a response with the new album in JSON format. If an error occurs, it sends an error response with a 500 status code.
exports.postNewAlbum = async (req, res) => {
  try {
    const result = await Album.create(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//his function updates an existing album in the database based on the ID parameter passed in the request. It uses the Album model to call the findOneAndUpdate() method on the collection, passing in the ID and the request body. If successful, it sends a response with the updated album in JSON format. If the album is not found, it sends an error response with a 404 status code.
exports.editOneAlbum = async (req, res) => {
  try {
    const result = await Album.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Song not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
//This function removes an album from the database based on the ID parameter passed in the request. It uses the Album model to call the findOneAndDelete() method on the collection, passing in the ID. If successful, it sends a response with the deleted album in JSON format. If the album is not found, it sends an error response with a 404 status code.
exports.deleteOneAlbum = async (req, res) => {
  try {
    const result = await Album.findOneAndDelete({ _id: req.params.id });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Song not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
