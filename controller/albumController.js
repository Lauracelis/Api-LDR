const Album = require("../models/albumModel")


exports.getAlbumList = async (req, res) => {
    try {
      const result = await Album.find(); 
      res.status(200).json(result);  
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' }); 
  }};
  

  exports.getAlbumById = async (req, res) => {
    try {
      const result = await Album.findById(req.params.id);
      if (result) {
        res.status(200).json(result); 
      } else {
        res.status(404).json({ error: 'Song not found' }); 
      }
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' }); 
    }
  };
  

  exports.postNewAlbum = async (req, res) => {
    try {
      const result = await Album.create(req.body);  
      res.status(200).json(result); 
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' }); }
  };
  
  //edit a champion in DB
  exports.editOneAlbum = async (req, res) => {
    try{
      const result = await Album.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}) 
      if (result) {
        res.status(200).json(result); 
      } else {
        res.status(404).json({ error: 'Song not found' }); 
      }
    }catch (err){
      res.status(500).json({ error: 'Internal server error' }); 
    }
  }
  
  
  exports.deleteOneAlbum = async (req, res) => {
    try{
      const result = await Album.findOneAndDelete({_id: req.params.id}); 
      if (result) {
        res.status(200).json(result); 
      } else {
        res.status(404).json({ error: 'Song not found' }); 
      }
    }catch (err){
      res.status(500).json({ error: 'Internal server error' }); 
    }
  }