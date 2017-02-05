var sveta, vova, ira, lesha, lena, polina, newStudent,
	group, studentsList,
	view;

sveta = new Student('Svetlana', 'Ovcharenko', 'female', 'ami-caty', 'mail@gmail.com', '+380666666789');
vova = new Student('Vladimir', 'Timofeev', 'male', 'vovanium', 'somemail@yahoo.com', '+380123000000');
ira = new Student('Irina', 'Ruban', 'female', 'princess_rina88', 'themail@mail.com', '+380923456789');
lesha = new Student('Alexey', 'Grigoriev', 'male', 'izaya256', 'somemail@mail.ru', '+380154656654');
lena = new Student('Elena', 'Ryndina', 'female', 'dn100980rev', 'address@live.com', '+380189456459');
polina = new Student('Polina', 'Zhilyaeva', 'female', 'polina_volna', 'email@gmail.com', '+380223444789');

group = new Group(sveta, vova, ira, lesha, lena, polina);

newStudent = new Student('Sergey', 'Ivanov', 'male', 'skype_nickname', 'somemail@gmail.com', '+380123456789');
group.addStudent(newStudent);

studentsList = group.getStudentsList();
view = new View(studentsList);

view.showStudents('content');
