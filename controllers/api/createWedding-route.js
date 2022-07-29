const router = require("express").Router()
const { Wedding, Guest } = require("../../models")


router.post("/", async (req, res) => {
    try {
      const dbWeddingData = await Wedding.create({
        partner1: req.body.partner1,
        partner2: req.body.partner2,
        name: req.body.name,
      })
    
      const dbGuestData = await Guest.create({
        wedding_id: dbWeddingData.id,
        access: 0,
        user_id: req.session.user_id,

      })
  
      //saves cookies for session
      req.session.save(() => {
        req.session.loggedIn = true,
        req.session.partner1 = dbWeddingData.partner1,
        req.session.partner2= dbWeddingData.partner2,
        req.session.name= dbWeddingData.name
        req.session.user_id = dbWeddingData.id,
        res.status(200).json(dbWeddingData)
      })
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })

module.exports = router