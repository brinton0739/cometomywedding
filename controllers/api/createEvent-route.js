//User can create an event. Post to event table

const router = require("express").Router();
const { Event, Guest } = require('../../models');

router.post("/", async (req, res) => {

    const admin = 0;
    let weddingId;
    if (req.body.wedding_id) {
          weddingId = req.body.wedding_id;
        } else {
          weddingId = req.session.wedding_id;
        }
//make sure user is a creator of a wedding the post to event table   
     const authorize = await Guest.findOne({ where: {user_id: req.session.user_id, wedding_id: weddingId}})
    if (authorize == null || authorize.access !== admin) {
      return res.status(401).end();
    }
    try {
      const dbEventData = await Event.create({
        name: req.body.name,
        date: req.body.date,
        time: req.body.time,
        venue: req.body.venue,
        address: req.body.address,
        dress_code: req.body.dress_code,
        wedding_id: weddingId,
      });
      res.status(200).json(dbEventData)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    };
  }),

module.exports = router