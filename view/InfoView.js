'use strict';

function InfoView () {
    this.showInfo = function (json) {
        var detailsContainer = document.getElementById('details'),
            details = templater(infoViewTpl, json),
            detailsBox;

        detailsContainer.innerHTML = details;
        detailsBox = detailsContainer.getElementsByClassName('details-box')[0];
        
        detailsBox.addEventListener('click', function () {
            detailsContainer.innerHTML = '';
        }, false);
    };
}