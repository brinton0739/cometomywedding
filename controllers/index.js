const router = require('express').Router();
const dashboardRoutes = require('./dashboard-routes.js');
const weddingRoutes = require('./wedding-routes.js');
const apiRoutes = require('./api/index');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/wedding', weddingRoutes);

module.exports = router;