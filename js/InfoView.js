'use strict';

function InfoView (fieldsToShow) {
    this.showInfo = function (thisStudent) {
        var list, studentUl, header, 
            studentView,
            oldInfo;

        list = document.createElement('ul');
        header = makeHeader(fieldsToShow);
        list.appendChild(header);

        studentView = new ListItemView();
        studentUl = studentView.makeListItem(thisStudent, fieldsToShow);
        list.appendChild(studentUl);

        oldInfo = document.getElementById('details');

        while (oldInfo.firstChild) {
            oldInfo.removeChild(oldInfo.firstChild);
        }

        document.getElementById('details').appendChild(list);
    }

    return this;    
}