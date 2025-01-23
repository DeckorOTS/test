const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Asumiendo que tienes un modelo de usuario

class AuthController {
    constructor() {}

    async register(req, res) {
        try {
            const { username, email, password } = req.body;
            // Lógica para registrar el usuario (hash de contraseña, guardar en base de datos)
            const newUser = new User({ username, email, password }); // Asegúrate de hashear la contraseña
            await newUser.save();
            return res.status(201).json({ message: 'Usuario registrado con éxito' });
        } catch (error) {
            return res.status(500).json({ message: 'Error al registrar el usuario', error });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            // Lógica para autenticar al usuario (buscar en la base de datos, comprobar contraseña)
            const user = await User.findOne({ email });
            if (!user || !(await user.comparePassword(password))) {
                return res.status(401).json({ message: 'Credenciales inválidas' });
            }
            const token = this.generateToken(user);
            return res.status(200).json({ token });
        } catch (error) {
            return res.status(500).json({ message: 'Error al iniciar sesión', error });
        }
    }

    generateToken(user) {
        return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Asegúrate de definir JWT_SECRET en tu .env
    }

    async validateToken(req, res) {
        try {
            const token = req.header('Authorization').replace('Bearer ', '');
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            return res.status(200).json(decoded);
        } catch (error) {
            return res.status(401).json({ message: 'Token inválido', error });
        }
    }
}

module.exports = new AuthController();