
// Rain effect 
function createRain() {
    const rainContainer = document.querySelector('.rain');
    for (let i = 0; i < 100; i++) {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${Math.random() * 100}%`;
        raindrop.style.animationDuration = `${0.5 + Math.random()}s`;
        rainContainer.appendChild(raindrop);
    }
}
createRain();

// Flash effect for thunderbolt
function thunderFlash() {
    const flash = document.querySelector('.flash');
    setInterval(() => {
        flash.style.animation = 'flash 0.2s ease';
        setTimeout(() => flash.style.animation = '', 200);
    }, Math.random() * 5000 + 3000);
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

// Start generating lightning on page load
window.onload = function() {
    generateLightning();
};
