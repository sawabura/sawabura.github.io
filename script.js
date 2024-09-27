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

// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the container directly
    const popupContainer = document.querySelector('.container');

    // Content for different sections
    const contentMap = {
        home: `


        `,
        about: `
            <header>
                <h1><a href="">Your Ad Goes Here:)</a></h1>
                <p>I'm a Pluviophile person</p>
            </header>
            <section>
                <h2>Download & Contact</h2>
                <div class="button-container">
                    <button onclick="window.location.href='https://drive.google.com/file/d/19I6cnyKGWquV7ztHIPw4PErLabVCFkPc/view?usp=drive_link'">Download CV</button>
                    <button onclick="window.location.href='mailto:victormacgrey@gmail.com'">Contact Me</button>
                </div>
            </section>
            <footer>
                <p>© 2024 Viktor's CV. All Rights Reserved.</p>
            </footer>
        `,
        experience: `
            <header>
                <h1>Our Services</h1>
                <p>Programming Languag
                </p>
            </header>
            <div class="">
                <h2>PROFESSIONAL EXPERIENCE </h2>
                <ul>
                    <li>
                        <h3>ASTRONAUT</h3>
                        <ul>
                            <h4 style="font-weight: 200; font-family: Gill Sans, sans-serif;">2018 – 2019</h4>
                            <li>Used to be working on Mars and Jupiter</li>
                            <li>Was dealing with plumbing related staff</li>
                        </ul>
                    </li>

                    <li>
                        <h3>ASSISTANT OF US PRESIDENT</h3>
                        <ul>
                            <h4 style="font-weight: 200; font-family: Gill Sans, sans-serif;" draggable="true">2019 – 2022</h4>
                            <li>Managing office operations inclusive of setting up office and facilities</li>
                            <li>Managing the flow of paperwork to and from </li>
                        </ul>
                    </li>

                    <li>
                        <h3>MANAGER OF THE WORLD</h3>
                        <ul>
                            <h4 style="font-weight: 200; font-family: Gill Sans, sans-serif;">2022 – 2024</h4>
                            <li>Managing office operations inclusive of setting up office and facilities</li>
                            <li>Managing the flow of paperwork to and from </li>
                        </ul>
                    </li>

                </ul>
            </div>
        `,
        languages: `
        <header>
            <h1>Our Services</h1>
        </header>
        <div class="">
            <h2>FOREIGN LANGUAGES</h2>
            <ol>
                <li><pre style="font-weight: 200; font-family: Gill Sans, sans-serif;">Greek      🔳🔳🔳🔳⬜</pre></li>
                <li><pre style="font-weight: 200; font-family: Gill Sans, sans-serif;">English    🔳🔳🔳🔳⬜</pre></li>
                <li><pre style="font-weight: 200; font-family: Gill Sans, sans-serif;">Russian   🔳🔳🔳🔳🔳</pre></li>
                <li><pre style="font-weight: 200; font-family: Gill Sans, sans-serif;">Ukrainian 🔳🔳🔳🔳🔳</pre></li>
            </ol>
        </div>
        `,
        software_skills: `
        <header>
            <h1>Our Services</h1>
            <p>Programming Languag
            </p>
        </header>
        `,
        special_skills: `
            <header>
                <h1>Contact Us</h1>
                <p>Contact details and information.</p>
            </header>
            <div class="">
                <h2>SPECIAL SKILLS</h2>
                <h4>Can drive a spaceship</h4>
                <p>Ability to cast a spell without its pronouncing(like fireball and frostwall)
                </p>
            </div>
        `,
        education: `
        <header>
            <h1>Contact Us</h1>
            <p>Contact details and information.</p>
        </header>
        <div class="">
            <h2>EDUCATION</h2>
            <dl>
                <h4>2010-2015</h4>
                <dt>Donbass State Technical University, UA</dt>
                <dd>Specialisation:Economy of an enterprise</dd>
            </dl>
            <dl>
                <h4>2016-2021</h4>
                <dt>Belgorod State Technological University named after V.G.Shoukhov, RU</dt>
                <dd>Specialisation:Economics and Management</dd>
            </dl>
        </div>
        `
    };

    // Attach click event to each navigation link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default behavior

            // Get the target section from the clicked link
            const target = e.target.getAttribute('data-target');

            // Hide the container for "home" and empty it
            if (target === 'home') {
                popupContainer.classList.remove('show-popup');
                popupContainer.style.display = 'none';
                popupContainer.innerHTML = ''; // Optional: Clear content if needed
            } else if (contentMap[target]) {
                // Reset animation by temporarily removing the class
                popupContainer.classList.remove('show-popup');

                // Update the container with the corresponding content
                popupContainer.innerHTML = contentMap[target];

                // Use setTimeout to ensure the class removal is registered before re-adding
                setTimeout(() => {
                    popupContainer.style.display = 'block';
                    popupContainer.classList.add('show-popup');
                }, 5); // Short delay to allow the class to be re-added and trigger animation
            }
        });
    });

    // Close the pop-up by clicking outside the container
    document.addEventListener('click', (e) => {
        // Check if the click is outside of the container
        if (!popupContainer.contains(e.target) && popupContainer.classList.contains('show-popup')) {
            popupContainer.classList.remove('show-popup'); // Hide pop-up
            popupContainer.style.display = 'none';
            popupContainer.innerHTML = '';
        }
    });
});