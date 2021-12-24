const express = require('express');
const router = express.Router();

const uploadMulter = require('../configs/File')
const { isLogin } = require('../middlewares/isLogin');
const ProductController = require('../controllers/ProductController');
const FeedbackController = require('../controllers/FeedbackController');

router.get('/manage-products', isLogin, ProductController.getAll);

router.get('/create-product', isLogin, ProductController.showCreate);
router.post('/create-product', isLogin, uploadMulter.single('productImage'), ProductController.create);

router.get('/products/:id/edit', isLogin, ProductController.showEdit);

router.get('/manage-feedbacks', isLogin, FeedbackController.getAll);

module.exports = router;