const request = require('supertest');
const app = require('../../app');
const authService = require('../../services/authService');

jest.mock('../../services/authService');

describe('Auth Module', () => {
    describe('POST /login', () => {
        it('should return 200 and a token for valid credentials', async () => {
            const credentials = { username: 'user', password: 'password' };
            authService.login.mockResolvedValue({ token: 'valid_token' });

            const response = await request(app)
                .post('/login')
                .send(credentials);

            expect(response.status).toBe(200);
            expect(response.body.token).toBe('valid_token');
        });

        it('should return 401 for invalid credentials', async () => {
            const credentials = { username: 'user', password: 'wrong_password' }; 
            authService.login.mockResolvedValue(null);

            const response = await request(app)
                .post('/login')
                .send(credentials);

            expect(response.status).toBe(401);
        });
    });

    describe('POST /register', () => {
        it('should return 201 for successful registration', async () => {
            const userData = { username: 'new_user', password: 'new_password' };
            authService.register.mockResolvedValue({ id: 1 });

            const response = await request(app)
                .post('/register')
                .send(userData);

            expect(response.status).toBe(201);
            expect(response.body.id).toBe(1);
        });

        it('should return 400 for missing fields', async () => {
            const userData = { username: 'new_user' };  // Missing password

            const response = await request(app)
                .post('/register')
                .send(userData);

            expect(response.status).toBe(400);
        });
    });
});