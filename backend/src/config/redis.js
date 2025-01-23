const redis = require('redis');

// Crear cliente de Redis
const client = redis.createClient({
    host: 'localhost',
    port: 6379,
});

// Manejo de eventos de conexión
client.on('connect', () => {
    console.log('Conectado a Redis');
});

client.on('error', (err) => {
    console.error('Error de Redis:', err);
});

// Funciones para gestionar caché
const setCache = (key, value) => {
    client.set(key, JSON.stringify(value), 'EX', 3600); // Expira en 1 hora
};

const getCache = (key) => {
    return new Promise((resolve, reject) => {
        client.get(key, (err, data) => {
            if (err) reject(err);
            else resolve(data ? JSON.parse(data) : null);
        });
    });
};

module.exports = {
    setCache,
    getCache,
};