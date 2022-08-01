const res = require("express/lib/response")
const router = require("express").Router()
const withAuth = require("../utils/auth")

router.get("/", (req, res) => {
  res.render("dashboard", {
    loggedIn: req.session.loggedIn,
  })
})

router.get("/create-wedding", withAuth, (req, res) => {
  res.render("createWedding", {
    loggedIn: req.session.loggedIn,
  })
})

router.get("/create-event", withAuth, (req, res) => {
  res.render("createEvent", {
    loggedIn: req.session.loggedIn,
  })
})


router.get("/rsvp", withAuth, (req, res) => {
    res.render("rsvp", {
      loggedIn: req.session.loggedIn,
    })
  })
  
 
  

module.exports = router
