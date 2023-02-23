const express = require("express");
const router = express.Router();
const albumController = require("../controller/albumController")

// initializes a router instance from Express and imports the albumController module
router
//request to fetch a list of all albums.
  .get("/Album", albumController.getAlbumList)
// request to fetch an album by ID.
  .get("/Album/:id", albumController.getAlbumById)
//request to create a new album.
  .post("/newAlbum", albumController.postNewAlbum)
//request to update an album by ID.
  .put("/Album/:id", albumController.editOneAlbum)
//request to remove an album by ID.
  .delete("/RemoveAlbum/:id", albumController.deleteOneAlbum)
//exports the router module so that it can be used in other files.
module.exports = router;