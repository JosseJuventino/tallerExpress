const express = require("express");
const router = express.Router();

const {
  getAllStudents,
  createStudent,
} = require("../controllers/student.controller");
// const { route } = require("express/lib/application");

router.get('/', getAllStudents);
router.post('/', createStudent);

const { createStudentValidator, idInParams } = require('../validators/student.validator');
const {runValidation} = require('../middlewares/validator.middleware');

router.post('/', createStudentValidator, runValidation, createStudent);
router.get('/', idInParams, runValidation, getStudentById);


module.exports = router;
