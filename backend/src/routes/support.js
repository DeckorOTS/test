const express = require('express');
const router = express.Router();

// Dummy data for tickets
let tickets = [];

// Obtener todos los tickets
router.get('/', (req, res) => {
    res.json(tickets);
});

// Crear un nuevo ticket
router.post('/', (req, res) => {
    const { tenantId, issueDescription } = req.body;
    const newTicket = {
        id: tickets.length + 1,
        tenantId,
        issueDescription,
        status: 'open',
        createdAt: new Date()
    };
    tickets.push(newTicket);
    res.status(201).json(newTicket);
});

// Actualizar el estado de un ticket
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const ticket = tickets.find(t => t.id == id);

    if (ticket) {
        ticket.status = status;
        res.json(ticket);
    } else {
        res.status(404).json({ message: 'Ticket not found' });
    }
});

// Eliminar un ticket
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    tickets = tickets.filter(t => t.id != id);
    res.status(204).send();
});

module.exports = router;
