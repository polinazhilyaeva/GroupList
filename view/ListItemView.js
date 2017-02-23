'use strict';

function ListItemView (_student, _infoView) {
    var item = document.createElement('li'),
        student = _student,
        buttonView, buttonEdit,
        infoView = _infoView;

    this.makeItem = function () {
        render();

        student.on('change', changeInfo);
        student.on('change', showInfo);

        return item;
    };

    function render () {
        var json = student.toJSON(),
            html = templater(listItemViewTpl, json);

        item.innerHTML = html;
        item.classList.add('data-row');

        findButtons();

        buttonView.addEventListener('click', showInfo, false);
        buttonEdit.addEventListener('click', showEdit, false);
    }    

    function changeInfo () {
        buttonView.removeEventListener('click', showInfo);
        buttonEdit.removeEventListener('click', showEdit);

        render();
    }

    function findButtons () {
        buttonView = item.querySelector('.details-button');
        buttonEdit = item.querySelector('.edit-button');
    }

    function showInfo () {
        infoView.showInfoBox(student);
    }

    function showEdit () {
        infoView.showEditBox(student);
    }
}