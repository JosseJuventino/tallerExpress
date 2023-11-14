const {param, body} = require('express-validator');

const createStudentValidator = [
    body('carnet')
    .isString().withMessage('El carnet debe ser un string')
    .trim()
    .isLength({min: 8, max: 8}).withMessage('El carnet debe tener 8 caracteres'),
    body('nombre')
    .isString().withMessage('El nombre debe ser un string')
    .trim()
    .isLength({min: 3}).withMessage('El nombre debe tener al menos 3 caracteres'),
    body('carrera')
    .isString().withMessage('La carrera debe ser un string')
    .trim()
    .isLength({min: 3}).withMessage('La carrera debe tener al menos 3 caracteres'),
    body('promedioNotas')
    .isNumeric().withMessage('El promedio de notas debe ser un número')
    .trim()
    .isLength({min: 0, max:10}).withMessage('El promedio de notas debe estar entre 0 y 10')
];
const idInParams=[
    param('id')
    .notEmpty().withMessage("id field is required")
    .isMongoId().withMessage('El id debe ser un mongoId')
]
module.exports = { createStudentValidator, idInParams };