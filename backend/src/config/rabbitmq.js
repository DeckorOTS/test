const amqp = require('amqplib');

const RABBITMQ_URL = process.env.RABBITMQ_URL || 'amqp://localhost';

async function connect() {
    try {
        const connection = await amqp.connect(RABBITMQ_URL);
        console.log('Conectado a RabbitMQ');
        return connection;
    } catch (error) {
        console.error('Error al conectar a RabbitMQ:', error);
        throw error;
    }
}

module.exports = { connect };