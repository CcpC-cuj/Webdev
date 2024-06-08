// by: George Olaru https://dribbble.com/shots/1560982-Rosa-Restaurant-Website/attachments/239212

$(document).ready(function() {
  
    $('button').on('click', function() {
      if($(this).hasClass('nav-button')) {
        $('nav div').addClass('show');
      } else if($(this).hasClass('exit-menu')) {
        $('nav div').removeClass('show');
      } 
      else if($(this).hasClass('to-top')) {
        $('html,body').animate({scrollTop:0}, 'slow');
      }
    });
  
    AOS.init({
          duration: 1800,
      easing: 'ease'
    });
     
  })
  
 //function for responsive navigation
 function toggleNav() {
  var nav = document.getElementById("myNav");
  var bars = document.getElementById('container');
  
  // Toggle navigation visibility
  if (nav.style.display === "block") {
      nav.style.display = "none";
      bars.classList.remove("change");
  } else {
      nav.style.display = "block";
      bars.classList.add("change");
  }
}

// Reset navigation when a link is clicked
document.addEventListener('click', function(event) {
  var nav = document.getElementById("myNav");
  var bars = document.getElementById('container');

  // Check if the clicked element is a link within the navigation
  if (event.target.tagName.toLowerCase() === 'a' && nav.contains(event.target)) {
      nav.style.display = "none";
      bars.classList.remove("change");
  }
});