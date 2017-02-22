'use strict';

function InfoView (_student) {
    var detailsContainer = document.getElementById('details'),
        student = _student,
        closeButton, saveButton;

    this.showInfoBox = showInfo;
 
    this.showEditBox = function () {
        var json = student.toJSON(),
            html = templater(editViewTpl, json);

        clearDetails();

        detailsContainer.innerHTML = html;

        findButtons();
        
        closeButton.addEventListener('click', clearDetails, false);
        saveButton.addEventListener('click', saveInfo, false);
    };

    function showInfo () {
        var json = student.toJSON(),
            html = templater(infoViewTpl, json);

        clearDetails();

        detailsContainer.innerHTML = html;

        closeButton = detailsContainer.querySelector('.close-button');
        closeButton.addEventListener('click', clearDetails, false);
    }

    function clearDetails () {
        findButtons();

        if (closeButton) {
            closeButton.removeEventListener('click', clearDetails);
        }

        if (saveButton) {
            saveButton.removeEventListener('click', saveInfo);
        }

        detailsContainer.innerHTML = '';
    }

    function findButtons () {
        closeButton = detailsContainer.querySelector('.close-button'),
        saveButton = detailsContainer.querySelector('.save-button');
    }

    function saveInfo () {
        var inputFields;

        inputFields = detailsContainer.querySelectorAll('input[type="text"]');

        inputFields.forEach(function(inputField) {
            if (inputField.value !== '') {
                student.set(inputField.name, inputField.value);
            }            
        });
        
        showInfo();
    }
}