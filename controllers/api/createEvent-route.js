const router = require("express").Router()
const Event = require("../../models/Event")
const Guest = require("../../models/Guest")

router.post("/", async (req, res) => {

    const admin = 0;

    console.log(req.session);

    let weddingId;
    if (req.body.wedding_id) {
          weddingId = req.body.wedding_id;
        } else {
          weddingId = req.session.wedding_id;
        }
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
      req.session.save(() => {
        req.session.guest_id = dbEventData.guest_id
      });
      res.status(200).json(dbEventData)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    };
  }),


module.exports = router