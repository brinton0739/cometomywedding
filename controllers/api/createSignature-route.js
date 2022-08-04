const router = require("express").Router();
const { Signature } = require("../../models");
const getGuest = require('../../utils/getGuest');

router.post('/', async (req, res) => {
    try {
        const guest = await getGuest(req.body.wedding_id, req.session.user_id);
        await Signature.create({
            body: req.body.signature,
            wedding_id: req.body.wedding_id,
            guest_id: guest.id
        });
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    };
});

module.exports = router;