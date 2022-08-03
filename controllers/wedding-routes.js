const res = require("express/lib/response")
const router = require("express").Router()
<<<<<<< HEAD
const getDetails = require('../utils/getDetails');
const auth = require('../utils/auth');
=======
const withAuth = require("../utils/auth")
>>>>>>> a79ee2e62fdabc455035893cf4021eb20296fb9b

router.get("/:wedding_id", async (req, res) => {
  const { guest, wedding, registry, events, signatures } = await getDetails(req.params.wedding_id, 1);
  res.render("wedding", {
    loggedIn: req.session.loggedIn,
    guest, wedding, registry, events
  });
});

router.get("/:wedding_id/guestbook", async (req, res) => {
  const { guest, wedding, registry, events, signatures } = await getDetails(req.params.wedding_id, 1);
  res.render("guestbook", {
    loggedIn: req.session.loggedIn,
    guest, wedding, signatures
  })
})

<<<<<<< HEAD
=======
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


>>>>>>> a79ee2e62fdabc455035893cf4021eb20296fb9b
module.exports = router
