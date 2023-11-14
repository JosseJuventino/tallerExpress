const express = require('express');
const router = express.Router();

const StudentsRouter = require('./Student.router');
router.use('/students', StudentsRouter);

module.exports = router;