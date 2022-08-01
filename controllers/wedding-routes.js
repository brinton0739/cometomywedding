const res = require("express/lib/response")
const router = require("express").Router()
const getDetails = require('../utils/getDetails');
const auth = require('../utils/auth');

router.get("/:wedding_id", async (req, res) => {
  const { guest, wedding, registry, events } = await getDetails(1, 1);
  console.log(events)
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
