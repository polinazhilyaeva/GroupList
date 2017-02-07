'use strict';

var fullForm = ['name', 'lastName', 'gender', 'age', 'skype'],
	shortForm = ['fullName', 'skype', 'gender'],
	destinationID = 'content',
	group = new StudentList(),
	listView = new ListView(group, fullForm, shortForm),
	domStudentList;

document.addEventListener('DOMContentLoaded', function () {
	listView.showList(destinationID, domStudentList);
}, false);

groupInit(group);
domStudentList = listView.makeList();

/*
 * Adding several students to a group
 */
function groupInit (group) {
	var student = {};

	student = new Student('Svetlana', 'Ovcharenko', 'female', 'ami-caty', 21, 'mail@gmail.com', '+380666666789');
	group.addStudent(student);
	student = new Student('Vladimir', 'Timofeev', 'male', 'vovanium', 20, 'somemail@yahoo.com', '+380123000000');
	group.addStudent(student);
	student = new Student('Irina', 'Ruban', 'female', 'princess_rina88', 22, 'themail@mail.com', '+380923456789');
	group.addStudent(student);
	student = new Student('Alexey', 'Grigoriev', 'male', 'izaya256', 23, 'somemail@mail.ru', '+380154656654');
	group.addStudent(student);
	student = new Student('Elena', 'Ryndina', 'female', 'dn100980rev', 27, 'address@live.com', '+380189456459');
	group.addStudent(student);
	student = new Student('Polina', 'Zhilyaeva', 'female', 'polina_volna', 29, 'email@gmail.com', '+380223444789');
	group.addStudent(student);
}
