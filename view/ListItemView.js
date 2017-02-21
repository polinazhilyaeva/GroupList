'use strict';

function ListItemView (_student) {
    var item = document.createElement('li'),
        student = _student,
        infoView;

    this.makeItem = function () {
        var json = student.toJSON(),
            html = templater(listItemViewTpl, json),
            buttonView, buttonEdit;

        item.innerHTML = html;
        item.className += 'data-row';

        buttonView = item.querySelector('.details-button');
        buttonEdit = item.querySelector('.edit-button');

        buttonView.addEventListener('click', showInfo, false);
        buttonEdit.addEventListener('click', showEdit, false);

        infoView = new InfoView(student, this);

        return item;
    };

    this.changeInfo = function () {
        var json = student.toJSON(),
            html = templater(listItemViewTpl, json),
            buttonView, buttonEdit;

        buttonView = item.querySelector('.details-button');
        buttonEdit = item.querySelector('.edit-button');

        buttonView.removeEventListener('click', showInfo);
        buttonEdit.removeEventListener('click', showEdit);

        item.innerHTML = html;

        buttonView = item.querySelector('.details-button');
        buttonEdit = item.querySelector('.edit-button');

        buttonView.addEventListener('click', showInfo, false);
        buttonEdit.addEventListener('click', showEdit, false);
    }

    function showInfo () {
        infoView.showInfoBox();
    }

    function showEdit () {
        infoView.showEditBox();
    }
}