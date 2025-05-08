const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    let currentIndex = 0;

    function showSlide(index) {
        // Adjust the position of the entire slider using translateX
        const offset = -index * 100; // Calculate the offset for the slider container
        slider.style.transform = `translateX(${offset}%)`; // Move the entire slider container to show the correct slide

        // Update the active class for slides
        slides.forEach((slide, i) => {
            slide.classList.remove('active'); // Remove active from all slides
            if (i === index) {
                slide.classList.add('active'); // Add active class to the current slide
            }
        });

        // Update the active dot
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index); // Only the current dot should have the "active" class
        });
        currentIndex = index;
        updateArrows(index); // Update arrows visibility based on the index
    }

    // Function to update arrows visibility
    function updateArrows(index) {
        
        leftArrow.style.display = index === 0 ? 'none' : 'block'; // Hide left arrow on first slide
        rightArrow.style.display = index === slides.length - 1 ? 'none' : 'block'; // Hide right arrow on last slide
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Cycle through the slides
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Cycle through the slides in reverse
        showSlide(currentIndex);
    }

    function goToSlide(index) {
        showSlide(index); // Jump to the specified slide
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 3000); // Automatically slide every 3 seconds
    }
    function stopAutoSlide() {
      clearInterval(slideInterval); // Stop auto sliding when hovered
}

startAutoSlide();

  // Pause auto slide on hover
document.querySelector('.slider-container').addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.slider-container').addEventListener('mouseleave', startAutoSlide);
