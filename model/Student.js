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
        listeners = {
            change: []
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

    this.on = function (eventName, callback) {
        if (!listeners.hasOwnProperty(eventName)) {
            listeners[eventName] = [];
        }       
        listeners[eventName].push(callback);
    };

    this.triggerEvent = function(eventName) {
        if (listeners.hasOwnProperty(eventName)) {                
            listeners[eventName].forEach(function (callback) {
                callback();
            });         
        }                           
    };

    this.get = function (key) {
        return values[key];
    };

    this.set = function (key, value) {
        values[key] = value;
        this.triggerEvent('change');
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