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

    this.getShortForm = function (shortFormArray) {
    	var shortFormHash = {},
    		student = this;

    	shortFormArray.forEach(function(field) {
    		shortFormHash[field] = student[field];
    	});

    	return shortFormHash;
    }

    this.getFullForm = function (fullFormArray) {
    	var fullFormHash = {},
    		student = this;

    	fullFormArray.forEach(function(field) {
    		fullFormHash[field] = student[field];
    	});

    	return fullFormHash;
    }

    return this;
}