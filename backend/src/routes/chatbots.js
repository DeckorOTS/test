const express = require('express');
const router = express.Router();
const ChatbotController = require('../controllers/chatbotController');

// Rutas para la creación de chatbots
router.post('/', ChatbotController.createChatbot);

// Rutas para la obtención de datos de chatbots específicos
router.get('/:id', ChatbotController.getChatbotById);

// Rutas para la edición de chatbots
router.put('/:id', ChatbotController.updateChatbot);

// Rutas para la eliminación de chatbots
router.delete('/:id', ChatbotController.deleteChatbot);

module.exports = router;