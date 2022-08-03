const router = require("express").Router()
const { Wedding, Guest } = require("../../models")
const generateWeddingCode = require("../../utils/uuid.js")


router.post("/", async (req, res) => {
    code = await generateWeddingCode();
    try {
      const dbWeddingData = await Wedding.create({
        partner1: req.body.partner1,
        partner2: req.body.partner2,
        name: req.body.name,
        code: code,
      })
    
      await Guest.create({
        wedding_id: dbWeddingData.id,
        access: 0,
        user_id: req.session.user_id,
      })
  
      //saves cookies for session
      req.session.save(() => {
        req.session.wedding_id = dbWeddingData.id,
        res.status(200).json(dbWeddingData)
      })
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })

module.exports = router