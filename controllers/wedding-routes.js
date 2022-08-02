const res = require("express/lib/response")
const router = require("express").Router()
const withAuth = require("../utils/auth")

router.get("/1", (req, res) => {
  res.render("wedding", {
    loggedIn: req.session.loggedIn,
  })
})

router.get("/guestbook", (req, res) => {
  res.render("guestbook", {
    loggedIn: req.session.loggedIn,
  })
})

router.get("/wedding-album", (req, res) => {
    res.render("weddingAlbum", {
      loggedIn: req.session.loggedIn,
    })
  })

router.get("/registry", (req, res) => {
    res.render("registry", {
      loggedIn: req.session.loggedIn,
    })
  })


module.exports = router
