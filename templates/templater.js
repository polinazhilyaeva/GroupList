'use strict';

function templater (template, json) {
    var html = template,
        toReplace, key;

    for (key in json) {
        toReplace = ':' + key;
        html = html.split(toReplace).join(json[key]);
    }

    return html;
}