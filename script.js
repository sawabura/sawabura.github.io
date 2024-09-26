// Rain effect 
function createRain() {
    const rainContainer = document.querySelector('.rain');

    // Create 100 raindrops
    for (let i = 0; i < 100; i++) {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        
        // Randomize position and duration
        raindrop.style.left = `${Math.random() * 100}%`;
        raindrop.style.animationDuration = `${0.5 + Math.random()}s`;
        
        rainContainer.appendChild(raindrop);

        // Event listener for raindrop animation end 
        raindrop.addEventListener('animationiteration', () => {
            createSplash(raindrop.style.left);
        });
    }
}

function createSplash(leftPosition) {
    const rainContainer = document.querySelector('.rain');
    
    const splash = document.createElement('div');
    splash.classList.add('splash');
    splash.style.left = leftPosition;
    splash.style.bottom = '0px';  // Appear at the bottom of the screen
    
    rainContainer.appendChild(splash);

    // Remove the splash after animation ends
    setTimeout(() => {
        splash.remove();
    }, 300);  // Duration of the splash animation
}

// Initialize the rain effect
createRain();


// Flash effect for thunderbolt
function thunderFlash() {
    const flash = document.querySelector('.flash');

    // Array of audio files
    const audioTracks = [
        './sounds/thunder-sound1.mp3',
        './sounds/thunder-sound2.mp3',
        './sounds/thunder-sound3.mp3',
        './sounds/thunder-sound4.mp3'
    ];

    const thunderSound = document.getElementById('thunder-sound');
    thunderSound.volume = 0.2;  // Set volume to 20%

    function triggerFlash() {
        flash.style.animation = 'flash 0.2s ease';

        // Select a random track from the array
        const randomTrackIndex = Math.floor(Math.random() * audioTracks.length);
        thunderSound.src = audioTracks[randomTrackIndex];
        //thunderSound.currentTime = 0.1;  // Reset to the beginning
        thunderSound.play();

        setTimeout(() => {
            flash.style.animation = '';
        }, 200);  // Flash duration is 200ms

        // Set a random timeout for the next flash
        const randomDelay = Math.random() * 10000 + 10000; // Random delay between 10 and 20 seconds
        setTimeout(triggerFlash, randomDelay);
    }

    // Start the first flash
    triggerFlash();
}

thunderFlash();


// Chaotic lightning
function createLightning() {
    const svg = document.getElementById('lightning-svg');
    svg.innerHTML = ''; // Clear any existing lightning paths

    // Random height and position for the lightning bolt
    const randomHeight = 400 + Math.random() * 300; // Height between 400px and 700px
    const randomXPosition = Math.random() * window.innerWidth; // Random x between 0 and window width

    // Create the lightning path using Bezier curves with random height and position
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `M ${randomXPosition} 0 Q ${randomXPosition + 45 + Math.random() * 10} ${50 + Math.random() * 100}, ${randomXPosition + 50 + Math.random() * 20} ${150 + Math.random() * 100} 
                            T ${randomXPosition + 40 + Math.random() * 20} 400 T ${randomXPosition + 50 + Math.random() * 10} ${randomHeight}`);
    path.setAttribute("stroke", "white");
    path.setAttribute("stroke-width", "3");
    path.setAttribute("fill", "transparent");

    svg.appendChild(path);
}

// Function to randomly generate lightning strikes
function generateLightning() {
    createLightning();
    setTimeout(() => {
        // Clear the path after lightning to simulate the flash
        const svg = document.getElementById('lightning-svg');
        svg.innerHTML = '';
    }, 200); // Short timeout to remove the lightning

    // Random interval for the next lightning strike
    setTimeout(generateLightning, Math.random() * 4000 + 1000); // Between 1 and 5 seconds
}

// Start generating lightning on page load and playing rain sound
window.onload = function() {
    var rainSound = document.getElementById('rain-sound');
    rainSound.play();
    rainSound.volume = 0.3;  // Set volume to 20%
    generateLightning();

};

// Show the menu button with a slide-in effect after 5 seconds(TEST NAVBAR)
setTimeout(() => {
    const navToggleBtn = document.getElementById('bike-container');
    navToggleBtn.style.display = 'flex'; // Make the button visible
    navToggleBtn.classList.add('slide-in'); // Trigger the slide-in animation
}, 2000); // Delay of 2 seconds

// Toggle the sidebar visibility
document.getElementById('nav-toggle-btn').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');

    // Toggle sidebar open and close by adjusting width
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0'; // Close sidebar
    } else {
        sidebar.style.width = '250px'; // Open sidebar
    }
});

