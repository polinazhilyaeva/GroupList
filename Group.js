function Group () {

    var studentsList = [];

    this.addStudent = function (name, gender, skype) {
        var student = new Student (name, gender, skype);
        studentsList.push(student);
    }

    this.showStudents = function (destinationID) {
        document.addEventListener("DOMContentLoaded", function () {
            var domTable = listToDOMTable(studentsList);
            document.getElementById(destinationID).appendChild(domTable);
        });
    }

    /**
    * Converts a given list of objects into a DOM element of html table 
    *
    * @param      {Array}  list    Array of uniform objects
    * @return     {string}  DOM element of an html table ready for appending to another element
    */
    function listToDOMTable (list) {
        var table = document.createElement('table'),
            thead = table.createTHead(),
            tbody = table.createTBody(),
            listSize = list.length,
            th, tr, td, 
            i, key;

        for (key in list[0]) {
            th = document.createElement('th')
            thead.appendChild(th);
            th.innerHTML = key;
        }

        for (i = 0; i < listSize; ++i) {
            tr = tbody.insertRow();

            for (key in list[i]) {
                td = tr.insertCell();           
                td.innerHTML = list[i][key];
            }    
        }

        return table;
    }

    return this;
}