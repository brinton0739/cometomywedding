const res = require("express/lib/response")
const router = require("express").Router()
const getDetails = require('../utils/getDetails');
const auth = require('../utils/auth');

router.get("/:wedding_id", auth, async (req, res) => {
  const { guest, wedding, registry, events } = await getDetails(req.params.wedding_id, req.session.user_id);
  res.render("wedding", {
    loggedIn: req.session.loggedIn,
    guest, wedding, registry, events
  });
})

router.get("/:wedding_id/guestbook", (req, res) => {
  res.render("guestbook", {
    loggedIn: req.session.loggedIn,
  })
})

module.exports = router
