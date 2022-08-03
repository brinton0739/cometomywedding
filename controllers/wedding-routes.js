const res = require("express/lib/response")
const router = require("express").Router()
const withAuth = require("../utils/auth")
const {Photos, Guest} = require('../models')

router.get("/1", (req, res) => {
  res.render("wedding", {
    loggedIn: req.session.loggedIn,
  })
})

router.get("/1/guestbook", (req, res) => {
  res.render("guestbook", {
    loggedIn: req.session.loggedIn,
  })
})

// router.get("/wedding-album", (req, res) => {

//     res.render("weddingAlbum", {
//       loggedIn: req.session.loggedIn,
//     })
//   })



  router.get("/wedding-album", withAuth, async (req, res) => {
    try {
      const photoData = await Photos.findAll().catch((err) => {
        res.json(err)
      })
      // const userPhotos = photoData.filter(
      //   (photo) => photo.guest_id === req.session.guest_id
      // )
      const photos = photoData.map((photo) => photo.get({ plain: true }))
      // const photos = userPhotos.map((photo) => photo.get({ plain: true }))
  console.log(photos)
      res.render("weddingAlbum", {
        photos,
        loggedIn: req.session.loggedIn,
      })
    } catch (err) {
      console.log(err)
    }
  })


  router.get("/1/guestbook", withAuth, async (req, res) => {
    try {
      const guestData = await Wedding.findByPk(req.params.id, {
        include: [
          {
            model: Guest,
            as: "guests",
          },
        ],
      })

      const guests = guestData.get({ plain: true })
  
      res.render("guestList", {
        // ...guests,
        loggedIn: req.session.loggedIn,
      })
    } catch (err) {
      res.status(500).json(err)
    }
  })


module.exports = router
