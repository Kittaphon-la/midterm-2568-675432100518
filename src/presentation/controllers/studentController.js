const studentService = require('../../business/services/studentService');

class StudentController {

    async getAllStudents(req, res, next) {
        try {
            const students = await studentService.getAllStudents();
            res.json(students);
        } catch (err) {
            next(err);
        }
    }

    async getStudentById(req, res, next) {
        try {
            const student = await studentService.getStudentById(req.params.id);
            res.json(student);
        } catch (err) {
            next(err);
        }
    }

    async createStudent(req, res, next) {
        try {
            const student = await studentService.createStudent(req.body);
            res.status(201).json(student);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new StudentController();
