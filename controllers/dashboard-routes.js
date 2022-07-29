const res = require("express/lib/response")
const router = require("express").Router()

router.get("/", (req, res) => {
    res.render("dashboard")
})

router.get("/create-wedding", (req, res) => {
    res.render("createWedding")
})

router.get("/create-event", (req, res) => {
    res.render("createEvent")
})


module.exports=router;