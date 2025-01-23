const Tenant = require('../models/Tenant');

class TenantController {

    // Método para crear un nuevo inquilino
    static async createTenant(req, res) {
        try {
            const tenantData = req.body;
            const newTenant = await Tenant.create(tenantData);
            return res.status(201).json({ message: 'Inquilino creado exitosamente', data: newTenant });
        } catch (error) {
            return res.status(500).json({ message: 'Error al crear inquilino', error: error.message });
        }
    }

    // Método para actualizar un inquilino existente
    static async updateTenant(req, res) {
        try {
            const { id } = req.params;
            const tenantData = req.body;
            const updatedTenant = await Tenant.findByIdAndUpdate(id, tenantData, { new: true });
            if (!updatedTenant) {
                return res.status(404).json({ message: 'Inquilino no encontrado' });
            }
            return res.status(200).json({ message: 'Inquilino actualizado exitosamente', data: updatedTenant });
        } catch (error) {
            return res.status(500).json({ message: 'Error al actualizar inquilino', error: error.message });
        }
    }
}

module.exports = TenantController;