'use strict';

var fullForm = ['name', 'lastName', 'gender', 'age', 'skype'],
	shortForm = ['fullName', 'skype', 'gender'],
	listDestinationID = 'content',
	detailsDestinationID = 'details',
	students = new StudentList(),
	listView = new ListView();

document.addEventListener('DOMContentLoaded', function () {
	listView.showList(listDestinationID, detailsDestinationID, fullForm, shortForm);
}, false);

studentListInit(students);
listView.setList(students);

/*
 * Adding several students to a group
 */
function studentListInit (studentList) {
	var student = {};

	student = new Student('Svetlana', 'Ovcharenko', 'female', 'ami-caty', 21, 'mail@gmail.com', '+380666666789');
	studentList.addStudent(student);
	student = new Student('Vladimir', 'Timofeev', 'male', 'vovanium', 20, 'somemail@yahoo.com', '+380123000000');
	studentList.addStudent(student);
	student = new Student('Irina', 'Ruban', 'female', 'princess_rina88', 22, 'themail@mail.com', '+380923456789');
	studentList.addStudent(student);
	student = new Student('Alexey', 'Grigoriev', 'male', 'izaya256', 23, 'somemail@mail.ru', '+380154656654');
	studentList.addStudent(student);
	student = new Student('Elena', 'Ryndina', 'female', 'dn100980rev', 27, 'address@live.com', '+380189456459');
	studentList.addStudent(student);
	student = new Student('Polina', 'Zhilyaeva', 'female', 'polina_volna', 29, 'email@gmail.com', '+380223444789');
	studentList.addStudent(student);
}
