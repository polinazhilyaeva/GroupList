'use strict';

function ListItemView () {
    this.makeItem = function (listItem) {
        var html = '';
        
        for (let field in listItem) {
            html += '<span>' + listItem[field] + '</span>';
        };

        return html;
    }

    return this;
}