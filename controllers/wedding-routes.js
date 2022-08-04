const router = require("express").Router()
const withAuth = require("../utils/auth")
const {Photos, Guest, Wedding} = require('../models')
const getWedding = require('../utils/getWedding');
const getEvent = require('../utils/getEvent');
const getGuest = require('../utils/getGuest');
const getSignatures = require('../utils/getSignatures');
const auth = require('../utils/auth');
const convertAccess = require('../utils/convertAccess');

router.get("/:wedding_id", auth, async (req, res) => {
  try { 
    const guest = await getGuest(req.params.wedding_id, req.session.user_id);
    // converts the guest's access level to a particular named property because handlebars default uses boolean only
    convertAccess(guest);
    const wedding = await getWedding(req.params.wedding_id);
    const events = await getEvent(req.params.wedding_id);
    events.forEach(event => {
      event.guest = guest;
    });
    if(guest.restricted) {
      res.render("404");
    };
    res.render("wedding", {
      loggedIn: req.session.loggedIn,
      guest, wedding, events
    });
  } catch (err) {
    res.render("404");
  };
});

router.get("/:wedding_id/guestbook", auth, async (req, res) => {
  const signatures = await getSignatures(req.params.wedding_id);
  const wedding = await getWedding(req.params.wedding_id);
  res.render("guestbook", {
    loggedIn: req.session.loggedIn,
    wedding, signatures
  })
})

// router.get("/wedding-album", (req, res) => {

//     res.render("weddingAlbum", {
//       loggedIn: req.session.loggedIn,
//     })
//   })


router.get("/:wedding_id/album",  async (req, res) => {
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
