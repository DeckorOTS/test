const mongoose = require('mongoose');

// Definimos la estructura del modelo de Chatbot
const ChatbotSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    tenantId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Tenant'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

// Middleware para actualizar la fecha de actualización
ChatbotSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

// Exportamos el modelo
module.exports = mongoose.model('Chatbot', ChatbotSchema);