'use strict';

var students = new StudentList(),
    listView = new ListView();

document.addEventListener('DOMContentLoaded', function () {
    listView.showList();
}, false);

studentListInit(students);
listView.setList(students);

function studentListInit (studentList) {
    var student = {};

    student = new Student('Svetlana', 'Ovcharenko', 'female', 'ami-caty', '02/24/1991', 'mail@gmail.com', '+380666666789');
    studentList.addStudent(student);
    student = new Student('Vladimir', 'Timofeev', 'male', 'vovanium', '03/15/1992', 'somemail@yahoo.com', '+380123000000');
    studentList.addStudent(student);
    student = new Student('Irina', 'Ruban', 'female', 'princess_rina88', '12/01/1995', 'themail@mail.com', '+380923456789');
    studentList.addStudent(student);
    student = new Student('Alexey', 'Grigoriev', 'male', 'izaya256', '04/10/1992', 'somemail@mail.ru', '+380154656654');
    studentList.addStudent(student);
    student = new Student('Elena', 'Ryndina', 'female', 'dn100980rev', '07/07/1992', 'address@live.com', '+380189456459');
    studentList.addStudent(student);
    student = new Student('Polina', 'Zhilyaeva', 'female', 'polina_volna', '1987-06-17', 'email@gmail.com', '+380223444789');
    studentList.addStudent(student);
}