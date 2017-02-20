'use strict';

function InfoView (_listItem, _domItem) {
    var detailsContainer = document.getElementById('details'),
        listItem = _listItem,
        json = listItem.toJSON(),
        domItem = _domItem;

    this.showInfoBox = showInfo;
 
    this.showEditBox = function (_domItem) {
        var json = listItem.toJSON(),
            html = templater(editViewTpl, json),
            closeButton, saveButton;

        clearDetails();

        detailsContainer.innerHTML = html;

        closeButton = detailsContainer.querySelector('.close-button');
        saveButton = detailsContainer.querySelector('.save-button');
        
        closeButton.addEventListener('click', clearDetails, false);
        saveButton.addEventListener('click', saveInfo, false);
    };

    function showInfo () {
        var json = listItem.toJSON(),
            html = templater(infoViewTpl, json),
            closeButton;

        clearDetails();

        detailsContainer.innerHTML = html;

        closeButton = detailsContainer.querySelector('.close-button');
        closeButton.addEventListener('click', clearDetails, false);
    }

    function saveInfo () {
        var inputFields, 
            field;

        inputFields = detailsContainer.querySelectorAll('input[type="text"]');

        inputFields.forEach(function(inputField) {
            if (inputField.value !== '') {
                listItem.set(inputField.name, inputField.value);
                field = domItem.querySelector('span.' + inputField.name);
                field.innerHTML = inputField.value;
            }            
        });

        showInfo();
    }

    function clearDetails () {
        var closeButton = detailsContainer.querySelector('.close-button'),
            saveButton = detailsContainer.querySelector('.save-button');

        if (closeButton) {
            closeButton.removeEventListener('click', clearDetails);
        }

        if (saveButton) {
            saveButton.removeEventListener('click', saveInfo);
        }

        detailsContainer.innerHTML = '';
    }
}