const router = require("express").Router();
const { Wedding, Guest } = require("../../models/");
const getGuest = require('../../utils/getGuest');
const withAuth = require('../../utils/auth');

// get wedding using RSVP code
router.post("/:rsvp", withAuth, async (req, res) => {
    try {
        const weddingData = await Wedding.findOne({
            where: {
                code: req.params.rsvp
            }
        });
        const wedding = weddingData.get({ plain: true });
        const guest = await getGuest(wedding.id, req.session.user_id);
        // create a guest if one doesn't already exist for given input
        if(guest.error) {
            await Guest.create({
                wedding_id: wedding.id,
                access: 1,
                user_id: req.session.user_id
            });
        };
        res.status(200).send(`${wedding.id}`);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

module.exports = router;