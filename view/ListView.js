'use strict';

function ListView (studentList) {
    var students = studentList;

    this.showList = function () {
        var container = document.getElementById('content'),
            infoView = new InfoView(),
            domList;    

        container.innerHTML = listViewTpl;
        domList = container.querySelector('ul');

        students.forEach(function (student) {
            var listItemView = new ListItemView(student, infoView),
                li = listItemView.makeItem();

            domList.appendChild(li);
        });
    };

    return this;
}