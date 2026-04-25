const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlistController');

router.get('/', wishlistController.renderWishlist);
router.post('/add', wishlistController.addItem);
router.post('/bought/:id', wishlistController.updateStatus);

module.exports = router;