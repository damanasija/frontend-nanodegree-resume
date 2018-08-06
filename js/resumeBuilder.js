/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*===================================================================================
||  Note:                                                                          ||
||       Most of the data is not real and I've obtained it from faker.js.          ||
||       Since I'm new to Web Development, I've no prior experience.               ||
||       Also the contact info is also incorrect.                                  ||
===================================================================================*/


//Utility function to replace %data% with real data from variables in helper.js
var replaceData = function (variable, realData) {
  return variable.replace('%data%', realData);
}

//----------------------------------The bio object-----------------------------------
var bio = {
  "name": 'Chaitaniya Mehra',
  "role": 'Front-End Web Developer',
  "welcomeMessage": "lorem Ipsum",
  "biopic": 'images/programming.gif',   //image credits: giphy
  "contacts": {
    "mobile": "855-912-5416",
    "email": 'coolad.mehra@gmail.com',
    "github": 'cmehra12',
    "twitter": "@cmehra",
    "location": 'India'
  },
  "skills": ['Conceptual Learning', 'Converting coffee to code', 'Creativeness'],

  //Display function
  "display": function () {
    //Adding name and role
    $('#header').prepend(replaceData(HTMLheaderRole, bio.role));
    $('#header').prepend(replaceData(HTMLheaderName, bio.name));
    $('#header').append(replaceData(HTMLbioPic, bio.biopic));
    
    //Adding contact Info
    $('#topContacts, #footerContacts').append(replaceData(HTMLmobile, bio.contacts.mobile));
    $('#topContacts, #footerContacts').append(replaceData(HTMLemail, bio.contacts.email));
    $('#topContacts, #footerContacts').append(replaceData(HTMLgithub, bio.contacts.github));
    $('#topContacts, #footerContacts').append(replaceData(HTMLtwitter, bio.contacts.twitter));
    $('#topContacts, #footerContacts').append(replaceData(HTMLlocation, bio.contacts.location));

    $('#header').append(replaceData(HTMLwelcomeMsg, bio.welcomeMessage));

    //Adding skills using for-of loop
    $('#header').append(HTMLskillsStart);
    for(var skill of bio.skills) {
      $('#skills').append(replaceData(HTMLskills, skill));
    }
  }
};
bio.display();

//----------------------------------The work object-----------------------------------
var work = {
  "jobs": [
    {
      "employer": "Calsoft Inc",
      "title": "Data Analyst",
      "location": "Bengaluru, India",
      "dates": "2018-Future",
      "description": 
        "Worked with hadoop and Data visualization tools"
    },
    {
      "employer": "Vandervort - Zieme LLC",
      "title": "Software Tester",
      "location": "Bengaluru, India",
      "dates": "2015-2018",
      "description": 
        "Worked with testing libraries and unit testing frameworks"
    }
  ],
  "display": function () {
    for(var job of work.jobs) {
      //console.log(job);
      var workDiv = $(HTMLworkStart);
      workDiv.append(replaceData(HTMLworkEmployer, job.employer) + replaceData(HTMLworkTitle, job.title));
      workDiv.append(replaceData(HTMLworkDates, job.dates));
      workDiv.append(replaceData(HTMLworkLocation, job.location));
      workDiv.append(replaceData(HTMLworkDescription, job.description));
      // console.log(workDiv);
      $('#workExperience').append(workDiv);
    }
  }
}
work.display();

//----------------------------------The education object-----------------------------------
var education = {
  "schools": [
    {
      "name": "Holy Angels School",
      "location": "Punjab, India",
      "degree": "12th grade",
      "dates": "2012",
      "majors": ["Math", "Science", "English"]
    },
    {
      "name": "Chitkara University",
      "location": "Punjab, India",
      "degree": "B.E.",
      "dates": "2015",
      "majors": ["Computer Science", "English"]
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Development",
      "school": "Udacity",
      "dates": "2018",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ],
  "display": function() {
    var schools = education.schools;
    var courses = education.onlineCourses;
    for(var i = 0; i < schools.length; i++){
      var educationDiv = $(HTMLschoolStart);
      educationDiv.append(
        replaceData(HTMLschoolName, schools[i].name) + replaceData(HTMLschoolDegree, schools[i].degree)
      );
      educationDiv.append(replaceData(HTMLschoolDates ,schools[i].dates));
      educationDiv.append(replaceData(HTMLschoolLocation, schools[i].location));
      var majorsString = "";
      for(var j = 0; j < schools[i].majors.length; j++) {
        majorsString += schools[i].majors[j] + ', ';
      }
      majorsString = majorsString.slice(0, majorsString.length - 2);
      // console.log(majorsString);
      educationDiv.append(replaceData(HTMLschoolMajor, majorsString));
      $('#education').append(educationDiv);
    }

    $('#education').append(HTMLonlineClasses);
    for(var i = 0; i < courses.length; i++) {
      var courseDiv = $(HTMLschoolStart);
      courseDiv.append(
        replaceData(HTMLonlineTitle, courses[i].title) + replaceData(HTMLonlineSchool, courses[i].school)
      );
      courseDiv.append(replaceData(HTMLonlineDates, courses[i].dates));
      courseDiv.append(replaceData(HTMLonlineURL, courses[i].url));
      $('#education').append(courseDiv);
    }
  }
};
education.display()


//----------------------------------The projects object-----------------------------------
var projects = {
 "projects": [
    {
      "title": "Invoice Management Software",
      "dates": "2016",
      "images": ["images/winch.png"],
      "description": 
        "Invoice Generator software (Winch) developed in Java. Helps user to generate and save invoices."
    },
    {
      "title": "Responsive Potfolio",
      "dates": "2018",
      "images": ["images/portfolio_1.jpg"],
      "description": 
        "A responsive portfolio that looks great on every device."
    }
  ],
  "display": function () {
    var array = projects.projects;
    for(var i = 0; i < array.length; i++) {
      var projDiv = $(HTMLprojectStart);
      projDiv.append(replaceData(HTMLprojectTitle, array[i].title));
      projDiv.append(replaceData(HTMLprojectDates, array[i].dates));
      projDiv.append(replaceData(HTMLprojectDescription, array[i].description));
      var images = array[i].images;
      for(var j = 0; j < images.length; j++) {
        var imageNode = $(replaceData(HTMLprojectImage, images[j]));
        imageNode.addClass('image');
        projDiv.append(imageNode);
      }
      $('#projects').append(projDiv);
    }
  }
}
projects.display();