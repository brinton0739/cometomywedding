const router = require('express').Router();
const User  = require("../../models/User")
const Guest = require("../../models/Guest")



router.get("/", async (req, res) => {
    try {
      const userData = await User.findAll({})
      console.log("user get")
      return res.json(userData)
    } catch (err) {
      res.json(err)
    }
  })

  //CREATE new user for signup
router.post("/", async (req, res) => {
    try {
      const dbUserData = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
      })

      // if (dbUserData.id) {
      //   const gData = Guest.create({

      //   })
      // }
  
      //saves cookies for session
      req.session.save(() => {
        req.session.loggedIn = true,
        req.session.first_name = dbUserData.first_name,
        req.session.last_name= dbUserData.last_name,
        req.session.user_id = dbUserData.id,
        res.status(200).json(dbUserData)
      })
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })

  
  
  // Logout
  router.post("/logout", (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end()
      })
    } else {
      res.status(404).end()
    }
  })
  

module.exports = router;