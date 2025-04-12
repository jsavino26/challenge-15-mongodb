const express = require('express');
const userRoutes = require('./api/userRoutes');
const thoughtRoutes = require('./api/thoughtRoutes'); // Placeholder for thought routes

const router = express.Router();

// Use user routes
router.use('/users', userRoutes);

// Use thought routes (if implemented)
router.use('/thoughts', thoughtRoutes);

module.exports = router;