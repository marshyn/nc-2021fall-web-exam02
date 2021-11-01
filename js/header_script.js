//  header_script.js -- sets up header CSS and writes it to the HTML document/file

function() {
  headerEl = document.getElementById('header');         // gets the ID for the header section


  function Header = (button, text, color) = { 
    this.button =  button;
    this.text =  text;
    this.color =  color;
    this.link = link;
    };     // end of page variable object


  // grabbing all the elements by ID that are in the header
  aboutHeaderEl = document.getElementById('aboutHeader');
  worksHeaderEl = document.getElementById('worksHeader');
  contactHeaderEl = document.getElementById('contactHeader');

  // each button in the header is a different color
  redHeaderEl = document.getElementById('redHeader');
  yellowHeaderEl = document.getElementById('yellowHeader');
  blueHeaderEl = document.getElementById('blueHeader');


  linkHeaderEl = document.getElementById('headerLink');

  // declare all the variables for all the buttons
  var aboutHeader, worksHeader, contactHeader
};


function headerResponse() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
