// Hamburger menu toggle: When the hamburger icon is clicked, show or hide the dropdown menu
document.getElementById('hamburger').addEventListener('click', () => {
    const dropdown = document.querySelector('.dropdown'); // Select the dropdown element
    dropdown.classList.toggle('show'); // Toggle the 'show' class to display/hide the dropdown
  });
  
  // Carousel functionality
  const slides = document.querySelectorAll('.carousel-slide'); // Select all carousel slides
  const nextBtn = document.getElementById('nextBtn'); // Select the next button
  const dots = document.querySelectorAll('.dots img'); // Select all dot elements for navigation
  const messages = document.querySelectorAll('.message'); // Select all message elements
  let currentIndex = 0; // Set the initial slide index
  
  // Function to update the carousel (slides, dots, and messages)
  function updateCarousel(index) {
    // Hide all slides, dots, and messages
    slides.forEach(slide => slide.classList.remove('active')); // Remove 'active' from all slides
    dots.forEach(dot => dot.classList.remove('active-dot')); // Remove 'active-dot' from all dots
    messages.forEach(msg => msg.classList.remove('active')); // Remove 'active' from all messages
  
    // Show the selected slide, dot, and message
    slides[index].classList.add('active'); // Add 'active' to the selected slide
    dots[index].classList.add('active-dot'); // Add 'active-dot' to the selected dot
    messages[index].classList.add('active'); // Add 'active' to the selected message
  }
  
  // Next button functionality: Go to the next slide when the next button is clicked
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length; // Increment the index and loop back to 0 when it reaches the end
    updateCarousel(currentIndex); // Update the carousel with the new index
  });
  
  // Dot click functionality: Go to the corresponding slide when a dot is clicked
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index; // Set the current index to the clicked dot's index
      updateCarousel(index); // Update the carousel with the new index
    });
  });
  
  // Styling the dots: Adjust the brightness of each dot based on its index
  dots.forEach((dot, index) => {
    const brightness = 0.8 + (index * 0.2); // Increase the brightness for each subsequent dot
    dot.style.filter = `brightness(${brightness})`; // Apply the brightness filter to each dot
  });
  
  // Set the initial state of the carousel
  updateCarousel(currentIndex);
  
  // Logo growth effect on scroll: Make the logo larger when scrolling to the top
  const logo = document.querySelector('header img'); // Select the logo image
  
  window.addEventListener('scroll', () => {
    if (window.scrollY === 0) { // If the page is at the top
      logo.classList.add('large'); // Add the 'large' class to make the logo bigger
    } else {
      logo.classList.remove('large'); // Remove the 'large' class when scrolling down
    }
  });
  
  // Slide in the current message when the page is loaded
  window.addEventListener('load', () => {
    if (messages[currentIndex]) {
      messages[currentIndex].classList.add('active'); // Make the initial message visible on load
    }
  });
  