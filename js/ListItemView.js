'use strict';

function ListItemView () {
    this.makeListItem = function (listItem, fieldsToShow) {
        var ul = document.createElement('ul'),
            li;
        
        fieldsToShow.forEach(function(field) {
            li = document.createElement('li');
            li.innerHTML = listItem[field];
            ul.appendChild(li);
        });

        return ul;
    }

    return this;
}