//  content-write.js -- sets up pages and writes the content to the HTML document/file

// page template JS 
  function Page (header, content, footer) = {
    this.header = header;
    this.content = content;
    this.footer = footer;
    };     // end of page object


  // backend stuff of making page objects
  var about, contact, visdev, index, resume, socialmedia;    // declare variables for all the pages

  // making pages from the template and giving them properties/attributes
  var aboutPage = new Page('about', , 'footer');


  // actually interacting with the HTML

  // grabbing all the elements from HTML that need to changed per page
  pageNameEl = document.getElementById('pageName');
  pageHeaderEl = document.getElementById('pageHeader');
  pageContentEl = document.getElementById('pageContent');
  buttonTextEl = document.getElementById('buttonContent');     // text that is on button (i.e. "submit" on submit button)


  // writing page objects to the HTML
  about.textContent = page.name;




// below: reference code
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




  specialRate.textContent = '$' + hotel.offerPrice();     // Write offer price to HTML 
                             // offerPrice is a function, needs the ()

  var expiryMsg; // Message displayed to users
  var today;     // Today's date
  var elEnds;    // The element that shows the message about the offer ending

  function offerExpires(today) {
    // Declare variables within the function for local scope
    var weekFromToday, day, date, month, year, dayNames, monthNames;


    weekFromToday =  new Date(today.getTime() + (1000 * 60 * 60 * 24 * 7));   // Calculate 7 days time (added in milliseconds) when the offer expires
                    // 1000 * 60 * 60 * 24 * 7 = 604800000

  /*******************************COMPLETE *****************************/
    // Create arrays to hold the names of days / months
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Collect the parts of the date to show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];

  /*******************************COMPLETE *****************************/

    year = weekFromToday.getFullYear(); //get the year using JS function 

    // Create the message
    expiryMsg = 'Offer expires next ';
    expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
  }

/*******************************COMPLETE *****************************/
  today = new Date();                  ;       // Put today's date in variable
  elEnds = document.getElementById('offerEnds');  // Get the offerEnds element
  elEnds.innerHTML = offerExpires(today);         // Print the offerExpires details 


