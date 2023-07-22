// -------show more----and ----show----less----start---here -------
document.getElementById("show-more-btn").addEventListener("click", function() {
    var serviceBoxes = document.querySelectorAll(".our-services-items .box");
    for (var i = 0; i < serviceBoxes.length; i++) {
      serviceBoxes[i].style.display = "block";
    }
    this.style.display = "none"; // Hide the "Show More" button
    document.getElementById("show-less-btn").style.display = "inline-block"; // Show the "Show Less" button
  });
  
  document.getElementById("show-less-btn").addEventListener("click", function() {
    var serviceBoxes = document.querySelectorAll(".our-services-items .box");
    for (var i = 8; i < serviceBoxes.length; i++) {
      serviceBoxes[i].style.display = "none";
    }
    this.style.display = "none"; // Hide the "Show Less" button
    document.getElementById("show-more-btn").style.display = "inline-block"; // Show the "Show More" button
  });
// -------show more----and ----show----less----end---here -------

  



// ------typewriter effect-----start----here----------

document.addEventListener("DOMContentLoaded", function() {
  var h1Element = document.querySelector(".head-line h1");
  var text = h1Element.textContent;
  h1Element.textContent = "";

  function typeWriter(text, i) {
    if (i < text.length) {
      h1Element.textContent += text.charAt(i);
      i++;
      setTimeout(function() {
        typeWriter(text, i);
      }, 40); // Adjust typing speed here (in milliseconds)
    } else {
      setTimeout(function() {
        h1Element.textContent = ""; // Clear the text
        typeWriter(text, 0); // Restart typing
      }, 7000); // Delay for 10 seconds (in milliseconds)
    }
  }

  typeWriter(text, 0);

  // Hide the cursor during typing animation
  var styleElement = document.createElement("style");
  styleElement.innerHTML = ".head-line h1::after { content: ''; }";
  document.head.appendChild(styleElement);
});
// ------typewriter iffect-----end----here----------






// <!-- -------"page-heading"---for p tag-------start----here- -->
// -----it's working --------------------

// document.addEventListener("DOMContentLoaded", function() {
//   var pElement = document.querySelector(".page-heading p");
//   var text = pElement.textContent;
//   pElement.textContent = "";

//   function typeWriter(text, i) {
//     if (i < text.length) {
//       pElement.textContent += text.charAt(i);
//       i++;
//       setTimeout(function() {
//         typeWriter(text, i);
//       }, 40); // Adjust typing speed here (in milliseconds)
//     } else {
//       setTimeout(function() {
//         pElement.textContent = ""; // Clear the text
//         typeWriter(text, 0); // Restart typing
//       }, 7000); // Delay for 10 seconds (in milliseconds)
//     }
//   }

//   typeWriter(text, 0);
// });

// <!-- -------"page-heading"---for p tag-------end----here- -->




// ---------New Navbar Script---------------------Start-------------here------------------------

// $(document).ready(function() {
//   $('.navbar-toggler').on('click', function() {
//     $(this).toggleClass('open');
//   });
// });


// window.onload = function() {
// const chatMessages = document.getElementById('chat-messages');
// const messageInput = document.getElementById('message-input');
// const sendButton = document.getElementById('send-button');

// sendButton.addEventListener('click', function() {
// const message = messageInput.value;
// if (message.trim() !== '') {
//   sendMessage(message);
//   messageInput.value = '';
// }
// });
// }

// ---------New Navbar Script---------------------End-------------here------------------------