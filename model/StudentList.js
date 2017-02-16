'use strict';

function StudentList () {
    var studentList = [];

    this.addStudent = function (student) {
        studentList.push(student);
        student.setListLink(studentList);
    };

    this.forEach = function (fn) {
        studentList.forEach(fn);
    }

    return this;
}