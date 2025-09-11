
// Image Slider for Header
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Auto-advance slides every 5 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);

// Gallery Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value
        const filter = button.getAttribute('data-filter');
        
        // Show/hide gallery items based on filter
        galleryItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Appointment Form Submission
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const eventType = document.getElementById('eventType').value;
        const guests = document.getElementById('guests').value;
        const date = document.getElementById('date').value;
        const message = document.getElementById('message').value;
        
        // Create WhatsApp message
        const whatsappMessage = `New Booking Inquiry:%0A%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AEvent Type: ${eventType}%0ANumber of Guests: ${guests}%0APreferred Date: ${date}%0AEvent Description: ${message}`;
        
        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/2347049665746?text=${whatsappMessage}`;
        
        // Open WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Reset form
        bookingForm.reset();
        
        // Show confirmation message
        alert('Thank you for your booking inquiry! We have opened WhatsApp for you to send us your details. We will contact you shortly.');
    });
}

// Video Controls
const videos = document.querySelectorAll('video');

videos.forEach(video => {
    // Add play/pause button functionality
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

// Video Expansion Functions
function expandVideo(button) {
    const videoItem = button.closest('.video-item');
    const video = videoItem.querySelector('video');
    const videoSrc = video.querySelector('source').src;
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    
    // Set the video source
    modalVideo.src = videoSrc;
    
    // Show the modal
    modal.style.display = 'block';
    
    // Play the video
    modalVideo.play();
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    
    // Hide the modal
    modal.style.display = 'none';
    
    // Pause the video
    modalVideo.pause();
    modalVideo.src = '';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the video
document.addEventListener('click', function(event) {
    const modal = document.getElementById('videoModal');
    const modalContent = document.querySelector('.video-modal-content');
    
    if (event.target === modal) {
        closeVideo();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeVideo();
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize image slider
    showSlide(0);
    
    // Initialize gallery filter
    if (document.querySelector('.gallery-filters')) {
        galleryItems.forEach(item => {
            item.style.display = 'block';
        });
    }
});