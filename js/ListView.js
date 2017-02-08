'use strict';

function ListView () {
    var studentList = [];

    this.setList = function (listObject) {
        studentList = listObject.getList();
    }

    this.showList = function (destinationID, detailsID, fullFormArray, shortFormArray) {
        var resultList = document.createElement('ul'),
            header = makeHeader(shortFormArray);

        resultList.innerHTML = header;

        studentList.forEach(function (student) {
            var resultListLi = document.createElement('li'),
                button = document.createElement('button'),
                studentView = new ListItemView(),
                info = new InfoView(),
                studentRow;

            studentRow = studentView.makeListItem(student, shortFormArray);

            button.innerHTML = 'View Details';
            button.addEventListener('click', function () {
                info.showInfo(student, fullFormArray, detailsID);
            }, false);

            studentRow.appendChild(button);
            resultListLi.appendChild(studentRow);
            resultList.appendChild(resultListLi);
        });

        document.getElementById(destinationID).appendChild(resultList);
    }

    function makeHeader (fieldsToShow) {
        var headerUl = '<ul class="header">';

        fieldsToShow.forEach(function(field) {
            headerUl += '<li>' + field + '</li>';
        });

        return headerUl;
    }

    return this;
}