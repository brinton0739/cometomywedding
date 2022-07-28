const router = require("express").Router()
const User = require("../../models/User")

router.post("/login", async (req, res) => {
    try {
      const dbUserData = await User.findOne({
        where: {
          email: req.body.email,
        },
      })
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: "Incorrect email or password. Please try again!" })
        return
      }
  
      const validPassword = await dbUserData.checkPassword(req.body.password)
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: "Incorrect username or password. Please try again!" })
        return
      }
      console.log(req.session.loggedIn)
      //save cookies for session after login
      req.session.save(() => {
        req.session.loggedIn = true
        req.session.first_name = dbUserData.first_name,
        req.session.last_name= dbUserData.last_name,
        req.session.user_id = dbUserData.id
  
        res
          .status(200)
          .json({ user: dbUserData, message: "You are now logged in!" })
       
      })
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })

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