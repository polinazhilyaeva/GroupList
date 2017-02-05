function View (studentsList) {

    this.showStudents = function (destinationID) {
        var domList = studentsToDOMList('email');

        document.addEventListener('DOMContentLoaded', function () {
            document.getElementById(destinationID).appendChild(domList);
        });
    }

    /**
    * Makes a DOM list presentation for studentsList.
    * By default hides additional fields starting from stopField
    *
    * @param      {String}  stopField    Field from which the additional fields start
    * @return     {string}  DOM unordered list ready for appending to another element
    */
    function studentsToDOMList (stopField) {
        var resultList, listLi, ul, ulLi, 
            header, button, field,
            count = 0;

        resultList = document.createElement('ul');
        header = makeHeader(stopField);
        resultList.appendChild(header);

        studentsList.forEach(function (student) {
            ul = document.createElement('ul');
            listLi = document.createElement('li');
            listLi.appendChild(ul);
            resultList.appendChild(listLi);

            for (field in student) {
                /* we show only one field for name and lastname together - in 'Name' column
                   so we skip the lastname */
                if (field === 'lastName') {
                    continue;
                }
                if (field === stopField) {
                    break;
                }

                ulLi = document.createElement('li');

                if (field === 'name') {
                    ulLi.innerHTML = student['name'] + ' ' + student['lastName'];
                } else {
                    ulLi.innerHTML = student[field];
                }
                
                ul.appendChild(ulLi);
            }

            ulLi = document.createElement('li');

            button = document.createElement('button');
            button.innerHTML = 'View Details';
            button.setAttribute('id', count);
            button.addEventListener('click', showDetails, false);

            ulLi.appendChild(button);
            ul.appendChild(ulLi);

            count++;
        });

        return resultList;
    }

    /**
     * Makes a header for list of students. Helper function
     *
     * @param      {String}     stopField    Field from which the additional fields start
     * @return     {Object}     DOM element - unordered list of fields names
     */
    function makeHeader (stopField) {
        var headerUl = document.createElement('ul'),
            firstStudent, field, li;

        firstStudent = studentsList[0];

        headerUl.setAttribute('class', 'header');

        for (field in firstStudent) {
            if (field === 'lastName') {
                continue;
            }

            if (field === stopField) {
                break;
            }

            li = document.createElement('li');
            li.innerHTML = field;
            headerUl.appendChild(li);
        }

        return headerUl;
    }

    /**
     * Event handler.
     * Shows full information about one student depending on which button was clicked
     */
    
    function showDetails () {
        var id = this.id,
            thisStudent = studentsList[id],
            oldDetails, list, ul, ulLi, 
            header, field;

        list = document.createElement('ul');
        header = makeHeader('');
        list.appendChild(header);

        ul = document.createElement('ul');
        
        for (field in thisStudent) {
            /* we show only one field for name and lastname together - in 'Name' column
               so we skip the lastname */
            if (field === 'lastName') {
                continue;
            }

            ulLi = document.createElement('li');

            if (field === 'name') {
                ulLi.innerHTML = thisStudent['name'] + ' ' + thisStudent['lastName'];
            } else {
                ulLi.innerHTML = thisStudent[field];
            }
            
            ul.appendChild(ulLi);
        }

        list.appendChild(ul);

        oldDetails = document.getElementById('details');

        while (oldDetails.firstChild) {
            oldDetails.removeChild(oldDetails.firstChild);
        }

        document.getElementById('details').appendChild(list);
    }

    return this;
}