// Main Display Photos (5 photos for front page)
// ADD YOUR 5 PHOTOS HERE FOR THE MAIN DISPLAY
const mainDisplayPhotos = [
    "images/image21.jpeg",
    "images/image22.jpeg",
    "images/image23.jpeg",
    "images/image24.jpeg",
    "images/image25.jpeg"
];

// Gallery Photos (12 photos for gallery modal)
// ADD YOUR 12 PHOTOS AND CAPTIONS HERE FOR THE GALLERY
const galleryPhotos = [
    { src: "images/image1.png", caption: "Our first beautiful moment together 💖" },
    { src: "images/image2.png", caption: "Every day with you is a blessing 🌟" },
    { src: "images/image3.png", caption: "You make my world complete 🫶" },
    { src: "images/image4.png", caption: "Forever grateful for you 💕" },
    { src: "images/image5.png", caption: "My heart belongs to you ❤️" },
    { src: "images/image6.png", caption: "Together we create magic ✨" },
    { src: "images/image7.png", caption: "You are my sunshine ☀️" },
    { src: "images/image8.png", caption: "Every memory is precious 💝" },
    { src: "images/image9.png", caption: "Love you more than words 💌" },
    { src: "images/image10.png", caption: "My forever and always 🌹" },
    { src: "images/image11.png", caption: "You light up my world 🌟" },
    { src: "images/image12.png", caption: "Forever grateful for us 💖" },
    { src: "images/image13.png", caption: "Moments that made us us 💕" },
    { src: "images/image14.png", caption: "With you is my favorite place 🥰" },
    { src: "images/image15.png", caption: "Forever and always, my love ✨" },
    { src: "images/image16.png", caption: "You are my happiest thought 💕" },
    { src: "images/image17.png", caption: "My heart found a home in you 💖" },
    { src: "images/image18.png", caption: "Every moment with you is magic 🌟" },
    { src: "images/image19.png", caption: "You make me smile in my sleep 😊" },
    { src: "images/image20.png", caption: "My love for you knows no bounds 💕" }
];

// Main photo display (5 photos for front)
const images = mainDisplayPhotos;

// Song URL - ADD YOUR SONG LINK HERE (Spotify, YouTube, etc.)
const songURL = "https://open.spotify.com/track/5spvSwBVAMvvNseq7SnrDa?si=nYd-h8UeSUSGsPynsQ0FYw&pi=gEiYNt0OT0ih8"; // Replace with your song link

let currentPhotoIndex = 0;
let currentGalleryIndex = 0;

// Change Photo Function - Make it global
function changePhoto(direction) {
    const mainPhoto = document.getElementById("mainPhoto");
    const photoNumber = document.getElementById("photoNumber");
    
    if (!mainPhoto || !photoNumber) return;
    
    currentPhotoIndex += direction;
    
    if (currentPhotoIndex < 0) {
        currentPhotoIndex = images.length - 1;
    } else if (currentPhotoIndex >= images.length) {
        currentPhotoIndex = 0;
    }
    
    // Fade out
    mainPhoto.style.opacity = '0';
    mainPhoto.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        mainPhoto.src = images[currentPhotoIndex];
        photoNumber.textContent = currentPhotoIndex + 1;
        
        // Fade in
        mainPhoto.style.opacity = '1';
        mainPhoto.style.transform = 'scale(1)';
    }, 300);
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    const totalPhotos = document.getElementById("totalPhotos");
    
    // Initialize total photos count (5 for main display)
    if (totalPhotos) {
        totalPhotos.textContent = mainDisplayPhotos.length;
    }
    
    // Auto-advance photos
    setInterval(() => {
        changePhoto(1);
    }, 4000);
});

// Floating Hearts Animation
function createHeart() {
    const heartsContainer = document.querySelector('.hearts-container');
    if (!heartsContainer) return;
    
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
    
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 20000);
}

// Create hearts continuously
setInterval(createHeart, 800);

// Sparkles Animation
function createSparkle() {
    const sparklesContainer = document.querySelector('.sparkles-container');
    if (!sparklesContainer) return;
    
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animationDelay = Math.random() * 3 + 's';
    sparkle.style.animationDuration = (Math.random() * 2 + 2) + 's';
    
    sparklesContainer.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 5000);
}

// Create sparkles continuously
setInterval(createSparkle, 200);

// Rotating Messages with Fixed Alignment
let currentMessageIndex = 0;

function showNextMessage() {
    const messages = document.querySelectorAll('.message-card');
    if (messages.length === 0) return;
    
    // Remove active from current message
    messages[currentMessageIndex].classList.remove('active');
    const currentDots = messages[currentMessageIndex].querySelectorAll('.dot');
    currentDots.forEach(dot => dot.classList.remove('active'));
    
    // Move to next message
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    
    // Add active to new message
    messages[currentMessageIndex].classList.add('active');
    const newDots = messages[currentMessageIndex].querySelectorAll('.dot');
    if (newDots.length > 0) {
        // Activate the dot at position (currentMessageIndex % 4) or just the first one
        const activeDotIndex = currentMessageIndex % newDots.length;
        newDots[activeDotIndex].classList.add('active');
    }
    
    // Create subtle heart animation on message change
    createHeart();
}

setInterval(showNextMessage, 5000);

// Pickup Lines Rotation
let currentPickupIndex = 0;

function showNextPickupLine() {
    const pickupCards = document.querySelectorAll('.pickup-line-card');
    const pickupDots = document.querySelectorAll('.pickup-dot');
    
    if (pickupCards.length === 0) return;
    
    pickupCards[currentPickupIndex].classList.remove('active');
    pickupDots[currentPickupIndex].classList.remove('active');
    
    currentPickupIndex = (currentPickupIndex + 1) % pickupCards.length;
    
    pickupCards[currentPickupIndex].classList.add('active');
    pickupDots[currentPickupIndex].classList.add('active');
}

// Start pickup lines rotation
setInterval(showNextPickupLine, 4000);

// Make pickup dots clickable
document.addEventListener('DOMContentLoaded', function() {
    const pickupDots = document.querySelectorAll('.pickup-dot');
    pickupDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            const pickupCards = document.querySelectorAll('.pickup-line-card');
            const allDots = document.querySelectorAll('.pickup-dot');
            
            pickupCards[currentPickupIndex].classList.remove('active');
            allDots[currentPickupIndex].classList.remove('active');
            
            currentPickupIndex = index;
            
            pickupCards[currentPickupIndex].classList.add('active');
            allDots[currentPickupIndex].classList.add('active');
        });
    });
});

// Open Gallery Function - Make it global
function openGallery() {
    try {
        const modal = document.getElementById('galleryModal');
        const grid = document.getElementById('galleryGrid');
        
        if (!modal || !grid) {
            console.error('Gallery elements not found!');
            alert('Gallery is loading... Please try again!');
            return;
        }
        
        // Create gallery items
        grid.innerHTML = '';
        galleryPhotos.forEach((photo, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.onclick = () => openLightbox(index);
            
            const img = document.createElement('img');
            img.src = photo.src;
            img.alt = photo.caption;
            img.onerror = function() {
                this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23ff6b9d" width="300" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="white" font-size="20"%3EPhoto %3C/text%3E%3C/svg%3E';
            };
            
            const caption = document.createElement('div');
            caption.className = 'gallery-caption';
            caption.textContent = photo.caption;
            
            item.appendChild(img);
            item.appendChild(caption);
            grid.appendChild(item);
        });
        
        // Show modal with animation
        modal.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
        document.body.style.overflow = 'hidden';
        
        // Unexpected animation: burst confetti
        if (typeof burstConfetti === 'function') {
            burstConfetti();
            setTimeout(() => burstConfetti(), 300);
            setTimeout(() => burstConfetti(), 600);
        }
        
        // Add background image rotation
        if (typeof rotateBackgroundImages === 'function') {
            rotateBackgroundImages();
        }
    } catch (error) {
        console.error('Error opening gallery:', error);
        alert('Error opening gallery. Please check the console for details.');
    }
}

// Close Gallery Function - Make it global
function closeGallery() {
    try {
        const modal = document.getElementById('galleryModal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 500);
            document.body.style.overflow = 'auto';
        }
    } catch (error) {
        console.error('Error closing gallery:', error);
    }
}

// Open Lightbox - Make it global
function openLightbox(index) {
    currentGalleryIndex = index;
    const lightbox = document.getElementById('galleryLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    if (!lightbox || !lightboxImage || !lightboxCaption) return;
    
    lightboxImage.src = galleryPhotos[index].src;
    lightboxCaption.textContent = galleryPhotos[index].caption;
    
    lightbox.style.display = 'flex';
    setTimeout(() => {
        lightbox.classList.add('active');
    }, 10);
    document.body.style.overflow = 'hidden';
    
    // Unexpected animation: rotate image on load
    lightboxImage.style.animation = 'lightboxImageZoom 0.5s ease-out';
}

// Close Lightbox - Make it global
function closeLightbox() {
    const lightbox = document.getElementById('galleryLightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 300);
        document.body.style.overflow = 'auto';
    }
}

// Change Gallery Photo in Lightbox - Make it global
function changeGalleryPhoto(direction) {
    currentGalleryIndex += direction;
    
    if (currentGalleryIndex < 0) {
        currentGalleryIndex = galleryPhotos.length - 1;
    } else if (currentGalleryIndex >= galleryPhotos.length) {
        currentGalleryIndex = 0;
    }
    
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    if (!lightboxImage || !lightboxCaption) return;
    
    // Fade out
    lightboxImage.style.opacity = '0';
    lightboxImage.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        lightboxImage.src = galleryPhotos[currentGalleryIndex].src;
        lightboxCaption.textContent = galleryPhotos[currentGalleryIndex].caption;
        
        // Fade in with unexpected animation
        lightboxImage.style.opacity = '1';
        lightboxImage.style.transform = 'scale(1) rotate(' + (direction > 0 ? '5deg' : '-5deg') + ')';
        
        setTimeout(() => {
            lightboxImage.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
    }, 200);
}

// Background Images Rotation
function rotateBackgroundImages() {
    const bgImages = document.querySelector('.background-images');
    if (bgImages && galleryPhotos.length > 0) {
        let bgIndex = 0;
        setInterval(() => {
            bgIndex = (bgIndex + 1) % galleryPhotos.length;
            bgImages.style.backgroundImage = `url(${galleryPhotos[bgIndex].src})`;
            bgImages.style.opacity = '0.15';
        }, 5000);
    }
}

// Initialize background image
document.addEventListener('DOMContentLoaded', function() {
    if (galleryPhotos.length > 0) {
        const bgImages = document.querySelector('.background-images');
        if (bgImages) {
            bgImages.style.backgroundImage = `url(${galleryPhotos[0].src})`;
        }
    }
});

// Confetti Animation
let canvas, ctx;
let confetti = [];
const confettiCount = 150;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
    { front: '#ff6b9d', back: '#c44569' },
    { front: '#4ecdc4', back: '#44a08d' },
    { front: '#ffe66d', back: '#ffa07a' },
    { front: '#a8e6cf', back: '#88d8a3' },
    { front: '#ffd3a5', back: '#fd9853' }
];

// Confetti class
class Confetti {
    constructor() {
        this.randomModifier = Math.random() * 3;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.dimensions = {
            x: Math.random() * 10 + 5,
            y: Math.random() * 10 + 5
        };
        this.position = {
            x: Math.random() * (canvas ? canvas.width : window.innerWidth),
            y: Math.random() * (canvas ? canvas.height : window.innerHeight) - (canvas ? canvas.height : window.innerHeight)
        };
        this.rotation = Math.random() * Math.PI * 2;
        this.velocity = {
            x: Math.random() * 50 - 25,
            y: Math.random() * 50 + 50
        };
    }

    update() {
        this.rotation += this.randomModifier;
        this.velocity.x -= this.velocity.x * drag;
        this.velocity.y = Math.min(this.velocity.y + gravity, terminalVelocity);
        this.velocity.y -= this.velocity.y * drag;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.y >= (canvas ? canvas.height : window.innerHeight)) {
            this.position.y = canvas ? canvas.height : window.innerHeight;
            this.velocity.y *= -0.5;
        }
    }

    draw() {
        if (!ctx || !canvas) return;
        
        const width = (Math.sin(this.randomModifier + this.position.x * 0.01) + 1) * this.dimensions.x;
        const height = (Math.sin(this.randomModifier + this.position.x * 0.01) + 1) * this.dimensions.y;

        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.randomModifier > 1 ? this.color.back : this.color.front;
        ctx.fillRect(-width / 2, -height / 2, width, height);
        ctx.restore();
    }
}

// Initialize confetti canvas
document.addEventListener('DOMContentLoaded', function() {
    canvas = document.getElementById('confetti-canvas');
    if (canvas) {
        ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Initialize confetti
        for (let i = 0; i < confettiCount; i++) {
            confetti.push(new Confetti());
        }
        
        // Confetti animation loop
        function animateConfetti() {
            if (ctx && canvas) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                confetti.forEach((confetto) => {
                    confetto.update();
                    confetto.draw();
                });
                requestAnimationFrame(animateConfetti);
            }
        }
        
        // Start confetti animation
        animateConfetti();
        
        // Initial confetti burst on load
        setTimeout(() => {
            for (let i = 0; i < 100; i++) {
                confetti.push(new Confetti());
            }
        }, 500);
    }
});

// Burst confetti on click
function burstConfetti() {
    if (!canvas) return;
    for (let i = 0; i < 50; i++) {
        confetti.push(new Confetti());
    }
}

// Add click event for confetti burst (but not on gallery items)
document.addEventListener('click', (e) => {
    if (!e.target.closest('.gallery-item') && !e.target.closest('.gallery-modal') && !e.target.closest('.like-button')) {
        burstConfetti();
    }
});

// Resize handler
window.addEventListener('resize', () => {
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});

// Keyboard navigation for photos
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('galleryLightbox');
    const isLightboxActive = lightbox && lightbox.classList.contains('active');
    
    if (e.key === 'ArrowLeft') {
        if (isLightboxActive) {
            changeGalleryPhoto(-1);
        } else {
            changePhoto(-1);
        }
    } else if (e.key === 'ArrowRight') {
        if (isLightboxActive) {
            changeGalleryPhoto(1);
        } else {
            changePhoto(1);
        }
    } else if (e.key === 'Escape') {
        closeLightbox();
        closeGallery();
    }
});

// Touch swipe for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const lightbox = document.getElementById('galleryLightbox');
    const isLightboxActive = lightbox && lightbox.classList.contains('active');
    
    if (isLightboxActive) {
        if (touchEndX < touchStartX - 50) {
            changeGalleryPhoto(1);
        }
        if (touchEndX > touchStartX + 50) {
            changeGalleryPhoto(-1);
        }
    } else {
        if (touchEndX < touchStartX - 50) {
            changePhoto(1);
        }
        if (touchEndX > touchStartX + 50) {
            changePhoto(-1);
        }
    }
}

// Birthday Header Special Animations
function createBirthdayParticles() {
    const headerSection = document.querySelector('.header-section');
    if (!headerSection) return;
    
    const emojis = ['🎉', '🎊', '🎈', '🎁', '💝', '✨', '⭐', '💖', '💕', '🌟'];
    
    setInterval(() => {
        if (Math.random() > 0.6) {
            const particle = document.createElement('div');
            particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            particle.style.position = 'absolute';
            particle.style.fontSize = (Math.random() * 20 + 15) + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.animation = 'birthdayParticleFloat 3s ease-out forwards';
            particle.style.zIndex = '1000';
            
            headerSection.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 3000);
        }
    }, 2000);
}

// Add birthday particle animation to CSS
const birthdayStyle = document.createElement('style');
birthdayStyle.textContent = `
    @keyframes birthdayParticleFloat {
        0% {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-150px) rotate(360deg) scale(0.5);
        }
    }
    
    .letter {
        cursor: pointer;
    }
    
    .letter:active {
        transform: scale(1.5) rotate(15deg) !important;
    }
`;
document.head.appendChild(birthdayStyle);

// Initialize birthday particles
document.addEventListener('DOMContentLoaded', function() {
    createBirthdayParticles();
    
    // Add click effect to letters
    const letters = document.querySelectorAll('.letter');
    letters.forEach(letter => {
        letter.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'letterBounce 2s ease-in-out infinite';
            }, 10);
            
            // Create mini confetti on click
            for (let i = 0; i < 5; i++) {
                setTimeout(() => createHeart(), i * 50);
            }
        });
    });
    
    // Add hover effect to date
    const dateElement = document.querySelector('.birthday-date');
    if (dateElement) {
        dateElement.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.transition = 'all 0.3s ease';
        });
        dateElement.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }
});

// Unexpected animations: Random heart bursts
setInterval(() => {
    if (Math.random() > 0.7) {
        for (let i = 0; i < 10; i++) {
            createHeart();
        }
    }
}, 3000);

// Add photo shake animation to CSS via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes photoShake {
        0%, 100% { transform: translateX(0) rotate(0deg); }
        25% { transform: translateX(-5px) rotate(-2deg); }
        75% { transform: translateX(5px) rotate(2deg); }
    }
`;
document.head.appendChild(style);

// QR Code Generation
function generateQRCode() {
    const qrCodeDiv = document.getElementById('qrCode');
    if (!qrCodeDiv) return;
    
    // Use QRCode API to generate QR code
    if (songURL && songURL !== "https://open.spotify.com/track/YOUR_SONG_ID") {
        const qrSize = 200;
        const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(songURL)}`;
        
        const img = document.createElement('img');
        img.src = qrApiUrl;
        img.alt = 'QR Code for Song';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.borderRadius = '10px';
        img.style.objectFit = 'contain';
        
        qrCodeDiv.appendChild(img);
    } else {
        // Placeholder if no URL set
        qrCodeDiv.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #666; font-size: 0.9rem; text-align: center; padding: 10px;">Add your song URL in script.js</div>';
    }
}

// Play Song Function
function playSong() {
    if (songURL) {
        window.open(songURL, '_blank');
        // Unexpected animation: burst hearts
        for (let i = 0; i < 20; i++) {
            setTimeout(() => createHeart(), i * 100);
        }
        burstConfetti();
    } else {
        alert('Please add your song URL in script.js!');
    }
}

// Play Video Function
function playVideo() {
    const placeholder = document.getElementById('videoPlaceholder');
    const video = document.getElementById('birthdayVideo');
    
    if (!video || !placeholder) return;
    
    // Hide placeholder and show video
    placeholder.style.display = 'none';
    video.style.display = 'block';
    video.play();
    
    // Unexpected animation: confetti burst
    for (let i = 0; i < 3; i++) {
        setTimeout(() => burstConfetti(), i * 200);
    }
    
    // Create floating hearts
    for (let i = 0; i < 15; i++) {
        setTimeout(() => createHeart(), i * 150);
    }
}

// Initialize QR Code when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    generateQRCode();
    
    // Add unexpected animation: random sparkles on QR code
    setInterval(() => {
        const qrWrapper = document.querySelector('.qr-code-wrapper');
        if (qrWrapper && Math.random() > 0.8) {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'absolute';
            sparkle.style.width = '10px';
            sparkle.style.height = '10px';
            sparkle.style.background = 'white';
            sparkle.style.borderRadius = '50%';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animation = 'sparkle 1s ease-out';
            sparkle.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
            qrWrapper.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 1000);
        }
    }, 2000);
    
    // Add unexpected animation: video placeholder glow
    const videoPlaceholder = document.getElementById('videoPlaceholder');
    if (videoPlaceholder) {
        setInterval(() => {
            if (Math.random() > 0.7) {
                videoPlaceholder.style.animation = 'none';
                setTimeout(() => {
                    videoPlaceholder.style.animation = 'videoPlaceholderPulse 2s ease-in-out infinite';
                }, 10);
            }
        }, 3000);
    }
});

// Love Letter Functions
function openLetter() {
    const envelope = document.querySelector('.letter-envelope');
    const letter = document.getElementById('loveLetter');
    
    if (envelope && letter) {
        envelope.classList.add('opened');
        setTimeout(() => {
            letter.style.display = 'block';
            // Force reflow to ensure display is applied
            letter.offsetHeight;
            letter.classList.add('open');
            // Create hearts animation
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    if (typeof createHeart === 'function') {
                        createHeart();
                    }
                }, i * 100);
            }
            if (typeof burstConfetti === 'function') {
                burstConfetti();
            }
        }, 600);
    }
}

function closeLetter() {
    const envelope = document.querySelector('.letter-envelope');
    const letter = document.getElementById('loveLetter');
    
    if (envelope && letter) {
        letter.classList.remove('open');
        setTimeout(() => {
            letter.style.display = 'none';
            envelope.classList.remove('opened');
        }, 500);
    }
}

// Animate Counter Numbers
function animateCounter(element, target, duration = 2000) {
    if (!element || target === Infinity || target <= 0) {
        return;
    }
    
    const start = 0;
    const steps = duration / 16; // 60fps
    const increment = target / steps;
    let current = start;
    let step = 0;
    
    // Clear any existing content
    element.textContent = '0';
    
    const timer = setInterval(() => {
        step++;
        current += increment;
        
        if (current >= target || step >= steps) {
            element.textContent = Math.floor(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Initialize Counters
document.addEventListener('DOMContentLoaded', function() {
    // Set custom dates/numbers here
    // You can customize these values
    const daysTogether = 365; // Change to your actual days
    const momentsCount = 1000; // Change to your number
    const smilesCount = 5000; // Change to your number
    
    const daysCounter = document.getElementById('daysCounter');
    const momentsCounter = document.getElementById('momentsCounter');
    const smilesCounter = document.getElementById('smilesCounter');
    
    // Track if counters have been animated
    let daysAnimated = false;
    let momentsAnimated = false;
    let smilesAnimated = false;
    
    // Animate counters when they come into view
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '50px'
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counterId = entry.target.id;
                if (counterId === 'daysCounter' && daysCounter && !daysAnimated) {
                    daysAnimated = true;
                    animateCounter(daysCounter, daysTogether);
                    counterObserver.unobserve(entry.target);
                } else if (counterId === 'momentsCounter' && momentsCounter && !momentsAnimated) {
                    momentsAnimated = true;
                    animateCounter(momentsCounter, momentsCount);
                    counterObserver.unobserve(entry.target);
                } else if (counterId === 'smilesCounter' && smilesCounter && !smilesAnimated) {
                    smilesAnimated = true;
                    animateCounter(smilesCounter, smilesCount);
                    counterObserver.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe counter elements
    if (daysCounter) {
        counterObserver.observe(daysCounter);
    }
    if (momentsCounter) {
        counterObserver.observe(momentsCounter);
    }
    if (smilesCounter) {
        counterObserver.observe(smilesCounter);
    }
    
    // Fallback: If counters are already visible on load, animate them after a delay
    setTimeout(() => {
        if (daysCounter && !daysAnimated && daysCounter.getBoundingClientRect().top < window.innerHeight) {
            daysAnimated = true;
            animateCounter(daysCounter, daysTogether);
        }
        if (momentsCounter && !momentsAnimated && momentsCounter.getBoundingClientRect().top < window.innerHeight) {
            momentsAnimated = true;
            animateCounter(momentsCounter, momentsCount);
        }
        if (smilesCounter && !smilesAnimated && smilesCounter.getBoundingClientRect().top < window.innerHeight) {
            smilesAnimated = true;
            animateCounter(smilesCounter, smilesCount);
        }
    }, 1000);
    
    // Add hover effects to reason cards and animate on scroll
    const reasonCards = document.querySelectorAll('.reason-card');
    const reasonObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                reasonObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2, rootMargin: '50px' });
    
    reasonCards.forEach((card) => {
        reasonObserver.observe(card);
        
        card.addEventListener('mouseenter', function() {
            // Create sparkle effect
            if (typeof createSparkle === 'function') {
                for (let i = 0; i < 5; i++) {
                    setTimeout(() => createSparkle(), i * 50);
                }
            }
        });
    });
    
    // Animate timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3, rootMargin: '50px' });
    
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
});

// Make all functions globally available
window.changePhoto = changePhoto;
window.openGallery = openGallery;
window.closeGallery = closeGallery;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.changeGalleryPhoto = changeGalleryPhoto;
window.playSong = playSong;
window.playVideo = playVideo;
window.openLetter = openLetter;
window.closeLetter = closeLetter;