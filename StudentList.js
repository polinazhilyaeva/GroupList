'use strict';

function StudentList () {
    var studentList = [];

    this.addStudent = function (student) {
        studentList.push(student);
    };

    this.getList = function () {
        return studentList;
    };

    return this;
}