'use strict';

function ListView () {
    var list = [];

    this.setList = function (listObject) {
        list = listObject.getList();
    };

    this.showList = function () {
        var container = document.getElementById('content'),
            ul = document.createElement('ul');    

        container.innerHTML = listViewTpl;

        list.forEach(function(listItem) {
            var listItemView = new ListItemView(),
                li = listItemView.makeItem(listItem);

            ul.appendChild(li);
        });

        container.appendChild(ul);
    };

    return this;
}