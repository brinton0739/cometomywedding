const router = require("express").Router();
const withAuth = require("../utils/auth");
const getMultipleWeddings = require('../utils/getMultipleWeddings');

router.get("/", withAuth, async (req, res) => {
  const weddings = await getMultipleWeddings(req.session.user_id);
  res.render("dashboard", {
    loggedIn: req.session.loggedIn,
    weddings
  });
});

router.get("/create-wedding", withAuth, (req, res) => {
  res.render("createWedding", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/create-event", withAuth, (req, res) => {
  res.render("createEvent", {
    loggedIn: req.session.loggedIn,
  });
});


router.get("/rsvp", withAuth, (req, res) => {
  res.render("rsvp", {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
