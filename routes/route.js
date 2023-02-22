const express = require("express");
const router = express.Router();
const albumController = require("../controller/albumController")

router
  .get("/Album", albumController.getAlbumList)

  .get("/Album/:id", albumController.getAlbumById)

  .post("/newAlbum", albumController.postNewAlbum)

  .put("/Album/:id", albumController.editOneAlbum)

  .delete("/RemoveAlbum/:id", albumController.deleteOneAlbum)

module.exports = router;