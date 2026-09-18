const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleado.controller');

// GET - Obtener todos los empleados
router.get('/', empleadoController.getEmpleados);

// POST - Crear un nuevo empleado
router.post('/', empleadoController.createEmpleado);

// GET - Obtener un empleado por ID
router.get('/:id', empleadoController.getEmpleado);

// PUT - Actualizar un empleado por ID
router.put('/:id', empleadoController.editEmpleado);

// DELETE - Eliminar un empleado por ID
router.delete('/:id', empleadoController.deleteEmpleado);

module.exports = router;
