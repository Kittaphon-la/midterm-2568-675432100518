const studentRepository = require('../../data/repositories/studentRepository');
const studentValidator = require('../validators/studentValidator');

class StudentService {

    async getAllStudents() {
        return await studentRepository.findAll();
    }

    async getStudentById(id) {
        const studentId = studentValidator.validateId(id);
        const student = await studentRepository.findById(studentId);
        if (!student) throw new Error('Student not found');
        return student;
    }

    async createStudent(data) {
        studentValidator.validateStudentData(data);
        return await studentRepository.create(data);
    }

    async updateStudent(id, studentData) {
        const studentId = studentValidator.validateId(id);
        studentValidator.validateStudentData(studentData);

        const student = await studentRepository.findById(studentId);
        if (!student) {
            throw new Error('Student not found');
        }

        return await studentRepository.update(studentId, studentData);
    }

    async deleteStudent(id) {
        const studentId = studentValidator.validateId(id);

        const student = await studentRepository.findById(studentId);
        if (!student) {
            throw new Error('Student not found');
        }

        if (student.status === 'active') {
            throw new Error('Cannot delete active student');
        }

        return await studentRepository.delete(studentId);
    }
}

module.exports = new StudentService();
