const db = require('../database/connection');

class StudentRepository {

    async findAll() {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM students', [], (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }

    async findById(id) {
        return new Promise((resolve, reject) => {
            db.get('SELECT * FROM students WHERE id=?', [id], (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });
    }

    async create(data) {
        const { student_code, first_name, last_name, email, major } = data;

        return new Promise((resolve, reject) => {
            db.run(
                'INSERT INTO students(student_code,first_name,last_name,email,major) VALUES(?,?,?,?,?)',
                [student_code, first_name, last_name, email, major],
                function(err) {
                    if (err) reject(err);
                    else {
                        db.get('SELECT * FROM students WHERE id=?', [this.lastID], (err, row) => {
                            if (err) reject(err);
                            else resolve(row);
                        });
                    }
                }
            );
        });
    }

    async update(id, studentData) {
        const { student_code, first_name, last_name, email, major } = studentData;

        return new Promise((resolve, reject) => {
            const sql = `
                UPDATE students 
                SET student_code = ?, first_name = ?, last_name = ?, email = ?, major = ?
                WHERE id = ?
            `;

            db.run(sql, [student_code, first_name, last_name, email, major, id], function(err) {
                if (err) reject(err);
                else {
                    db.get('SELECT * FROM students WHERE id = ?', [id], (err, row) => {
                        if (err) reject(err);
                        else resolve(row);
                    });
                }
            });
        });
    }

    // ✅ PATCH GPA
    async updateGPA(id, gpa) {
        return new Promise((resolve, reject) => {
            db.run(
                'UPDATE students SET gpa = ? WHERE id = ?',
                [gpa, id],
                function(err) {
                    if (err) reject(err);
                    else {
                        db.get('SELECT * FROM students WHERE id = ?', [id], (err, row) => {
                            if (err) reject(err);
                            else resolve(row);
                        });
                    }
                }
            );
        });
    }

    // ✅ PATCH Status
    async updateStatus(id, status) {
        return new Promise((resolve, reject) => {
            db.run(
                'UPDATE students SET status = ? WHERE id = ?',
                [status, id],
                function(err) {
                    if (err) reject(err);
                    else {
                        db.get('SELECT * FROM students WHERE id = ?', [id], (err, row) => {
                            if (err) reject(err);
                            else resolve(row);
                        });
                    }
                }
            );
        });
    }

    // ✅ DELETE
    async delete(id) {
        return new Promise((resolve, reject) => {
            db.run(
                'DELETE FROM students WHERE id = ?',
                [id],
                function(err) {
                    if (err) reject(err);
                    else resolve({ message: 'Student deleted successfully' });
                }
            );
        });
    }

}

module.exports = new StudentRepository();
