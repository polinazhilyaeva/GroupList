'use strict';

function ListView () {
    var list = [];

    this.setList = function (listObject) {
        list = listObject.getList();
    }

    this.showList = function (destinationID, fullFormArray, shortFormArray) {
        var container = document.getElementById(destinationID),
            header = makeHeader(shortFormArray),
            html = header + '<ul>';        

        list.forEach(function (listItem) {
            var itemView = new ListItemView(),
                shortForm = listItem.getShortForm(shortFormArray),
                row = itemView.makeItem(shortForm);

            html += '<li class="data-row">' + row + '</li>';
        });

        html += '</ul>';

        container.innerHTML = html;
    }

    this.enableDetails = function (fullFormArray, listContainerID, detailsContainerID) {    
        document.addEventListener('DOMContentLoaded', function () {
            var info = new InfoView(),
                listContainer = document.getElementById(listContainerID);

            info.addButtons(list, fullFormArray, listContainer, detailsContainerID);
        }, false);
    }

    function makeHeader (fieldsToShow) {
        var html = '<header>';

        fieldsToShow.forEach(function(field) {
            html += '<span>' + field + '</span>';
        });

        html += '</header>';

        return html;
    }

    return this;
}