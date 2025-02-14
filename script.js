document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const hamburgerMenu = document.getElementById('hamburger-menu');
  hamburgerBtn.addEventListener('click', () => {
    const isVisible = hamburgerMenu.style.display === 'block';
    hamburgerMenu.style.display = isVisible ? 'none' : 'block';
  });

  const darkModeBtn = document.getElementById('darkModeBtn');
  const darkModeIcon = document.getElementById('darkModeIcon');
  darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      darkModeIcon.innerText = '☀️'; 
    } else {
      darkModeIcon.innerText = '🌙';
    }
  });


  const counter = document.getElementById('visitor-count');
  counter.innerText = Math.floor(Math.random() * 1000);


  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });


  $('.initiatives-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true 
  });


  const feedbackBtn = document.getElementById("feedbackBtn");
  const feedbackForm = document.getElementById("feedbackForm");
  feedbackBtn.addEventListener("click", () => {
    feedbackForm.style.display = feedbackForm.style.display === "block" ? "none" : "block";
  });


  const emojis = document.querySelectorAll(".emoji");
  emojis.forEach(emoji => {
    emoji.addEventListener("click", () => {
      emojis.forEach(e => e.classList.remove('selected'));
      emoji.classList.add('selected');
      document.getElementById("feedbackText").style.height = `${emoji.clientHeight}px`;
    });
  });

  document.getElementById("closeFeedbackForm").addEventListener("click", () => {
    feedbackForm.style.display = "none";
  });


  document.getElementById("submitFeedback").addEventListener("click", () => {
    const selectedRating = document.querySelector(".emoji.selected");
    if (!selectedRating) {
      alert("Please select a rating!");
      return;
    }
    feedbackForm.style.display = "none";
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 1000); 
  });
});

$(document).ready(function() {
  $('.emoji').click(function() {
    $('.emoji').removeClass('selected');
    $(this).addClass('selected');
    $('#feedbackText').css('height', $(this).height());
  });
  $('#closeFeedbackForm').click(function() {
    $('#feedbackForm').hide();
  });
});