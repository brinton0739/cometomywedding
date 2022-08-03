const router = require('express').Router();
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const createWeddingRoutes = require('./createWedding-route')
const createEventRoutes = require('./createEvent-route')
const createAlbumRoutes = require('./weddingAlbum-route')
const eventRoutes = require('./eventRoutes');

router.use("/create-event", createEventRoutes)
router.use("/create-wedding", createWeddingRoutes)
router.use("/create-photo", createAlbumRoutes)

router.use('/users', userRoutes);

router.use('/auth', authRoutes)

router.use('/event', eventRoutes)

module.exports = router;
