const router = require("express").Router()
const Event = require("../../models/Event")

router.post("/", async (req, res) => {
    try {
      const dbEventData = await Event.create({
        name: req.body.name,
        date: req.body.date,
        time: req.body.time,
        venue: req.body.location,
        address: req.body.address,
        location: req.body.location,
        dress_code: req.body.dress_code,
        wedding_id: req.session.wedding_id,

      })

          
      
  
      //saves cookies for session
      req.session.save(() => {
        req.session.loggedIn = true,
        req.session.name = dbEventData.name,
        req.session.date =dbEventData.date,
        req.session.time= dbEventData.time,
        req.session.venue= dbEventData.name
        req.session.user_id = dbEventData.id,
        res.status(200).json(dbEventData)
      })
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }),


module.exports = router