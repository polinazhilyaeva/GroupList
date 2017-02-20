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
        };

    this.toJSON = function () {
    	var json = {},
            value;

        for (value in values) {
            json[value] = values[value];
        }

        json['age'] = getAge(values['age']);

    	return json;
    };

    this.get = function (key) {
        return values[key];
    };

    this.set = function (key, value) {
        values[key] = value;
    };

    function getAge (birthDate) {
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