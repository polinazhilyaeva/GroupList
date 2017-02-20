'use strict';

function ListItemView (_student) {
    var student = _student,
        infoView,
        domItem;

    this.makeItem = function () {
        var item = document.createElement('li'),
            json = student.toJSON(),
            html = templater(listItemViewTpl, json),
            buttonView, buttonEdit;

        item.innerHTML = html;
        item.className += 'data-row';

        buttonView = item.querySelector('.details-button');
        buttonEdit = item.querySelector('.edit-button');

        buttonView.addEventListener('click', showInfo, false);
        buttonEdit.addEventListener('click', showEdit, false);

        domItem = item;
        infoView = new InfoView(student, domItem);

        return item;
    };

    function showInfo () {
        infoView.showInfoBox();
    }

    function showEdit () {
        infoView.showEditBox(domItem);
    }
}