'use strict';

function ListItemView () {
    this.makeItem = function (student) {
        var item = document.createElement('li'),
            json = student.toJSON(),
            html = templater(listItemViewTpl, json),
            button;

        item.innerHTML = html;
        item.className += 'data-row';

        button = item.getElementsByTagName('button')[0];

        button.addEventListener('click', function () {
            var thisJson = json,
                infoView = new InfoView();

            infoView.showInfo(thisJson);
        }, false);

        return item;
    }
}