const gameData = {
    start: {
        text: "You are an astronaut on a mission to find a new habitable planet. Do you explore the nearby planet or investigate a signal from deep space?",
        choices: [
            { text: "Explore Nearby Planet", consequence: "planet" },
            { text: "Investigate Signal", consequence: "signal" }
        ],
        image: "https://media.istockphoto.com/id/1581627031/photo/startup-hand-shows-a-rocket-and-icons.webp?b=1&s=170667a&w=0&k=20&c=49sytN495TpJHcael26OkdDjc_caosCAeYyFGPe9zrs="
    },
    planet: {
        text: "You land on a planet with strange flora and fauna. Do you collect samples or set up a base?",
        choices: [
            { text: "Collect Samples", consequence: "samples" },
            { text: "Set Up Base", consequence: "base" }
        ],
        image: "https://media.istockphoto.com/id/1457206081/photo/earth-planet-at-night-into-the-dark-cities-light-earth-in-deep-space-with-stars-planet-sphere.webp?b=1&s=170667a&w=0&k=20&c=g2Q-bnmYw1kCGe_bo1HjCzE6WhJRoMBCpjsO8CYjdq8="
    },
    signal: {
        text: "The signal leads you to a derelict spaceship. Do you board the spaceship or scan it from outside?",
        choices: [
            { text: "Board the Spaceship", consequence: "boardShip" },
            { text: "Scan from Outside", consequence: "scanShip" }
        ],
        image: "https://media.istockphoto.com/id/1561282268/photo/neon-lit-time-machine-or-portal-to-an-unknown-world.webp?b=1&s=170667a&w=0&k=20&c=R4g7hJ0vrA7zhOwQX_tvz8A4DVDZI-qx0Y02tV8kfvE="
    },
    samples: {
        text: "While collecting samples, you discover a hidden cave. Do you enter the cave or return to your ship?",
        choices: [
            { text: "Enter the Cave", consequence: "cave" },
            { text: "Return to Ship", consequence: "returnShip" }
        ],
        image: "https://www.istockphoto.com/photo/secret-passage-gm1324119028-409565774?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcave-space&utm_medium=affiliate&utm_source=unsplash&utm_term=cave+space%3A%3A%3A"
    },
    base: {
        text: "While setting up the base, you encounter hostile creatures. Do you fight or flee?",
        choices: [
            { text: "Fight", consequence: "fightCreatures" },
            { text: "Flee", consequence: "fleeCreatures" }
        ],
        image: "https://media.istockphoto.com/id/1399070394/photo/chinese-astronauts-on-moon-with-permanent-base.webp?b=1&s=170667a&w=0&k=20&c=NN8Dmp9GcGbOxtyW6Kshb73AmOd7Wlc_yHFxo4nawds="
    },
    boardShip: {
        text: "Inside the spaceship, you find advanced technology. Do you take it or leave it?",
        choices: [
            { text: "Take Technology", consequence: "takeTech" },
            { text: "Leave It", consequence: "leaveTech" }
        ],
        image: "https://media.istockphoto.com/id/1195199589/photo/dark-blue-spaceship-futuristic-interior-with-window-view-on-planet-earth-3d-rendering.webp?b=1&s=170667a&w=0&k=20&c=VueCr3bivt9NyuaTzZZS9vR75E44Ny2UcgtB_xxo59g="
    },
    scanShip: {
        text: "Scanning reveals the ship is unstable. Do you risk boarding or leave?",
        choices: [
            { text: "Risk Boarding", consequence: "boardShip" },
            { text: "Leave", consequence: "leaveShip" }
        ],
        image: "https://media.istockphoto.com/id/1161912726/photo/sci-fi-element-for-spaceship-futuristic-concept-design.webp?b=1&s=170667a&w=0&k=20&c=nNvEgYS223EWAr_x6vfwL3jJjwYnmiV94FUwE0W3tRI="
    },
    cave: {
        text: "In the cave, you find alien artifacts. Do you take them or document and leave?",
        choices: [
            { text: "Take Artifacts", consequence: "takeArtifacts" },
            { text: "Document and Leave", consequence: "documentLeave" }
        ],
        image: "https://media.istockphoto.com/id/1716501112/photo/glittering-gold-particles-and-light-beams-abstract-background-christmas-award-celebration.webp?b=1&s=170667a&w=0&k=20&c=Ap0soVCKyQl1TaNyxfevgvzO8AcGjYRWr6YiBPifg-4="
    },
    returnShip: {
        text: "Returning to your ship, you are attacked by hostile creatures. Do you fight or flee?",
        choices: [
            { text: "Fight", consequence: "fightCreatures" },
            { text: "Flee", consequence: "fleeCreatures" }
        ],
        image: "https://media.istockphoto.com/id/1665557053/photo/abstract-ufo.webp?b=1&s=170667a&w=0&k=20&c=5GZfTXzRecofjoT8X4QhHGq17ldXs6DOGN0GWpTUqDs="
    },
    fightCreatures: {
        text: "You bravely fight the creatures but are overwhelmed. Game over.",
        choices: [{ text: "Start Over", consequence: "start" }],
        image: "https://media.istockphoto.com/id/1472121234/photo/sun-and-planets-of-the-solar-system-animation.webp?b=1&s=170667a&w=0&k=20&c=-lhIYTSYJwZJ1j5Dbt6Vw7N6hXk2JDRBJj4LQ1gD9FY="
    },
    fleeCreatures: {
        text: "You manage to escape back to your ship and safely return home. You win!",
        choices: [{ text: "Play Again", consequence: "start" }],
        image: "https://media.istockphoto.com/id/1725887689/photo/illuminated-door-on-water-decisions-choices-conceptual-futuristic-abstract-background.webp?b=1&s=170667a&w=0&k=20&c=H7l49vETt_eY1WVZ3ms9eKgNRgDaJD9OBe4QJePQdlc="
    },
    takeTech: {
        text: "Taking the technology, you advance human knowledge significantly. You win!",
        choices: [{ text: "Play Again", consequence: "start" }],
        image: "https://media.istockphoto.com/id/1216520737/photo/blue-digital-cyberspace-and-digital-data-network-connections-concept-transfer-digital-data-hi.webp?b=1&s=170667a&w=0&k=20&c=9554kDCAlSpIQQpxjYwvRHKf6a9BTLjlJeZ6Dstc2Hg="
    },
    leaveTech: {
        text: "Leaving the technology, you avoid potential danger and safely return home. You win!",
        choices: [{ text: "Play Again", consequence: "start" }],
        image: "https://media.istockphoto.com/id/1686481663/photo/business-woman-entering-to-portal.webp?b=1&s=170667a&w=0&k=20&c=1e7GduwaOvrZSukHr-oGUmSEmTZFkyyJ5Vg_J8QIYCc="
    },
    leaveShip: {
        text: "You decide to leave the ship and avoid the risk. You return home safely. You win!",
        choices: [{ text: "Play Again", consequence: "start" }],
        image: "https://media.istockphoto.com/id/1428863771/photo/chinese-astronauts-working-on-moon-base.webp?b=1&s=170667a&w=0&k=20&c=EKlInCBjV9ACjy7IDI4TtaBh1UImu-fWNFZz3SKSF8A="
    },
    takeArtifacts: {
        text: "Taking the artifacts, you make an incredible discovery for humanity. You win!",
        choices: [{ text: "Play Again", consequence: "start" }],
        image: "https://media.istockphoto.com/id/1716501112/photo/glittering-gold-particles-and-light-beams-abstract-background-christmas-award-celebration.webp?b=1&s=170667a&w=0&k=20&c=Ap0soVCKyQl1TaNyxfevgvzO8AcGjYRWr6YiBPifg-4="
    },
    documentLeave: {
        text: "Documenting your findings, you contribute valuable knowledge to science. You win!",
        choices: [{ text: "Play Again", consequence: "start" }],
        image: "https://media.istockphoto.com/id/2054515915/photo/satisfaction-document-checklist-database-contract-checkbox-insurance-manager-technology.webp?b=1&s=170667a&w=0&k=20&c=cwkupmnPqeS_5CejCzZ5efJ2NFI2ElBPSXRlEI6s_BU="
    }
};

const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const storyImage = document.getElementById('story-image');

function startGame() {
    showStoryPart('start');
}

function showStoryPart(partKey) {
    const part = gameData[partKey];
    storyElement.textContent = part.text;
    storyImage.src = part.image;
    choicesElement.innerHTML = '';
    part.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => showStoryPart(choice.consequence);
        choicesElement.appendChild(button);
    });
}

startGame();

// Addendum script loaded.
console.log("Addendum script loaded.");

// Function to add new story parts dynamically
function addNewStoryPart(partKey, partData) {
    gameData[partKey] = partData;
}

// Example of adding new story part
addNewStoryPart("newPart", {
    text: "New story part text...",
    choices: [
        { text: "New Choice 1", consequence: "someConsequene" },
        { text: "New Choice 2", consequence: "anotherConsequence" }
    ],
    image: "new-image-url.jpg"
});
