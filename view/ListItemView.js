'use strict';

function ListItemView (_student) {
    var item = document.createElement('li'),
        student = _student,
        buttonView, buttonEdit,
        infoView;

    this.makeItem = function () {
        render();

        infoView = new InfoView(student);
        student.on('change', changeInfo);

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
        infoView.showInfoBox();
    }

    function showEdit () {
        infoView.showEditBox();
    }
}