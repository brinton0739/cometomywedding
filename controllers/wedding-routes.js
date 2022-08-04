const router = require("express").Router()
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
  const guest = await getGuest(req.params.wedding_id, req.session.user_id);
  // converts the guest's access level to a particular named property because handlebars default uses boolean only
  convertAccess(guest);
  const signatures = await getSignatures(req.params.wedding_id);
  const wedding = await getWedding(req.params.wedding_id);
  signatures.forEach(signature => {
    signature.guest = guest;
  });
  res.render("guestbook", {
    loggedIn: req.session.loggedIn,
    wedding, signatures
  });
});


router.get("/wedding-album", (req, res) => {
    res.render("weddingAlbum", {
      loggedIn: req.session.loggedIn,
    });
  });

router.get("/registry", (req, res) => {
    res.render("registry", {
      loggedIn: req.session.loggedIn,
    });
  });

module.exports = router
