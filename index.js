//Contact me overlay Open
window.$('.contact-opener').click(function() {
  "use strict";
  window.$('.darker-background').fadeIn();
  window.$('#contact-me').show();
  window.$('#contact-me').animate({
    top: "100"
  });
});

//Contact me overlay Close
window.$('.darker-background').click(function() {
  "use strict";
  window.$('.darker-background').hide();
  window.$('#contact-me').hide();
  window.$('#contact-me').css("top", "-310px");
});

//Contact me hovering button
window.addEventListener('scroll', function() {
  var y = window.scrollY;
  if (y > 200) {
    document.getElementById('message-me').style.visibility = "visible";
    document.getElementById('message-me').style.opacity = "1";
  }
  else{
    document.getElementById('message-me').style.visibility = "hidden";
    document.getElementById('message-me').style.opacity = "0";
  }
});


//Toggles the light and dark background for elements
let darkModeToggle = document.querySelector("light-dark-switch");
