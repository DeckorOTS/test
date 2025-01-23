const request = require('supertest');
const app = require('../../app');
const Ticket = require('../models/Ticket');

describe('Support Tickets API', () => {
  beforeEach(async () => {
    await Ticket.deleteMany({});
  });

  describe('POST /tickets', () => {
    it('should create a new ticket', async () => {
      const response = await request(app)
        .post('/tickets')
        .send({ title: 'Issue with login', description: 'User cannot log in.' });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('ticket');
      expect(response.body.ticket.title).toBe('Issue with login');
    });
  });

  describe('GET /tickets', () => {
    it('should return all tickets', async () => {
      await Ticket.create({ title: 'Issue with login', description: 'User cannot log in.' });
      const response = await request(app).get('/tickets');

      expect(response.status).toBe(200);
      expect(response.body.tickets.length).toBe(1);
    });
  });

  describe('GET /tickets/:id', () => {
    it('should return a ticket by ID', async () => {
      const ticket = await Ticket.create({ title: 'Issue with login', description: 'User cannot log in.' });
      const response = await request(app).get(`/tickets/${ticket._id}`);

      expect(response.status).toBe(200);
      expect(response.body.ticket.title).toBe(ticket.title);
    });
  });

  describe('DELETE /tickets/:id', () => {
    it('should delete a ticket by ID', async () => {
      const ticket = await Ticket.create({ title: 'Issue with login', description: 'User cannot log in.' });
      const response = await request(app).delete(`/tickets/${ticket._id}`);

      expect(response.status).toBe(204);
    });
  });
});