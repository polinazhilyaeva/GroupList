'use strict';

function StudentList () {
    var studentList = [];

    this.addStudent = function (student) {
        studentList.push(student);
    }

    this.getStudentList = function () {
        return studentList;
    }

    return this;
}