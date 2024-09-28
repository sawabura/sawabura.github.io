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

            </header>
            <div class="">
                <h2>PROFESSIONAL EXPERIENCE </h2>
                <ul>
                    <li>
                        <h3>OFFICE MANAGER</h3>
                        <h4>Alchevsk Metallurgical Complex, UA</h4>
                        <h4>2018 – 2019</h4>
                        <ul>
                            <li>Managing office operations inclusive of setting up office and facilities</li>
                            <li>Managing the flow of paperwork to and from the department, ensuring accuracy, completion, and adherence to deadlines.</li>
                            <li>Collaborating with management to assess office locations, plan requirements, and coordinate maintenance activities</li>
                            <li>Working closely with vendors to maintain and ensure the operational efficiency of office facilities, equipment, and services.</li>
                            <li>Providing comprehensive administrative support to management, including calendar management, meeting coordination, and documentation.</li>
                            <li>Systematically organizing files and documents to streamline retrieval and storage processes.</li>
                            <li>Assisting in the preparation and formatting of various documents, presentations, and reports.</li>
                            <li>Coordinating with the Finance department to ensure the timely and accurate processing of invoice payments.</li>
                        </ul>
                        <h2></h2>

                    </li>

                    <li>
                        <h3>FINANCE ASSISTANT</h3>
                        Alchevsk Metallurgical Complex, UA
                        <h4>2019 – 2021</h4>
                        <ul>
                            <li>Daily invoice scanning, entry and processing</li>
                            <li>Matching, batching and coding invoices</li>
                            <li>Raising, matching and recording purchase orders</li>
                            <li>Maintaining new and existing supplier/staff accounts</li>
                            <li>Processing staff expenses in line with company policy</li>
                            <li>Preparing weekly payment runs</li>
                            <li>Follow up on supplier invoice/staff expense queries accordingly</li>
                            <li>Ensuring invoices are paid in a timely manner, based on due dates and payment terms</li>
                            <li>Preparing manual UA/RU payments and liaising with treasury assistant</li>
                            <li>Reconciliation of supplier statements and accounts</li>
                            <li>Posting payments on a daily basis</li>
                            <li>Perform month end AP reconciliations to the Trial Balance</li>
                        </ul>
                        <h2></h2>
                    </li>

                    <li>
                        <h3>JUNIOR ANALYST</h3>
                        <h4>FOREX. PL, CY</h4>
                        <h4>2021 – 2022</h4>
                        <ul>
                            <li>Assisting in monitoring forex trades and pricing for institutional and retail clients, ensuring accuracy and compliance with company guidelines.</li>
                            <li>Generating complex reports for senior management, focusing on liquidity provider performance, client trade behavior, and pricing accuracy.</li>
                            <li>Supporting senior dealers by running daily reports on market liquidity, trade execution, and pricing discrepancies.</li>
                            <li>Utilizing Excel to generate pivot tables, run data analysis, and prepare reports on market performance.</li>
                            <li>Gaining experience with the MT4 platform, resolving technical issues and helping optimize trading conditions for the client base.</li>
                            <li>Collaborating with senior dealers and the investment team to provide regular updates on major currency trends and market conditions.</li>
                        </ul>
                        <h2></h2>
                    </li>
                    <li>
                        <h3>NIGHT AUDITOR</h3>
                        <h4>Lordos Beach Hotel & Spa, CY</h4>
                        <h4>2022 – 2023</h4>
                        <ul>
                            <li>Accurately handle cash, checks, credit/debit card transactions</li>
                            <li>Ensuring that all credit card transactions are correctly processed and sent for settlement</li>
                            <li>Generating financial and operational reports for management</li>
                            <li>Handling cash and credit payments, adhering to the hotel’s cash handling policy and PCI compliance</li>
                            <li>Assisting with inquiries or issues during the night shift.</li>
                            <li>Managing and maintaining the reception area, ensuring cleanliness and organization.</li>
                        </ul>
                        <h2></h2>
                    </li>
                    <li>
                        <h3>NIGHT AUDITOR</h3>
                        <h4>Radisson Blu Hotel, CY</h4>
                        <h4>2023 – 2024</h4>
                        <ul>
                            <li>Reconciling sales from different departments like restaurants, gift shops, and services to ensure they balance with the system.</li>
                            <li>Operating a multi-line phone system, handling incoming calls, and directing them to the appropriate individuals or departments.</li>
                            <li>Verifying cash transactions against system records, ensuring all payments are properly logged and balanced.</li>
                            <li>Operate electronic cash registers and POS systems to process transactions and manage customer receipts.</li>
                            <li>Balancing the cash drawer at the end of the shift and complete required paperwork for accounting purposes.</li>
                        </ul>

                        <h2></h2>
                    </li>

                </ul>
            </div>
        `,
        languages: `
        <div class="">
            <h2>FOREIGN LANGUAGES</h2>
            <div class="">
                <img src="./images/greek.png" alt="flags" class="img-flg">
                <img src="./images/eng.png" alt="flags" class="img-flg">
                <img src="./images/ru.png" alt="flags" class="img-flg">
                <img src="./images/ua.png" alt="flags" class="img-flg">
            </div>
        </div>
        `,
        software_skills: `
        <div class="">
            <h2>Software Skills</h2>
            <dl>
                <h4>1C Accounting Software</h4>
                <h4>Adobe Photoshop</h4>
                <h4>MS Office</h4>
                <h4>Google Workspace</h4>
                <h4>Operating Systems: Win, Linux + CMDS , BASH</h4>
            </dl>
        </div>
        `,
        special_skills: `

            <div class="">
                <h2>SPECIAL SKILLS</h2>
                <h3>Programming Languages</h3>
                <p>Basic knowledge of markup language HTML, CSS, SVG and Python.
                </p>
                <h3>Financial Analysis</h3>
                <p>Ability to analyze financial data, including cash   flow, budgets, and financial statements
                </p>
                <h3>Email Management</h3>
                <p>Experience with email software such as Outlook or Gmail for handling correspondence and scheduling appointments.
                </p>
                <h3>Technology Proficiency</h3>
                <p>Effective use of various software tools and platforms to streamline processes, 
                enhance productivity, and ensure accurate financial management
                </p>
                
            </div>
        `,
        education: `
        <div class="">
            <h2>EDUCATION</h2>
            <dl>
                <h4>2012-2018</h4>
                <dt>Donbass State Technical University, UA</dt>
                <h5>Degree: Master</h5>
                <dd>Specialisation:Economy of an enterprise</dd>
            </dl>
            <dl>
                <h4>2014-2018</h4>
                <dt>Belgorod State Technological University named after V.G.Shoukhov, RU</dt>
                <h5>Degree: Specialist</h5>
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

//add a class that hides the .typewriter element
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.typewriter').style.display = 'none';
    }, 7000); // Hides the typewriter after 5 seconds
});