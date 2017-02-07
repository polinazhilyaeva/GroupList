'use strict';

function makeHeader (fieldsToShow) {
    var headerUl = document.createElement('ul'),
        li;

    headerUl.setAttribute('class', 'header');

    fieldsToShow.forEach(function(field) {
        li = document.createElement('li');
        li.innerHTML = field;
        headerUl.appendChild(li);
    });

    return headerUl;
}