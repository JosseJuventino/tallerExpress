const express = require("express");
const router = express.Router();

const {
  getAllStudents,
  createStudent,
} = require("../controllers/student.controller");
// const { route } = require("express/lib/application");

const {
  createStudentValidator,
  idInParams,
} = require("../validators/Student.validators");
const { runValidation } = require("../middlewares/validator.middleware");

router.post("/", createStudentValidator, runValidation, createStudent);
router.get("/", getAllStudents);


module.exports = router;
