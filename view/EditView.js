'use strict';

function EditView (_listItem) {
    var listItem = _listItem,
        detailsContainer = document.getElementById('details');

    this.showEditBox = function () {
        var json = listItem.toJSON(),
            html = templater(editViewTpl, json),
            closeButton, saveButton;

        detailsContainer.innerHTML = html;

        closeButton = detailsContainer.getElementsByClassName('close-button')[0];
        closeButton.addEventListener('click', clearDetails, false);

        saveButton = detailsContainer.getElementsByClassName('save-button')[0];
        saveButton.addEventListener('click', saveInfo, false);
    };

    function clearDetails () {
        detailsContainer.innerHTML = '';
    }

    function saveInfo () {
        var student = listItem,
            list = student.getListLink(),
            listView = new ListView(list),
            inputFields, infoView;

        inputFields = detailsContainer.querySelectorAll('input[type="text"]');

        inputFields.forEach(function(inputField) {
            if (inputField.value !== '') {
                student.set(inputField.name, inputField.value);
            }            
        });

        listView.showList();

        infoView = new InfoView(student);
        infoView.showInfoBox();
    }
}