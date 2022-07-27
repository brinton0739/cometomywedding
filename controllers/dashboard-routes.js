const res = require("express/lib/response")
const router = require("express").Router()


router.get("/wedding", (req, res) => {
    res.render("wedding")
})
module.exports=router