const router = require("express").Router()
const { Wedding, Guest } = require("../../models")
const Photos = require('../../models/Photos')

// const multer = require("multer")


router.post("/", async (req, res) => {
    try {
      // const guest = await getGuest(req.params.wedding_id, req.session.user_id);
      const dbPhotoData = await Photos.create({
        image_url: req.body.image_url,
        date: new Date(),
        guest_id: 1,
        // wedding_id: req.params.wedding_id
        guest_id:1
        // wedding_id:req.session.wedding_id
      })
      res.status(200).json(dbPhotoData)
    } 
     catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })

  router.get("/", async (req, res) => {
    try {
      const userPhoto = await Photos.findAll({})
      console.log("user get")
      return res.json(userPhoto)
    } catch (err) {
      res.json(err)
    }
  })

// const upload = multer({ dest: 'uploads/' })

// router.post('/images', upload.single('image'), async (req, res) => {
//     const file = req.file
//     console.log(file)
  
//     // apply filter
//     // resize 
  
//     const result = await uploadFile(file)
//     await unlinkFile(file.path)
//     console.log(result)
//     const description = req.body.description
//     res.send({imagePath: `/images/${result.Key}`})
//   })

  module.exports = router