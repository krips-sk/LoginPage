// import * as $ from 'jquery'

function submitfunc() {
    var fullname = document.getElementById('Fullname').value;
    var email = document.getElementById('Email').value;
    if( fullname!="" && email!="" ){
      alert('Login Sucessfully');
    }
    else if( fullname!="" && ( email=="" || email==undefined ) ){
      document.getElementById('Email').className="card_Error";
    }
    else if( (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) && ( fullname=="" || fullname==undefined ) ){   
      document.getElementById('Fullname').className="card_Error";
    }
    else {
      document.getElementById('Email').className="card_Error";
      document.getElementById('Fullname').className="card_Error";
    }        
  }

  function changeBorder() {
    document.getElementById("Fullname").className = "card_input";
    document.getElementById("Email").className = "card_input";
  }

  function bookAnOppointment() {
    alert('Please Login to Book an appointment')
  }

  // Resize reCAPTCHA to fit width of container
// Since it has a fixed width, we're scaling
// using CSS3 transforms
// ------------------------------------------
// captchaScale = containerWidth / elementWidth

// function scaleCaptcha(elementWidth) {
//   // Width of the reCAPTCHA element, in pixels
//   var reCaptchaWidth = 304;
//   // Get the containing element's width
// 	var containerWidth = $('.captchamargin').width();
  
//   // Only scale the reCAPTCHA if it won't fit
//   // inside the container
//   if(reCaptchaWidth > containerWidth) {
//     // Calculate the scale
//     var captchaScale = containerWidth / reCaptchaWidth;
//     // Apply the transformation
//     $('.g-recaptcha').css({
//       'transform':'scale('+captchaScale+')'
//     });
//   }
// }

// $(function() { 
 
//   // Initialize scaling
//   scaleCaptcha();
  
//   // Update scaling on window resize
//   // Uses jQuery throttle plugin to limit strain on the browser
//   $(window).resize( $.throttle( 100, scaleCaptcha ) );
  
// });

// var width = $('.g-recaptcha').parent().width();
// if (width < 302) {
// 	var scale = width / 302;
// 	$('.g-recaptcha').css('transform', 'scale(' + scale + ')');
// 	$('.g-recaptcha').css('-webkit-transform', 'scale(' + scale + ')');
// 	$('.g-recaptcha').css('transform-origin', '0 0');
// 	$('.g-recaptcha').css('-webkit-transform-origin', '0 0');
// }


$(window).resize(function() {
  var recaptcha = $(".g-recaptcha");
  if(recaptcha.css('margin') == '1px') {
      var newScaleFactor = recaptcha.parent().innerWidth() / 304;
      recaptcha.css('transform', 'scale(' + newScaleFactor + ')');
      recaptcha.css('transform-origin', '0 0');
  }
  else {
      recaptcha.css('transform', 'scale(1)');
      recaptcha.css('transform-origin', '0 0');
  }
});