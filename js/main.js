//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

// Place all your Javascript code inside this "document ready" function so
// it does not run until the DOM is ready for Javascript manipulation.

$( document ).ready(function() {
  'use strict';
    var user = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
  
     //TODO: Create a function to listen for clicks on the "login" button.
     // $ ('.user-button').on('click', function(event) {
     //   console.log(event);
     //   var userInfo = $ ('.user-info');
     //   var loginForm = $ ('#login-form');
     // //      1. When a user clicks the "login" button, hide the login
     // //      form elements on the page.
     //   if ($(userInfo).is(':visible')) {
     //       $ (userInfo).fadeOut();
     //       $ (loginForm).show();
     //   } else {
     //     $ (loginForm).fadeIn();
     //     $ (userInfo).hide();
     //   }
     // });
    
      $ ('.login-button').on('click', function(event) {                //    hides login on click
         console.log(event);
         var userInfo = $ ('.user-info');
         var loginForm = $ ('#login-form');
       //      1. When a user clicks the "login" button, hide the login
       //      form elements on the page.
         if ($(loginForm).is(':visible')) {
       //      2. Fill the user's first and last name into `div.user-info`.
       //      (NOTE: You do not have to perform any validation on the data as
       //      a base requirement.)
             $ ('.user-fullname').html(" " + user.lastName + " " + user.firstName);
             $ (loginForm).fadeOut(100);
             $ (userInfo).show();
         } 
       });
  
     $ ('.logout-button').on('click', function(event) {                 //    hides logout on click
       console.log(event);
       var userInfo = $ ('.user-info');
       var loginForm = $ ('#login-form');
   
       if ($(userInfo).is(':visible')) {
           $ (userInfo).fadeOut(100);
           $ (loginForm).show();
       } 
     });
    
    //      2. Fill the user's first and last name into `div.user-info`.
    //      (NOTE: You do not have to perform any validation on the data as
    //          a base requirement.)
    

    // TODO: Create a function to listen for clicks on all the "View Details"
    // buttons so that when a user clicks a "View Details" button they see
    // the content contained in the elements with the class "details" in the
    // proper part of the screen.
    
                                                                  //    1. When user clicks a "view details" button, 
                                                                  //    find the parent of that element.
    $ ('.view-details').on('click' , function(event) {
      console.log(event);
      var targetElement = event.target;
      var container = targetElement.parentElement.parentElement;  //    TODO use multiplier 
                                                                  //    2. Within that parent, find all the elements that 
                                                                  //    have the class `details`.
      $ (container).find('.details').each( function(index, el) {
                                                                  //    3. Toggle visibility of all the elements within that 
                                                                  //    parent with the class `details`.
          if ($(el).is(':visible')) {
            $(el).fadeOut();
            targetElement.innerHTML = "View Details"
                                                                  //     4. Change the text of the "view details" button 
                                                                  //     to read "hide details" so the user
                                                                  //     understands they can hide the text again.
          } else {
            $(el).fadeIn();
            targetElement.innerHTML = "Hide Details"
          }
      });
     });

    // TODO: Create a function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.
    //      1. Set up an event listener on the buttons with the `vote` class.
    $ ('.vote').on('click' , function(event) {
        console.log(event);
        var greatButton = $(['data-vote="great"'])
        var greatest = $(['data-vote="greatest"'])
     //      2. When a button is clicked, look at the `data-vote` attribute to determine
     //      what the user is voting for ("great" or "greatest").
        var totalVotes = $ ('.vote').on('click', function(event) {
          voteCounts.total + 1;
          console.log(voteCounts.total + 1);
        });
      });
                                        
       // if ($ (greatButton).click()) {
       // //      3. Increment the counter for whichever vote talley is affected.
       //   (voteCounts.great + 1)/100;
       // } else if ($ (greatestButton).click()) {
       // //      3. Increment the counter for whichever vote talley is affected.
       //  (voteCounts.greatest + 1)/100;
       // }
  
    //      5. Modify the `width` attribute on each progress bar to set the updated percentage.

});
