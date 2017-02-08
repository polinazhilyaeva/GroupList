'use strict';

function InfoView () {
    this.showInfo = function (thisItem, fieldsToShow, detailsID) {
        var list = document.createElement('ul'),
            header = makeHeader(fieldsToShow),
            listItem, itemView, details;

        list.innerHTML = header;

        itemView = new ListItemView();
        listItem = itemView.makeListItem(thisItem, fieldsToShow);
        list.appendChild(listItem);

        details = document.getElementById(detailsID);

        while (details.firstChild) {
            details.removeChild(details.firstChild);
        }

        details.appendChild(list);
    }

    function makeHeader (fieldsToShow) {
        var headerUl = '<ul class="header">';

        fieldsToShow.forEach(function(field) {
            headerUl += '<li>' + field + '</li>';
        });

        return headerUl;
    }

    return this;    
}