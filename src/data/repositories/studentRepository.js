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

}

module.exports = new StudentRepository();
