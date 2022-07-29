const router = require('express').Router();
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const createWeddingRoutes = require('./createWedding-route')


router.use("./create-wedding", createWeddingRoutes)

router.use('/users', userRoutes);

router.use('/auth', authRoutes)

module.exports = router;
