const router = require("express").Router();
const { Signature } = require('../../models');

router.delete('/', async (req, res) => {
    try {
        const signature = await Signature.findByPk(req.body.signature_id);
        signature.destroy();
        res.sendStatus(200);
    } catch (err) { 
        console.log(err)
        res.sendStatus(500);
    };
});

module.exports = router;