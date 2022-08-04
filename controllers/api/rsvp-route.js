const router = require("express").Router()
const Wedding = require("../../models/Wedding")
const Guest = require("../../models/Guest")
// const withAuth = require("../utils/auth")

console.log('rsvp loaded ===')

// get wedding using RSVP code, need withAuth
router.get("/:rsvp",  async (req, res) => {
    console.log(`rsvp code === ${req.params.rsvp}`);

    try {
        const rsvp = await Wedding.findOne({
            where: {
                code: req.params.rsvp
            }
        });
        console.log(`rsvp wedding data === ${rsvp}`);
        res.status(200).json(rsvp)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router