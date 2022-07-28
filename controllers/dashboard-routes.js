const res = require("express/lib/response")
const router = require("express").Router()

router.get("/", (req, res) => {
    res.render("dashboard")
})

router.get("/wedding", (req, res) => {
    res.render("wedding")
})

module.exports=router;