const express = require('express');
const reouter = express.Router();

const {
    getAllStudents,
    createStudent,
} = require('../controllers/student.controller');
const { route } = require('express/lib/application');

router.get('/', getAllStudents);
router.post('/', createStudent);


module.exports = router;