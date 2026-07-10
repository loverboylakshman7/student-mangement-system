class StudentManager {

    // Get all students
    static getAllStudents() {

        return StorageManager.getStudents();

    }

    // Save all students
    static saveAllStudents(students) {

        StorageManager.saveStudents(students);

    }

}