# 💖 Romantic Birthday Website 💖

A beautiful, animated birthday website with love-themed animations, photo gallery, QR code for songs, and video dedication.

## 📸 How to Add Your Photos

1. Create an `images` folder in the `gift` directory (if it doesn't exist)
2. Add your photos to the `images` folder:
   - **5 photos** for the main display (front page)
   - **12 photos** for the gallery (when clicking the like button)

3. Open `script.js` and update:

**For Main Display (5 photos):**
```javascript
const mainDisplayPhotos = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg",
    "images/pic5.jpg"
];
```

**For Gallery (12 photos with captions):**
```javascript
const galleryPhotos = [
    { src: "images/gallery1.jpg", caption: "Our first beautiful moment together 💖" },
    { src: "images/gallery2.jpg", caption: "Every day with you is a blessing 🌟" },
    { src: "images/gallery3.jpg", caption: "You make my world complete 🫶" },
    { src: "images/gallery4.jpg", caption: "Forever grateful for you 💕" },
    { src: "images/gallery5.jpg", caption: "My heart belongs to you ❤️" },
    { src: "images/gallery6.jpg", caption: "Together we create magic ✨" },
    { src: "images/gallery7.jpg", caption: "You are my sunshine ☀️" },
    { src: "images/gallery8.jpg", caption: "Every memory is precious 💝" },
    { src: "images/gallery9.jpg", caption: "Love you more than words 💌" },
    { src: "images/gallery10.jpg", caption: "My forever and always 🌹" },
    { src: "images/gallery11.jpg", caption: "You light up my world 🌟" },
    { src: "images/gallery12.jpg", caption: "Forever grateful for us 💖" }
];
```

## 🎵 How to Add Your Song

1. Open `script.js`
2. Find the `songURL` variable (around line 20)
3. Replace with your song link (Spotify, YouTube, Apple Music, etc.):

```javascript
const songURL = "https://open.spotify.com/track/YOUR_SONG_ID";
// OR
const songURL = "https://www.youtube.com/watch?v=YOUR_VIDEO_ID";
```

The QR code will automatically generate when you add your song URL!

## 🎬 How to Add Your Birthday Video

1. Create a `video` folder in the `gift` directory
2. Add your birthday video file (name it `birthday-video.mp4` or `birthday-video.webm`)
3. The video will automatically appear in the video section

**Supported formats:** MP4, WebM

## 🎨 Features

- ✨ Floating hearts animation
- ⭐ Sparkles and stars
- 🎊 Confetti animation (click anywhere for burst!)
- 📷 **Main Display**: 5 photos on the front page with smooth transitions
- 🖼️ **Gallery**: 12 photos with captions when you click the like button
- 💝 Rotating romantic messages (frosted glass style)
- 💌 **Special Message Card** - Beautiful separate card with personalized message
- 🎵 **QR Code Section** - Scan to listen to your special song
- 🎬 **Video Dedication** - Add a birthday video with amazing animations
- 🎂 Animated birthday cake
- 💓 Heartbeat animations
- 🌈 Beautiful gradient background
- ❤️ **Like Button** - Opens full gallery with captions
- 🖼️ **Full Gallery Modal** - Beautiful grid layout
- 📝 **Photo Captions** - Add personalized messages to each photo
- 🎭 **Unexpected Animations** - Surprise effects throughout (hearts, confetti, sparkles)
- 🖼️ **Background Images** - Your photos rotate as background
- 📱 Fully responsive design
- ⌨️ Keyboard navigation (Arrow keys, ESC to close)
- 👆 Touch swipe support for mobile

## 🎮 Controls

- **Like Button**: Click to open full gallery with all photos and captions
- **QR Code**: Scan with phone camera to open song
- **Play Song Button**: Click to open song directly
- **Video Play Button**: Click to play birthday video
- **Arrow Keys**: Navigate photos (works in gallery and lightbox)
- **ESC Key**: Close gallery or lightbox
- **Click Anywhere**: Burst confetti
- **Navigation Buttons**: Click to change photos
- **Auto-advance**: Photos change automatically every 4 seconds
- **Gallery Items**: Click any photo in gallery to view in lightbox
- **Swipe**: Swipe left/right on mobile to navigate

## 🎨 Customization

### Change Special Message
Edit the special message card in `index.html`:
```html
<p class="special-card-text">
    Your personalized message here...
</p>
```

### Change Messages
Edit the message cards in `index.html`:
```html
<div class="message-card" id="message1">
    <p class="message-text">Your custom message here 💖</p>
</div>
```

### Change Colors
Edit the gradient in `style.css`:
```css
background: linear-gradient(135deg, #your-color1, #your-color2, ...);
```

### Adjust Animation Speed
In `script.js`, change the interval:
```javascript
setInterval(() => {
    changePhoto(1);
}, 4000); // Change 4000 to your desired milliseconds
```

## 📁 File Structure

```
gift/
├── index.html          # Main HTML file
├── style.css           # All styles and animations
├── script.js           # JavaScript functionality
├── images/             # Your photos folder
│   ├── pic1.jpg        # Main display photos (5)
│   ├── pic2.jpg
│   ├── pic3.jpg
│   ├── pic4.jpg
│   ├── pic5.jpg
│   ├── gallery1.jpg    # Gallery photos (12)
│   ├── gallery2.jpg
│   ├── gallery3.jpg
│   ├── ... (up to gallery12.jpg)
│   └── gallery12.jpg
├── video/              # Your birthday video folder
│   └── birthday-video.mp4
└── README.md          # This file
```

## 🎭 Unexpected Animations

The website includes many surprise animations:
- Random heart bursts every few seconds
- Confetti bursts when opening gallery or playing video
- Sparkles on QR code
- Video placeholder glow effects
- Floating hearts when playing song
- Photo shake on hover
- And many more surprises!

Enjoy creating this special gift! 💕
