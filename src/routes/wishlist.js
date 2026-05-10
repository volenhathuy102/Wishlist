const router = require('express').Router();
const wishlistController = require('../controllers/wishlistController');
const { protect } = require('../middleware/authMiddleware');
router.get('/', protect, wishlistController.renderWishlist);
router.post('/add', protect, wishlistController.addItem);
router.post('/edit/:id', protect, wishlistController.editItem);
router.post('/bought/:id', protect, wishlistController.updateStatus);
module.exports = router;