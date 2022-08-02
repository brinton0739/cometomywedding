const res = require("express/lib/response")
const router = require("express").Router()
const getDetails = require('../utils/getDetails');
const auth = require('../utils/auth');

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

module.exports = router
