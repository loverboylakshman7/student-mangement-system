class StorageManager {

  class StorageManager {

    static STORAGE_KEY = "students";
    static EDIT_KEY = "editStudent";
    static EDIT_INDEX = "editIndex";
    static VIEW_KEY = "viewStudent";

    // Get all students
    static getStudents() {

        return JSON.parse(
            localStorage.getItem(this.STORAGE_KEY)
        ) || [];

    }

    // Save all students
    static saveStudents(students) {

        localStorage.setItem(
            this.STORAGE_KEY,
            JSON.stringify(students)
        );

    }

    // Remove all students
    static clearStudents() {

        localStorage.removeItem(this.STORAGE_KEY);

    }
static saveEditStudent(student) {
    localStorage.setItem(this.EDIT_KEY, JSON.stringify(student));
}

static getEditStudent() {
    return JSON.parse(localStorage.getItem(this.EDIT_KEY));
}

static clearEditStudent() {
    localStorage.removeItem(this.EDIT_KEY);
}

static saveEditIndex(index) {
    localStorage.setItem(this.EDIT_INDEX, index);
}

static getEditIndex() {
    return localStorage.getItem(this.EDIT_INDEX);
}

static clearEditIndex() {
    localStorage.removeItem(this.EDIT_INDEX);
}

static saveViewStudent(student) {
    localStorage.setItem(this.VIEW_KEY, JSON.stringify(student));
}

static getViewStudent() {
    return JSON.parse(localStorage.getItem(this.VIEW_KEY));
}
}