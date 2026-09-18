const Empleado = require('../models/empleado.model');

// GET - Obtener todos los empleados
const getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find();
        res.status(200).json(empleados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST - Crear un nuevo empleado
const createEmpleado = async (req, res) => {
    try {
        const nuevoEmpleado = new Empleado(req.body);
        const empleadoGuardado = await nuevoEmpleado.save();
        res.status(201).json(empleadoGuardado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET - Obtener un empleado por ID
const getEmpleado = async (req, res) => {
    try {
        const empleado = await Empleado.findById(req.params.id);

        if (!empleado) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }

        res.status(200).json(empleado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// PUT - Actualizar un empleado por ID
const editEmpleado = async (req, res) => {
    try {
        const empleado = await Empleado.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!empleado) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }

        res.status(200).json(empleado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE - Eliminar un empleado por ID
const deleteEmpleado = async (req, res) => {
    try {
        const empleado = await Empleado.findByIdAndDelete(req.params.id);

        if (!empleado) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }

        res.status(200).json({ mensaje: 'Empleado eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Exportar las funciones
module.exports = {
    getEmpleados,
    createEmpleado,
    getEmpleado,
    editEmpleado,
    deleteEmpleado
};
