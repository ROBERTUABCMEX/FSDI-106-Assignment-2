class Task {

    /*
    * initialize elements
    * */

    constructor(title, important, dueDate, description, alert, location) {
        this.title = title;
        this.important = important;
        this.dueDate = dueDate;
        this.description = description;
        this.alert = alert;
        this.location = location;

        this.user = 'Roberto';
        this.createOn = new Date(); // current date and time
      
    }
}

/**
 * 
 * create the UI
 * catch the click event on the save button
 * call a save fn
 * get the values from the input fields
 * create an object
 * console log the object
 * 
 */
