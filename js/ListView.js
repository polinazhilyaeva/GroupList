'use strict';

function ListView (group, fullFormArray, shortFormArray) {
    var studentList = group.getStudentList();

    this.makeList = function () {
        var resultList, resultLi, studentUl, studentLi, header, button,
            info, studentView;

        resultList = document.createElement('ul');
        header = makeHeader(shortFormArray);
        resultList.appendChild(header);

        studentList.forEach(function (student) {
            resultLi = document.createElement('li');

            studentView = new ListItemView();
            studentUl = studentView.makeListItem(student, shortFormArray);
            studentLi = document.createElement('li');
            button = document.createElement('button');
            button.innerHTML = 'View Details';

            info = new InfoView(fullFormArray);
            button.addEventListener('click', function () {
                info.showInfo(student);
            }, false);

            studentLi.appendChild(button);
            studentUl.appendChild(studentLi);
            resultLi.appendChild(studentUl);
            resultList.appendChild(resultLi);
        });

        return resultList;
    }

    this.showList = function (destinationID, domStudentList) {
        document.getElementById(destinationID).appendChild(domStudentList);
    }

    return this;
}