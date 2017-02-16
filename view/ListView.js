'use strict';

function ListView (studentList) {
    var students = studentList;

    this.showList = function () {
        var container = document.getElementById('content'),
            domList;    

        container.innerHTML = listViewTpl;
        domList = container.getElementsByTagName('ul')[0];

        students.forEach(function(listItem) {
            var listItemView = new ListItemView(listItem),
                li = listItemView.makeItem();

            domList.appendChild(li);
        });
    };

    return this;
}