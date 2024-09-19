//Navbar hover
let menuIcon = document.querySelector('#menu-icon');
let navbars = document.querySelector('.navbars');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbars.classList.toggle('active');
}


//Nav bar toggle
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector('nav a[href="#' + id + '"]').classList.add('active');
    }
  });
}

//alert that the message is sent
function sendMessage() {
    var emailInput = document.getElementById("email");
    var subjectInput = document.getElementById("subject");
    var messageInput = document.getElementById("message");

    var email = emailInput.value;
    var subject = subjectInput.value;
    var message = messageInput.value;

    // Check if required fields are filled
    if (email && subject && message) {
      // Here you would send the email using a service like EmailJS or your own server-side code
      // For demonstration purposes, let's assume the email is sent successfully
      // You can replace this with your actual email sending code

      // Assuming email is sent successfully
      setTimeout(function() {
        alert("Message sent!");
        // Clear input fields and textarea after sending
        emailInput.value = "";
        subjectInput.value = "";
        messageInput.value = "";
      }, 1000); // Delay for 1 second to mimic email sending

    } else {
      alert("Please fill all required fields.");
    }
  }

  document.getElementById('clickable-image').addEventListener('click', function() {
    window.location.href = 'https://www.canva.com/design/DAGQRfbAAYs/7RCK_EEicracR-YMNmXtQQ/edit?utm_content=DAGQRfbAAYs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton';
  });