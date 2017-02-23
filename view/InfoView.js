'use strict';

function InfoView () {
    var detailsContainer = document.getElementById('details'),
        closeButton, saveButton;

    this.showInfoBox = function (student) {
        var json = student.toJSON(),
            html = templater(infoViewTpl, json);

        clearDetails();

        detailsContainer.innerHTML = html;

        closeButton = detailsContainer.querySelector('.close-button');
        closeButton.addEventListener('click', clearDetails, false);
    };
 
    this.showEditBox = function (student) {
        var json = student.toJSON(),
            html = templater(editViewTpl, json),
            saveInfoStudent = saveInfo(student);

        clearDetails(saveInfoStudent);

        detailsContainer.innerHTML = html;

        findButtons(); 
        
        closeButton.addEventListener('click', clearDetails, false);
        saveButton.addEventListener('click', saveInfoStudent, false);
    };

    function clearDetails (saveInfoStudent) {
        findButtons();

        if (closeButton) {
            closeButton.removeEventListener('click', clearDetails);
        }

        if (saveButton) {
            saveButton.removeEventListener('click', saveInfoStudent);
        }

        detailsContainer.innerHTML = '';
    }

    function findButtons () {
        closeButton = detailsContainer.querySelector('.close-button'),
        saveButton = detailsContainer.querySelector('.save-button');
    }


    function saveInfo (student) {
        return function () {
            var json = student.toJSON(),
                inputFields;

            inputFields = detailsContainer.querySelectorAll('input[type="text"]');

            inputFields.forEach(function(inputField) {
                if (inputField.value !== '') {
                    student.set(inputField.name, inputField.value);
                } else {
                    student.set(inputField.name, json[inputField.name]);
                }
            });
        };
    }
}