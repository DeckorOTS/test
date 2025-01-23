const express = require('express');
const router = express.Router();
const Tenant = require('../models/Tenant');

// Endpoint para registrar un nuevo inquilino
router.post('/', async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const newTenant = new Tenant({ name, email, phone });
        await newTenant.save();
        res.status(201).json(newTenant);
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el inquilino', error });
    }
});

// Endpoint para actualizar un inquilino
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    try {
        const updatedTenant = await Tenant.findByIdAndUpdate(id, { name, email, phone }, { new: true });
        if (!updatedTenant) {
            return res.status(404).json({ message: 'Inquilino no encontrado' });
        }
        res.json(updatedTenant);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el inquilino', error });
    }
});

module.exports = router;