// All button positions and types based on the Python GUI layout
const buttonPositions = [
    // Regular Buttons
    { id: "AB 4", x: 50, y: 50, type: "regular" },
    { id: "AB 5", x: 50, y: 125, type: "regular" },
    { id: "AB 6", x: 50, y: 200, type: "regular" },
    { id: "AB 7", x: 50, y: 275, type: "regular" },
    { id: "AB 8", x: 50, y: 350, type: "regular" },
    { id: "AB 3", x: 150, y: 425, type: "regular" },
    { id: "AB 2", x: 250, y: 425, type: "regular" },
    { id: "AB 1", x: 350, y: 425, type: "regular" },
    { id: "BB 1", x: 400, y: 50, type: "regular" },
    { id: "BB 2", x: 400, y: 350, type: "regular" },
    { id: "BT 7", x: 400, y: 125, type: "regular" },
    { id: "BT 5", x: 600, y: 75, type: "buttonv" },
    { id: "BT 4", x: 700, y: 75, type: "buttonv" },
    { id: "BT 3", x: 800, y: 75, type: "buttonv" },
    { id: "BT 2", x: 900, y: 75, type: "buttonv" },
    { id: "CT 1", x: 1000, y: 150, type: "regular" },
    { id: "CT 2", x: 1000, y: 225, type: "regular" },
    { id: "CT 3", x: 1000, y: 300, type: "regular" },
    { id: "GT 1", x: 950, y: 25, type: "regular" },
    { id: "GT 2", x: 875, y: 25, type: "regular" },
    { id: "GT 3", x: 800, y: 25, type: "regular" },
    { id: "GT 4", x: 725, y: 25, type: "regular" },
    { id: "GT 5", x: 650, y: 25, type: "regular" },
    { id: "RT 9", x: 1075, y: 200, type: "regular" },
    { id: "RT 10", x: 1075, y: 300, type: "regular" },
    { id: "RB 1", x: 1350, y: 100, type: "regular" },
    { id: "RB 2", x: 1350, y: 175, type: "regular" },
    { id: "RB 3", x: 1350, y: 250, type: "regular" },
    { id: "RB 4", x: 1350, y: 325, type: "regular" },
    { id: "ZB 1", x: 1350, y: 450, type: "regular" },
    { id: "ZB 2", x: 1350, y: 525, type: "regular" },
    { id: "ZB 3", x: 1350, y: 600, type: "regular" },
    { id: "ZB 4", x: 1350, y: 675, type: "regular" },
    { id: "ZT 5", x: 1150, y: 425, type: "buttonv" },
    { id: "ZT 6", x: 1150, y: 500, type: "buttonv" },
    { id: "ZT 7", x: 1150, y: 575, type: "buttonv" },
    { id: "ZT 8", x: 1150, y: 650, type: "buttonv" },
    { id: "ZT 1", x: 1250, y: 425, type: "buttonv" },
    { id: "ZT 2", x: 1250, y: 500, type: "buttonv" },
    { id: "ZT 3", x: 1250, y: 575, type: "buttonv" },
    { id: "ZT 4", x: 1250, y: 650, type: "buttonv" },
    // Circular Buttons
    { id: "AT 2", x: 300, y: 325, type: "circular" },
    { id: "BT 8", x: 500, y: 100, type: "circular" },
    { id: "BT 1", x: 1000, y: 75, type: "circular" },
    { id: "RT 1", x: 1325, y: 25, type: "circular" },
    { id: "RT 2", x: 1225, y: 25, type: "circular" },
    // Diamond Buttons
    { id: "AT 3", x: 150, y: 50, type: "diamond" },
    { id: "AT 1", x: 275, y: 50, type: "diamond" },
    { id: "RT 6", x: 1175, y: 100, type: "diamond" },
    { id: "RT 7", x: 1175, y: 200, type: "diamond" },
    { id: "RT 8", x: 1175, y: 300, type: "diamond" },
    { id: "RT 3", x: 1275, y: 100, type: "diamond" },
    { id: "RT 4", x: 1275, y: 200, type: "diamond" },
    { id: "RT 5", x: 1275, y: 300, type: "diamond" },
    { id: "AT 4", x: 150, y: 150, type: "diamond" },
    { id: "AT 7", x: 275, y: 175, type: "diamond" },
    { id: "AT 5", x: 150, y: 250, type: "diamond" },
    { id: "AT 6", x: 150, y: 350, type: "diamond" },
];



let serverCount = 0;

// Show and hide modal logic
function showModal() {
    document.getElementById('serverModal').style.display = 'flex';
}

function hideModal() {
    document.getElementById('serverModal').style.display = 'none';
    document.getElementById('canvas-container').style.display = 'block';
}

// Drawing the layout
function drawFloorLayout() {
    const canvas = document.getElementById('floorCanvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '16px Arial';
    ctx.fillStyle = 'black';
    
}

// Button timer logic
const buttonTimers = {};
function createButtons() {
    const controlsDiv = document.getElementById('controls');
    buttonPositions.forEach((button) => {
        const btn = document.createElement('button');
        btn.className = button.type === 'diamond' ? 'diamond-button' : button.type === 'circular' ? 'circular-button' : button.type === 'buttonv' ? 'vert-button' : 'station-button';
        btn.innerText = button.id;
        btn.style.left = `${button.x}px`;
        btn.style.top = `${button.y}px`;
        buttonTimers[button.id] = null;
        btn.addEventListener('click', () => toggleTimer(btn, button.id));
        controlsDiv.appendChild(btn);
    });
}

function toggleTimer(btn, id) {
    if (btn.classList.contains('active')) {
        clearInterval(buttonTimers[id]);
        btn.classList.remove('active');
        btn.style.backgroundColor = 'lightgray';
    } else {
        btn.classList.add('active');
        btn.style.backgroundColor = 'green';
        const startTime = Date.now();
        buttonTimers[id] = setInterval(() => updateButtonColor(btn, startTime), 1000);
    }
}

function updateButtonColor(btn, startTime) {
    const elapsed = (Date.now() - startTime) / 1000;
    btn.style.backgroundColor = elapsed < 5 ? 'green' : elapsed < 10 ? 'yellow' : elapsed < 15 ? 'orange' : 'red';
}

// Application initialization
function initialize() {
    drawFloorLayout();
    createButtons();
}

document.getElementById('submitServers').addEventListener('click', () => {
    const input = parseInt(document.getElementById('serverCount').value, 10);
    if (input > 0) {
        serverCount = input;
        alert(`Number of servers: ${serverCount}`);
        hideModal();
        initialize();
    } else {
        alert('Please enter a valid number of servers.');
    }
});

window.onload = () => {
    createButtons();
};