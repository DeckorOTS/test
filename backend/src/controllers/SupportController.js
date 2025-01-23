const Ticket = require('../models/Ticket');
const User = require('../models/User');

class SupportController {
    // Crea un nuevo ticket de soporte
    static async createTicket(req, res) {
        try {
            const { userId, issue } = req.body;
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            const newTicket = new Ticket({ userId, issue, status: 'Open' });
            await newTicket.save();
            return res.status(201).json({ message: 'Ticket created successfully', ticket: newTicket });
        } catch (error) {
            return res.status(500).json({ message: 'Error creating ticket', error });
        }
    }

    // Recupera todos los tickets de soporte de un usuario
    static async getUserTickets(req, res) {
        const { userId } = req.params;
        try {
            const tickets = await Ticket.find({ userId });
            return res.status(200).json(tickets);
        } catch (error) {
            return res.status(500).json({ message: 'Error retrieving tickets', error });
        }
    }

    // Actualiza el estado de un ticket
    static async updateTicketStatus(req, res) {
        const { ticketId } = req.params;
        const { status } = req.body;
        try {
            const updatedTicket = await Ticket.findByIdAndUpdate(ticketId, { status }, { new: true });
            if (!updatedTicket) {
                return res.status(404).json({ message: 'Ticket not found' });
            }
            return res.status(200).json({ message: 'Ticket updated successfully', ticket: updatedTicket });
        } catch (error) {
            return res.status(500).json({ message: 'Error updating ticket', error });
        }
    }
}

module.exports = SupportController;