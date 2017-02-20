'use strict';

function StudentList () {
    var studentList = [];

    this.addStudent = function (student) {
        studentList.push(student);
    };

    this.forEach = function (fn) {
        studentList.forEach(fn);
    }

    return this;
}