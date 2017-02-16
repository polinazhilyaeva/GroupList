'use strict';

function InfoView (_listItem) {
    var listItem = _listItem,
        detailsContainer = document.getElementById('details');

    this.showInfoBox = function () {
        var json = listItem.toJSON(),
            html = templater(infoViewTpl, json),
            closeButton;

        detailsContainer.innerHTML = html;

        closeButton = detailsContainer.getElementsByClassName('close-button')[0];
        closeButton.addEventListener('click', clearDetails, false);
    };

    function clearDetails () {
        detailsContainer.innerHTML = '';
    }
}