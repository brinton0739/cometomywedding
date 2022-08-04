const router = require("express").Router()
const { Wedding } = require("../../models/index");

console.log('rsvp loaded ===')

// get wedding using RSVP code
router.get("/:rsvp", async (req, res) => {
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