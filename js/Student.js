'use strict';

function Student (name, lastName, gender, skype, age, email, phone) {
    this.name = name;
    this.lastName = lastName;
    this.fullName = name + ' ' + lastName;
    this.gender = gender;
    this.skype = skype;
    this.age = age;
    this.email = email;
    this.phone = phone;

    return this;
}