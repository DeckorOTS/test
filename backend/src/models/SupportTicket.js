const mongoose = require('mongoose');

// Definición del esquema para el modelo de ticket de soporte
const supportTicketSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
    status: { type: String, enum: ['open', 'in-progress', 'closed'], default: 'open' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Middleware para actualizar la fecha de actualización
supportTicketSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

// Creación del modelo a partir del esquema
const SupportTicket = mongoose.model('SupportTicket', supportTicketSchema);

module.exports = SupportTicket;\n