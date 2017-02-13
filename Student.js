'use strict';

function Student (name, lastName, gender, skype, birthday, email, phone) {
    this.name = name;
    this.lastName = lastName;
    this.fullName = name + ' ' + lastName;
    this.gender = gender;
    this.skype = skype;
    this.age = getAge(birthday);
    this.email = email;
    this.phone = phone;

    this.toJSON = function () {
    	var json = {};

        json.name = this.name;
        json.lastName = this.lastName;
        json.fullName = this.name + ' ' + this.lastName;
        json.gender = this.gender;
        json.skype = this.skype;
        json.age = this.age;
        json.email = this.email;
        json.phone = this.phone;

    	return json;
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