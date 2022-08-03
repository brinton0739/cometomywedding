const res = require("express/lib/response")
const router = require("express").Router()
const getWedding = require('../utils/getWedding');
const getEvent = require('../utils/getEvent');
const getGuest = require('../utils/getGuest');
const getSignatures = require('../utils/getSignatures');
const auth = require('../utils/auth');

router.get("/:wedding_id", auth, async (req, res) => {
    const guest = getGuest(req.params.wedding_id, 1);
    const wedding = getWedding(req.params.wedding_id);
    const events = getEvent(req.params.wedding_id);
    res.render("wedding", {
    loggedIn: req.session.loggedIn,
    guest, wedding, events
    });
});

router.get("/:wedding_id/guestbook", auth, async (req, res) => {
  const signatures = await getSignatures(req.params.wedding_id);
  res.render("guestbook", {
    loggedIn: req.session.loggedIn,
    signatures
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
