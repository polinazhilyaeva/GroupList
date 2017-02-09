'use strict';

function InfoView () {
    this.showInfo = function (thisItem, detailsContainerID) {
        var detailsContainer = document.getElementById(detailsContainerID),
            header = makeHeader(thisItem),
            itemView = new ListItemView(), 
            info = itemView.makeItem(thisItem);

        detailsContainer.innerHTML = header + info;
    }

    this.addButtons = function (list, fullFormArray, listContainer, detailsContainerID) {
        var rows = listContainer.getElementsByClassName('data-row'),
            eventListener = this.showInfo.bind(this);

        [].forEach.call(rows, function(row, i) {
            var button = document.createElement('button');

            button.innerHTML = 'View Details';
            button.addEventListener('click', function () {
                var item = list[i].getFullForm(fullFormArray);

                return eventListener(item, detailsContainerID);
            }, false);

            row.appendChild(button);
        });
    }

    function makeHeader (listItem) {
        var html = '<header>';

        for (let field in listItem) {
            html += '<span>' + field + '</span>';
        };

        html += '</header>';

        return html;
    }

    return this;    
}