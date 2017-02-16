'use strict';

function ListItemView (_student) {
    var student = _student;

    this.makeItem = function () {
        var item = document.createElement('li'),
            json = student.toJSON(),
            html = templater(listItemViewTpl, json),
            buttonView, buttonEdit;

        item.innerHTML = html;
        item.className += 'data-row';

        buttonView = item.getElementsByClassName('details-button')[0];
        buttonEdit = item.getElementsByClassName('edit-button')[0];

        buttonView.addEventListener('click', showInfo, false);
        buttonEdit.addEventListener('click', showEdit, false);

        return item;
    }

    function showInfo () {
        var infoView = new InfoView(student);

        infoView.showInfoBox();
    }

    function showEdit () {
        var editView = new EditView(student);

        editView.showEditBox();
    }
}