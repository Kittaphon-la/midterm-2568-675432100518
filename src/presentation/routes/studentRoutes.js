const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// GET
router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);

// POST
router.post('/', studentController.createStudent);

// PUT
router.put('/:id', studentController.updateStudent);

// PATCH
router.patch('/:id/gpa', studentController.updateGPA);
router.patch('/:id/status', studentController.updateStatus);

// DELETE
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
