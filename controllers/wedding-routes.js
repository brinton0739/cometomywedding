const router = require("express").Router()
const withAuth = require("../utils/auth")
const { User, Photos, Guest, Wedding } = require('../models')
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
      event.registry = wedding.registry;
    });
    if (guest.restricted) {
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
  const guest = await getGuest(req.params.wedding_id, req.session.user_id);
  const signatures = await getSignatures(req.params.wedding_id);
  const wedding = await getWedding(req.params.wedding_id);
  convertAccess(guest); 
  signatures.forEach(signature => {
    signature.access = guest
  });
  res.render("guestbook", {
    loggedIn: req.session.loggedIn,
    wedding, signatures, guest
  });
});

router.get("/:wedding_id/album", async (req, res) => {
  try {
    const wedding = await getWedding(req.params.wedding_id);
    const photoData = await Photos.findAll({
      where: {
        wedding_id: req.params.wedding_id
      }
    }).catch((err) => {
      res.json(err)
    });
    const photos = photoData.map((photo) => photo.get({ plain: true }))
    res.render("weddingAlbum", {
      photos,
      loggedIn: req.session.loggedIn,
      wedding
    });
  } catch (err) {
    console.log(err);
    res.render('404');
  };
});

router.get("/registry", (req, res) => {
  try {
    res.render("registry", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.render('404');
  };
});



router.get("/:wedding_id/guestlist", withAuth, async (req, res) => {
  try {
    const access = await getGuest(req.params.wedding_id, req.session.user_id);
    convertAccess(access);
    const weddingData = await Wedding.findByPk(req.params.wedding_id, {
      include: [
        {
          model: Guest,
          as: "guests",
          include: [
            {
              model: User
            }
          ]
        },
      ],
    });
    const wedding = weddingData.get({ plain: true });
    wedding.guests = wedding.guests.filter(guest => guest.access > 0);
    wedding.guests.forEach(guest => {
      guest.access = access;
    });
    res.render("guestlist", {
      access, wedding,
      loggedIn: req.session.loggedIn,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
