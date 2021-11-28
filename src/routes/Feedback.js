const express = require('express');
const router = express.Router();
const FeedbackController = require('../controllers/FeedbackController');

// Routing Customer -  Send Feedback
router.get('/', FeedbackController.renderSendFeedback)
router.post('/', FeedbackController.sendFeedback);

module.exports = router;
