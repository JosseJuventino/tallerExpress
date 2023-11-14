const httpError = require("http-errors");

const Student = require("../models/Student.model");

const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find();
    if (!students) throw httpError(404, "Student not found");
    res.status(200).json({ data: students });
  } catch (err) {
    next(err);
  }
};

const createStudent = async (req, res, next) => {
  try {
    const { carnet, nombre, carrera, promedioNotas } = req.body;
    const newStudent = new Student({ carnet, nombre, carrera, promedioNotas });
    const savedStudent = await newStudent.save();

    if (!savedStudent) throw httpError(500, "Student not created");
    res.status(201).json({ message: "Student created", data: savedStudent });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllStudents,
  createStudent,
};
