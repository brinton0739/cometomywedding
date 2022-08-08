//allows users to update date and delete their events.

const router = require("express").Router();
const { Event } = require("../../models/");

router.delete("/delete/:event", async (req, res) => {
    console.log('\x1b[36m%s\x1b[0m', `Attempting to delete event with id: ${req.params.event}`);
    try {
        const event = await Event.findOne({
            where: {
                id: req.params.event
            }
        });
        event.destroy();
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

router.put("/update/:event", async (req, res) => {
    console.log('\x1b[36m%s\x1b[0m', `Attempting to update event with id: ${req.params.event}`);
    try {
        const event = await Event.update({
            name: req.body.name,
            venue: req.body.venue,
            address: req.body.address,
            date: req.body.date,
            time: req.body.time,
            dress_code: req.body.dress_code
        },
        {
            where: {
                id: req.params.event
            }
        });
        console.log(event);
    } catch (err) {
        console.log(err);
    };
});

module.exports = router;