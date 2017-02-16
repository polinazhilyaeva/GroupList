'use strict';

function Student (_name, _lastName, _gender, _skype, _birthday, _email, _phone) {
    var values = {
        name: _name,
        lastName: _lastName,
        gender: _gender,
        skype: _skype,
        age: _birthday,
        email: _email,
        phone: _phone
    },
        list = null;

    this.setListLink = function (_list) {
        list = _list;
    };

    this.getListLink = function () {
        return list;
    }

    this.toJSON = function () {
    	var json = {},
            value;

        for (value in values) {
            if (value === 'age') {
                json[value] = convertAge(values[value]);
                continue;
            }

            json[value] = values[value];
        }

    	return json;
    };

    this.get = function (key) {
        return values[key];
    };

    this.set = function (key, value) {
        values[key] = value;
    };

    function convertAge (birthDate) {
        var now = new Date(),
            date = new Date(birthDate),
            age;

        age = now.getFullYear() - date.getFullYear();

        if ((now.getMonth() < date.getMonth()) || 
            (now.getMonth() == date.getMonth()) && 
            (now.getDate() < date.getDate())) {
            age--;
        }

        return age;
    }

    return this;
}