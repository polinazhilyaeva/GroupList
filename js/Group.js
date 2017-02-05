function Group () {
    var studentsAmount = arguments.length,
        studentsList = [],
        i;

    if (arguments) {
        for (i = 0; i < studentsAmount; i++) {
            studentsList.push(arguments[i]);
        }
    }

    studentsAmount = studentsList.length;

    this.addStudent = function (student) {
        studentsList.push(student);
    }

    this.getStudentsList = function () {
        return studentsList;
    }

    return this;
}