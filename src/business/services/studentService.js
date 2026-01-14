const studentRepository = require('../../data/repositories/studentRepository');

class StudentService {

    async getAllStudents() {
        return await studentRepository.findAll();
    }

    async getStudentById(id) {
        const student = await studentRepository.findById(id);
        if (!student) throw new Error('Student not found');
        return student;
    }

    async createStudent(data) {
        return await studentRepository.create(data);
    }
}

module.exports = new StudentService();
