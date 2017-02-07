'use strict';

function InfoView (fieldsToShow) {
    this.showInfo = function (thisStudent) {
        var list, studentUl,
            header, field, studentRow,
            oldInfo;

        list = document.createElement('ul');
        header = makeHeader(fieldsToShow);
        list.appendChild(header);

        studentRow = new ListItemView();
        studentUl = studentRow.showListItem(thisStudent, fieldsToShow);
        list.appendChild(studentUl);

        oldInfo = document.getElementById('details');

        while (oldInfo.firstChild) {
            oldInfo.removeChild(oldInfo.firstChild);
        }

        document.getElementById('details').appendChild(list);
    }

    return this;    
}