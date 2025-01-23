const chatbotService = require('../services/chatbotService');
const { expect } = require('chai');

describe('Chatbot Service', () => {
    describe('cuando se envía un mensaje', () => {
        it('debería responder con un mensaje válido', async () => {
            const response = await chatbotService.sendMessage('Hola');
            expect(response).to.be.an('object');
            expect(response).to.have.property('message');
            expect(response.message).to.be.a('string');
        });
    });

    describe('cuando se recibe un comando', () => {
        it('debería ejecutar el comando correcto', async () => {
            const commandResponse = await chatbotService.executeCommand('getHelp');
            expect(commandResponse).to.equal('Aquí tienes ayuda');
        });
    });

    describe('errores', () => {
        it('debería lanzar un error si el mensaje es vacío', async () => {
            try {
                await chatbotService.sendMessage('');
                expect.fail('Se esperaba un error');
            } catch (error) {
                expect(error.message).to.equal('El mensaje no puede estar vacío');
            }
        });
    });
});