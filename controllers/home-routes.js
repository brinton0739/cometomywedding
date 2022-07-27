const res = require("express/lib/response")
const router = require("express").Router()


router.get("/", (req, res) => {
    res.render("homepage")
})

router.get("/wedding", (req, res) => {
    res.render("wedding")
})

router.get("/login", (req, res)=> {
    res.render("login")
})

module.exports=router
