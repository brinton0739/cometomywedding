const router = require("express").Router()
const Event = require("../../models/Event")
console.log('loaded')
router.delete("/event/delete/:event", async (req, res) => {
    console.log("trying")
    try {
        res.send(req)
      await Event.destroy({
        where: {
            id: req.params.event
        }
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
    res.send(req);
  });


module.exports = router