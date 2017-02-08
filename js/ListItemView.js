'use strict';

function ListItemView () {
    this.makeListItem = function (listItem, fieldsToShow) {
        var ul = document.createElement('ul'),
            html = '';
        
        fieldsToShow.forEach(function(field) {
            html += '<li>' + listItem[field] + '</li>';
        });

        ul.innerHTML = html;

        return ul;
    }

    return this;
}