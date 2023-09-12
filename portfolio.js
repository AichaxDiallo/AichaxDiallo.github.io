document.addEventListener('DOMContentLoaded', () => {
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');
  let header = document.querySelector('header'); // Declare the header variable

  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  });

  window.addEventListener('scroll', () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
        });

        let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });

    header.classList.toggle('sticky', window.scrollY > 100);
  });

  ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

  const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer!', 'Web Developer', 'Software Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
});

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // Set your desired port

app.use(bodyParser.urlencoded({ extended: true }));


const transporter = nodemailer.createTransport({
    service: 'your_email_service',
    auth: {
        user: 'your_email@example.com',
        pass: 'your_email_password',
    },
});


app.post('/submit-contact', (req, res) => {
    const formData = req.body;

    
    const mailOptions = {
        from: 'your_email@example.com',
        to: 'recipient@example.com', // Set the recipient's email address
        subject: formData.emailSubject || 'Contact Form Submission',
        text: `From: ${formData.fullName}\nEmail: ${formData.emailAddress}\nMobile Number: ${formData.mobileNumber}\nMessage: ${formData.message}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Message sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
