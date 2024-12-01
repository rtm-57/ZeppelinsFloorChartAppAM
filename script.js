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

const linePoints4 = [
    //Outline
    { start: { x: 45, y: 25 }, end: { x: 600, y: 25 } },
    { start: { x: 600, y: 25 }, end: { x: 600, y: 62 } },
    { start: { x: 600, y: 62 }, end: { x: 1060, y: 62 } },
    { start: { x: 1060, y: 62 }, end: { x: 1060, y: 25 } },
    { start: { x: 1060, y: 25 }, end: { x: 1425, y: 25 } },
    { start: { x: 1425, y: 25 }, end: { x: 1425, y: 715 } },
    { start: { x: 1425, y: 715 }, end: { x: 1125, y: 715 } },
    { start: { x: 1125, y: 715 }, end: { x: 1125, y: 400 } },
    { start: { x: 1125, y: 400 }, end: { x: 1060, y: 400 } },
    { start: { x: 1060, y: 400 }, end: { x: 1060, y: 62 } },
    { start: { x: 1060, y: 400 }, end: { x: 450, y: 400 } },
    { start: { x: 450, y: 400 }, end: { x: 450, y: 460 } },
    { start: { x: 450, y: 460 }, end: { x: 45, y: 460 } },
    { start: { x: 45, y: 460 }, end: { x: 45, y: 25 } },
    
    //3 servers on dining
    { start: { x: 1425, y: 282 }, end: { x: 1260, y: 282 } },
    { start: { x: 1260, y: 282 }, end: { x: 1260, y: 170 } },
    { start: { x: 1260, y: 170 }, end: { x: 1060, y: 170 } },
    { start: { x: 1425, y: 482 }, end: { x: 1320, y: 482 } },
    { start: { x: 1320, y: 482 }, end: { x: 1320, y: 400 } },
    { start: { x: 1320, y: 400 }, end: { x: 1210, y: 400 } },
    { start: { x: 1210, y: 400 }, end: { x: 1210, y: 615 } },
    { start: { x: 1210, y: 615 }, end: { x: 1125, y: 615 } },
    
    //Cove
    { start: { x: 775, y: 62 }, end: { x: 775, y: 400 } },
    
    //Bar including BB2
    { start: { x: 450, y: 400 }, end: { x: 380, y: 400 } },
    { start: { x: 380, y: 400 }, end: { x: 380, y: 25 } },
    
];
const linePoints5 = [
    //Outline
    { start: { x: 45, y: 25 }, end: { x: 600, y: 25 } },
    { start: { x: 600, y: 25 }, end: { x: 600, y: 62 } },
    { start: { x: 600, y: 62 }, end: { x: 1060, y: 62 } },
    { start: { x: 1060, y: 62 }, end: { x: 1060, y: 25 } },
    { start: { x: 1060, y: 25 }, end: { x: 1425, y: 25 } },
    { start: { x: 1425, y: 25 }, end: { x: 1425, y: 715 } },
    { start: { x: 1425, y: 715 }, end: { x: 1125, y: 715 } },
    { start: { x: 1125, y: 715 }, end: { x: 1125, y: 400 } },
    { start: { x: 1125, y: 400 }, end: { x: 1060, y: 400 } },
    { start: { x: 1060, y: 400 }, end: { x: 1060, y: 62 } },
    { start: { x: 1060, y: 400 }, end: { x: 450, y: 400 } },
    { start: { x: 450, y: 400 }, end: { x: 450, y: 460 } },
    { start: { x: 450, y: 460 }, end: { x: 45, y: 460 } },
    { start: { x: 45, y: 460 }, end: { x: 45, y: 25 } },
    
    //3 servers on dining
    { start: { x: 1425, y: 282 }, end: { x: 1260, y: 282 } },
    { start: { x: 1260, y: 282 }, end: { x: 1260, y: 170 } },
    { start: { x: 1260, y: 170 }, end: { x: 1060, y: 170 } },
    { start: { x: 1425, y: 482 }, end: { x: 1320, y: 482 } },
    { start: { x: 1320, y: 482 }, end: { x: 1320, y: 400 } },
    { start: { x: 1320, y: 400 }, end: { x: 1210, y: 400 } },
    { start: { x: 1210, y: 400 }, end: { x: 1210, y: 615 } },
    { start: { x: 1210, y: 615 }, end: { x: 1125, y: 615 } },
    
    //Cove
    { start: { x: 775, y: 62 }, end: { x: 775, y: 400 } },
    
    //Bar including BB2
    { start: { x: 450, y: 400 }, end: { x: 380, y: 400 } },
    { start: { x: 380, y: 400 }, end: { x: 380, y: 25 } },
    
    
];
const linePoints6 = [
    //Outline
    { start: { x: 45, y: 25 }, end: { x: 600, y: 25 } },
    { start: { x: 600, y: 25 }, end: { x: 600, y: 62 } },
    { start: { x: 600, y: 62 }, end: { x: 1060, y: 62 } },
    { start: { x: 1060, y: 62 }, end: { x: 1060, y: 25 } },
    { start: { x: 1060, y: 25 }, end: { x: 1425, y: 25 } },
    { start: { x: 1425, y: 25 }, end: { x: 1425, y: 715 } },
    { start: { x: 1425, y: 715 }, end: { x: 1125, y: 715 } },
    { start: { x: 1125, y: 715 }, end: { x: 1125, y: 400 } },
    { start: { x: 1125, y: 400 }, end: { x: 1060, y: 400 } },
    { start: { x: 1060, y: 400 }, end: { x: 1060, y: 62 } },
    { start: { x: 1060, y: 400 }, end: { x: 450, y: 400 } },
    { start: { x: 450, y: 400 }, end: { x: 450, y: 460 } },
    { start: { x: 450, y: 460 }, end: { x: 45, y: 460 } },
    { start: { x: 45, y: 460 }, end: { x: 45, y: 25 } },
    
    //4 servers on dining
    { start: { x: 1425, y: 220 }, end: { x: 1340, y: 220 } },
    { start: { x: 1340, y: 220 }, end: { x: 1340, y: 180 } },
    { start: { x: 1340, y: 180 }, end: { x: 1060, y: 180 } },
    { start: { x: 1425, y: 370 }, end: { x: 1160, y: 370 } },
    { start: { x: 1160, y: 370 }, end: { x: 1160, y: 180 } },
    { start: { x: 1425, y: 482 }, end: { x: 1320, y: 482 } },
    { start: { x: 1320, y: 482 }, end: { x: 1320, y: 400 } },
    { start: { x: 1320, y: 400 }, end: { x: 1210, y: 400 } },
    { start: { x: 1210, y: 400 }, end: { x: 1210, y: 615 } },
    { start: { x: 1210, y: 615 }, end: { x: 1125, y: 615 } },
    
    //Cove
    { start: { x: 775, y: 62 }, end: { x: 775, y: 400 } },
    
    //Bar including BB2
    { start: { x: 450, y: 400 }, end: { x: 380, y: 400 } },
    { start: { x: 380, y: 400 }, end: { x: 380, y: 25 } },
    
];
const linePoints7 = [
    //Outline
    { start: { x: 45, y: 25 }, end: { x: 600, y: 25 } },
    { start: { x: 600, y: 25 }, end: { x: 600, y: 62 } },
    { start: { x: 600, y: 62 }, end: { x: 1060, y: 62 } },
    { start: { x: 1060, y: 62 }, end: { x: 1060, y: 25 } },
    { start: { x: 1060, y: 25 }, end: { x: 1425, y: 25 } },
    { start: { x: 1425, y: 25 }, end: { x: 1425, y: 715 } },
    { start: { x: 1425, y: 715 }, end: { x: 1125, y: 715 } },
    { start: { x: 1125, y: 715 }, end: { x: 1125, y: 400 } },
    { start: { x: 1125, y: 400 }, end: { x: 1060, y: 400 } },
    { start: { x: 1060, y: 400 }, end: { x: 1060, y: 62 } },
    { start: { x: 1060, y: 400 }, end: { x: 450, y: 400 } },
    { start: { x: 450, y: 400 }, end: { x: 450, y: 460 } },
    { start: { x: 450, y: 460 }, end: { x: 45, y: 460 } },
    { start: { x: 45, y: 460 }, end: { x: 45, y: 25 } },
    
    //3 servers on dining
    { start: { x: 1425, y: 282 }, end: { x: 1260, y: 282 } },
    { start: { x: 1260, y: 282 }, end: { x: 1260, y: 170 } },
    { start: { x: 1260, y: 170 }, end: { x: 1060, y: 170 } },
    { start: { x: 1425, y: 482 }, end: { x: 1320, y: 482 } },
    { start: { x: 1320, y: 482 }, end: { x: 1320, y: 400 } },
    { start: { x: 1320, y: 400 }, end: { x: 1210, y: 400 } },
    { start: { x: 1210, y: 400 }, end: { x: 1210, y: 615 } },
    { start: { x: 1210, y: 615 }, end: { x: 1125, y: 615 } },
    
    //Cove
    { start: { x: 775, y: 62 }, end: { x: 775, y: 400 } },
    
    //Bar including BB2
    { start: { x: 450, y: 400 }, end: { x: 380, y: 400 } },
    { start: { x: 380, y: 400 }, end: { x: 380, y: 25 } },
    
    //Addition
    { start: { x: 45, y: 238 }, end: { x: 380, y: 238 } },
    
];
const linePoints8 = [
    //Outline
    { start: { x: 45, y: 25 }, end: { x: 600, y: 25 } },
    { start: { x: 600, y: 25 }, end: { x: 600, y: 62 } },
    { start: { x: 600, y: 62 }, end: { x: 1060, y: 62 } },
    { start: { x: 1060, y: 62 }, end: { x: 1060, y: 25 } },
    { start: { x: 1060, y: 25 }, end: { x: 1425, y: 25 } },
    { start: { x: 1425, y: 25 }, end: { x: 1425, y: 715 } },
    { start: { x: 1425, y: 715 }, end: { x: 1125, y: 715 } },
    { start: { x: 1125, y: 715 }, end: { x: 1125, y: 400 } },
    { start: { x: 1125, y: 400 }, end: { x: 1060, y: 400 } },
    { start: { x: 1060, y: 400 }, end: { x: 1060, y: 62 } },
    { start: { x: 1060, y: 400 }, end: { x: 450, y: 400 } },
    { start: { x: 450, y: 400 }, end: { x: 450, y: 460 } },
    { start: { x: 450, y: 460 }, end: { x: 45, y: 460 } },
    { start: { x: 45, y: 460 }, end: { x: 45, y: 25 } },
    
    //4 servers on dining
    { start: { x: 1425, y: 220 }, end: { x: 1340, y: 220 } },
    { start: { x: 1340, y: 220 }, end: { x: 1340, y: 180 } },
    { start: { x: 1340, y: 180 }, end: { x: 1060, y: 180 } },
    { start: { x: 1425, y: 370 }, end: { x: 1160, y: 370 } },
    { start: { x: 1160, y: 370 }, end: { x: 1160, y: 180 } },
    { start: { x: 1425, y: 482 }, end: { x: 1320, y: 482 } },
    { start: { x: 1320, y: 482 }, end: { x: 1320, y: 400 } },
    { start: { x: 1320, y: 400 }, end: { x: 1210, y: 400 } },
    { start: { x: 1210, y: 400 }, end: { x: 1210, y: 615 } },
    { start: { x: 1210, y: 615 }, end: { x: 1125, y: 615 } },
    
    //Cove
    { start: { x: 775, y: 62 }, end: { x: 775, y: 400 } },
    
    //Bar including BB2
    { start: { x: 450, y: 400 }, end: { x: 380, y: 400 } },
    { start: { x: 380, y: 400 }, end: { x: 380, y: 25 } },
    
    //Addition
    { start: { x: 45, y: 238 }, end: { x: 228, y: 238 } },
    { start: { x: 228, y: 238 }, end: { x: 228, y: 150 } },
    { start: { x: 228, y: 150 }, end: { x: 380, y: 150 } },
    
];
const linePoints9 = [
    //Outline
    { start: { x: 45, y: 25 }, end: { x: 600, y: 25 } },
    { start: { x: 600, y: 25 }, end: { x: 600, y: 62 } },
    { start: { x: 600, y: 62 }, end: { x: 1060, y: 62 } },
    { start: { x: 1060, y: 62 }, end: { x: 1060, y: 25 } },
    { start: { x: 1060, y: 25 }, end: { x: 1425, y: 25 } },
    { start: { x: 1425, y: 25 }, end: { x: 1425, y: 715 } },
    { start: { x: 1425, y: 715 }, end: { x: 1125, y: 715 } },
    { start: { x: 1125, y: 715 }, end: { x: 1125, y: 400 } },
    { start: { x: 1125, y: 400 }, end: { x: 1060, y: 400 } },
    { start: { x: 1060, y: 400 }, end: { x: 1060, y: 62 } },
    { start: { x: 1060, y: 400 }, end: { x: 450, y: 400 } },
    { start: { x: 450, y: 400 }, end: { x: 450, y: 460 } },
    { start: { x: 450, y: 460 }, end: { x: 45, y: 460 } },
    { start: { x: 45, y: 460 }, end: { x: 45, y: 25 } },
    
    //4 servers on dining
    { start: { x: 1425, y: 220 }, end: { x: 1340, y: 220 } },
    { start: { x: 1340, y: 220 }, end: { x: 1340, y: 180 } },
    { start: { x: 1340, y: 180 }, end: { x: 1060, y: 180 } },
    { start: { x: 1425, y: 370 }, end: { x: 1160, y: 370 } },
    { start: { x: 1160, y: 370 }, end: { x: 1160, y: 180 } },
    { start: { x: 1425, y: 482 }, end: { x: 1320, y: 482 } },
    { start: { x: 1320, y: 482 }, end: { x: 1320, y: 400 } },
    { start: { x: 1320, y: 400 }, end: { x: 1210, y: 400 } },
    { start: { x: 1210, y: 400 }, end: { x: 1210, y: 615 } },
    { start: { x: 1210, y: 615 }, end: { x: 1125, y: 615 } },
    
    //Cove
    { start: { x: 775, y: 62 }, end: { x: 775, y: 400 } },
    
    //Bar including BB2
    { start: { x: 450, y: 400 }, end: { x: 380, y: 400 } },
    { start: { x: 380, y: 400 }, end: { x: 380, y: 25 } },
    
    //Addition
    { start: { x: 45, y: 320 }, end: { x: 130, y: 320 } },
    { start: { x: 130, y: 320 }, end: { x: 130, y: 415 } },
    { start: { x: 130, y: 415 }, end: { x: 270, y: 415 } },
    { start: { x: 270, y: 415 }, end: { x: 270, y: 320 } },
    { start: { x: 270, y: 320 }, end: { x: 380, y: 320 } },
    { start: { x: 45, y: 170 }, end: { x: 130, y: 170 } },
    { start: { x: 130, y: 170 }, end: { x: 130, y: 230 } },
    { start: { x: 130, y: 230 }, end: { x: 238, y: 230 } },
    { start: { x: 238, y: 230 }, end: { x: 238, y: 150 } },
    { start: { x: 238, y: 150 }, end: { x: 380, y: 150 } },
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

function drawLines(serverCount) {
    const canvas = document.getElementById('floorCanvas');
    const ctx = canvas.getContext('2d');
    if (serverCount == 4){
        const linesToDraw = linePoints4.slice(0, 100); // Get the first `serverCount` pairs
    
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        drawFloorLayout(); // Redraw the floor layout
    
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
    
        linesToDraw.forEach(line => {
            ctx.beginPath();
            ctx.moveTo(line.start.x, line.start.y); // Line start point
            ctx.lineTo(line.end.x, line.end.y); // Line end point
            ctx.stroke();
            ctx.closePath();
        });
    }
    else if (serverCount == 7){
        const linesToDraw = linePoints7.slice(0, 100); // Get the first `serverCount` pairs
    
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        drawFloorLayout(); // Redraw the floor layout
    
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
    
        linesToDraw.forEach(line => {
            ctx.beginPath();
            ctx.moveTo(line.start.x, line.start.y); // Line start point
            ctx.lineTo(line.end.x, line.end.y); // Line end point
            ctx.stroke();
            ctx.closePath();
        });
    }
    else if (serverCount==5){
        const linesToDraw = linePoints5.slice(0, 100); // Get the first `serverCount` pairs
    
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        drawFloorLayout(); // Redraw the floor layout
    
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
    
        linesToDraw.forEach(line => {
            ctx.beginPath();
            ctx.moveTo(line.start.x, line.start.y); // Line start point
            ctx.lineTo(line.end.x, line.end.y); // Line end point
            ctx.stroke();
            ctx.closePath();
        });
    }
    else if (serverCount == 6){
        const linesToDraw = linePoints6.slice(0, 100); // Get the first `serverCount` pairs
    
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        drawFloorLayout(); // Redraw the floor layout
    
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
    
        linesToDraw.forEach(line => {
            ctx.beginPath();
            ctx.moveTo(line.start.x, line.start.y); // Line start point
            ctx.lineTo(line.end.x, line.end.y); // Line end point
            ctx.stroke();
            ctx.closePath();
        });
    }
    else if (serverCount == 8){
        const linesToDraw = linePoints8.slice(0, 100); // Get the first `serverCount` pairs
    
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        drawFloorLayout(); // Redraw the floor layout
    
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
    
        linesToDraw.forEach(line => {
            ctx.beginPath();
            ctx.moveTo(line.start.x, line.start.y); // Line start point
            ctx.lineTo(line.end.x, line.end.y); // Line end point
            ctx.stroke();
            ctx.closePath();
        });
    }
    else if (serverCount == 9){
        const linesToDraw = linePoints9.slice(0, 100); // Get the first `serverCount` pairs
    
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        drawFloorLayout(); // Redraw the floor layout
    
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
    
        linesToDraw.forEach(line => {
            ctx.beginPath();
            ctx.moveTo(line.start.x, line.start.y); // Line start point
            ctx.lineTo(line.end.x, line.end.y); // Line end point
            ctx.stroke();
            ctx.closePath();
        });
    }
}


// Application initialization
function initialize() {
    drawFloorLayout();
    createButtons();
    drawLines(serverCount);
}

document.getElementById('submitServers').addEventListener('click', () => {
    const input = parseInt(document.getElementById('serverCount').value, 10);
    if (input > 3 && input <= buttonPositions.length) {
        serverCount = input;
        alert(`Number of servers: ${serverCount}`);
        hideModal();
        initialize(serverCount);
    } else {
        alert(`Please enter a valid number between 4 and 9.`);
    }
});

window.onload = () => {
    createButtons();
};