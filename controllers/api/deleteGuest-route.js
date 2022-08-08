// user can delete guest from their guest list.

const router = require("express").Router();
const { Guest } = require('../../models');

router.delete('/', async (req, res) => {
    try {
        const guest = await Guest.findByPk(req.body.guest_id);
        guest.destroy();
        res.sendStatus(200);
    } catch (err) { 
        console.log(err)
        res.sendStatus(500);
    };
});

module.exports = router;