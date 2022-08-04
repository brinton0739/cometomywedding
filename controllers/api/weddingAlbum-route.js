const router = require("express").Router()
const { Photos } = require("../../models")
const getGuest = require('../../utils/getGuest')




router.post("/", async (req, res) => {
    try {
      const guest = await getGuest(req.body.wedding_id, req.session.user_id);
      const dbPhotoData = await Photos.create({
        image_url: req.body.image_url,
        date: new Date(),
        guest_id: guest.id,
        wedding_id: req.body.wedding_id
      });
      res.status(200).json(dbPhotoData)
    } 
     catch (err) {
      console.log(err)
      res.status(500).json(err)
    };
  });

  module.exports = router