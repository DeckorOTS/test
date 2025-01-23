const mongoose = require('mongoose');

// Definición del esquema de usuario
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    tenants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant',
    }],
    creationDate: {
        type: Date,
        default: Date.now,
    }
});

// Middleware para encriptar la contraseña antes de guardar
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Método para comparar contraseñas
userSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
};

// Creación del modelo de usuario
const User = mongoose.model('User', userSchema);

module.exports = User;