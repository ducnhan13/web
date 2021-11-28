const express = require('express');
const router = express.Router();

const uploadMulter = require('../configs/File') 
const {isLogin}= require('../middlewares/isLogin');
const ProductController = require('../controllers/ProductController');
const FeedbackController = require('../controllers/FeedbackController');

router.get('/manage-products', ProductController.getAll);

router.get('/create-product', ProductController.showCreate);
router.post('/create-product',uploadMulter.single('productImage'), ProductController.create);

router.get('/products/:id/edit', ProductController.showEdit);

router.get('/manage-feedbacks', FeedbackController.getAll);

module.exports = router;