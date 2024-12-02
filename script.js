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

const linePoints1 = [
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
        { start: { x: 1125, y: 400 }, end: { x: 1425, y: 400 } },
        
        //Bar including BB2
        { start: { x: 450, y: 400 }, end: { x: 380, y: 400 } },
        { start: { x: 380, y: 400 }, end: { x: 380, y: 25 } },
]

const linePoints2 = [
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
        

]

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

const predefinedCoordinates = [
    { x: 1475, y: 100 }, // For server name 1
    { x: 500, y: 200 }, // For server name 2
    { x: 1475, y: 700 }, // For server name 3
    { x: 1475, y: 320 }, // For server name 4
    { x: 900, y: 300 }, // For server name 5
    { x: 1475, y: 450 }, // For server name 6
    { x: 100, y: 500 }, // For server name 7
    { x: 250, y: 120 }, // For server name 8
    { x: 290, y: 300 }  // For server name 9
];
const predefinedCoordinates7 = [
    { x: 1475, y: 100 }, // For server name 1
    { x: 500, y: 200 }, // For server name 2
    { x: 1475, y: 700 }, // For server name 3
    { x: 1475, y: 320 }, // For server name 4
    { x: 900, y: 300 }, // For server name 5
    { x: 200, y: 200 }, // For server name 6
    { x: 100, y: 520 }, // For server name 7
];

let serverCount = 0;

let labelPositions = [
    { name: "Server 1", x: 1475, y: 100 },
    { name: "Server 2", x: 500, y: 200 },
    { name: "Server 3", x: 1475, y: 700 },
    { name: "Server 4", x: 1475, y: 320 },
    { name: "Server 5", x: 900, y: 300 },
    { name: "Server 6", x: 1475, y: 450 },
    { name: "Server 7", x: 100, y: 500 },
    { name: "Server 8", x: 250, y: 120 },
    { name: "Server 9", x: 290, y: 300 }
];

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
    else if (serverCount == 1){
        const linesToDraw = linePoints1.slice(0, 100); // Get the first `serverCount` pairs
    
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
    else if (serverCount == 2){
        const linesToDraw = linePoints2.slice(0, 100); // Get the first `serverCount` pairs
    
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

let serverNames = [];

function showNamesModal(count) {
    const namesContainer = document.getElementById('namesContainer');
    namesContainer.innerHTML = ''; // Clear previous inputs

    for (let i = 0; i < count; i++) {
        const label = document.createElement('label');
        label.textContent = `Server ${i + 1} Name:`;
        const input = document.createElement('input');
        input.type = 'text';
        input.id = `serverName${i}`;
        input.placeholder = `Enter name for Server ${i + 1}`;
        namesContainer.appendChild(label);
        namesContainer.appendChild(input);
        namesContainer.appendChild(document.createElement('br'));
    }

    document.getElementById('serverNamesModal').style.display = 'flex';
}

function hideNamesModal() {
    document.getElementById('serverNamesModal').style.display = 'none';
    document.getElementById('canvas-container').style.display = 'block';
}

function drawLabels(labelPositions) {
    const canvas = document.getElementById('floorCanvas');
    const ctx = canvas.getContext('2d');

    ctx.font = '20px Arial';
    ctx.fillStyle = 'red';
    ctx.textAlign = 'center';

    labelPositions.forEach(label => {
        ctx.fillText(label.name, label.x, label.y); // Draw the name at (x, y)
    });
}

function assignCoordinates(names, serverCount) {
    return names.map((name, index) => {
        // Handle the special case for server count 7 and server 6
        if (serverCount === 7 && index === 5) {
            return {
                name: name,
                x: 240, // Special x-coordinate for server 6
                y: 160  // Special y-coordinate for server 6
            };
        }

        // Default behavior for all other labels
        return {
            name: name,
            x: predefinedCoordinates[index].x,
            y: predefinedCoordinates[index].y
        };
    });
}

document.getElementById('submitNames').addEventListener('click', () => {
    serverNames = [];
    const inputs = document.querySelectorAll('#namesContainer input');
    inputs.forEach(input => {
        serverNames.push(input.value.trim());
    });

    if (serverNames.some(name => name === '')) {
        alert('Please fill in all server names.');
        return;
    }

    try {
        const labelPositions = assignCoordinates(serverNames, serverCount); // Pass server count
        hideNamesModal();
        initialize(serverCount, labelPositions); // Pass positions to initialize
    } catch (error) {
        alert(error.message);
    }
});

document.getElementById('submitServers').addEventListener('click', () => {
    const input = parseInt(document.getElementById('serverCount').value, 10);
    if (input >= 4 && input <= 9) {
        serverCount = input;
        hideModal();
        showNamesModal(serverCount);
    } else {
        alert(`Please enter a valid number between 4 and 9.`);
    }
});

document.getElementById('resetButton').addEventListener('click', () => {
    resetProgram();
});

function resetProgram() {
    // Reset server-related variables
    serverCount = 0;
    serverNames = [];
    document.getElementById('namesContainer').innerHTML = '';

    // Clear the canvas
    const canvas = document.getElementById('floorCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Reset button states
    const controlsDiv = document.getElementById('controls');
    controlsDiv.innerHTML = '';

    // Hide the canvas container and show the modal
    document.getElementById('canvas-container').style.display = 'none';
    showModal();
}

document.getElementById('resetButton').addEventListener('click', () => {
    if (confirm("Are you sure you want to reset? This will clear all progress.")) {
        resetProgram();
    }
});

function positionResetButton(x, y) {
    const resetButton = document.getElementById('resetButton');
    resetButton.style.left = `${x}px`; // Set X position
    resetButton.style.top = `${y}px`; // Set Y position
}

// Call this function during initialization or as needed
positionResetButton(100, 650); // Example: Place the Reset button at (300, 500)

function positionFirstCutButton(x, y) {
    const firstCutButton = document.getElementById('firstCutButton');
    firstCutButton.style.left = `${x}px`; // Set X position
    firstCutButton.style.top = `${y}px`; // Set Y position
}

// Set the button's position on the grid
positionFirstCutButton(100, 550); // Place "First Cut" button at (100, 500)

function positionSecondCutButton(x, y) {
    const secondCutButton = document.getElementById('secondCutButton');
    secondCutButton.style.left = `${x}px`; // Set X position
    secondCutButton.style.top = `${y}px`; // Set Y position
}

// Set the button's position on the grid
positionSecondCutButton(100, 600); // Place "First Cut" button at (100, 500)


document.getElementById('firstCutButton').addEventListener('click', () => {
    deleteSpecificLabels(1);
});

document.getElementById('secondCutButton').addEventListener('click', () => {
    deleteSpecificLabels(2);
});

function deleteSpecificLabels(cut) {
    const canvas = document.getElementById('floorCanvas');
    const ctx = canvas.getContext('2d');

    let labelsToKeep; // Declare outside the blocks

    if (cut === 1) {
        labelsToKeep = [0, 1, 2, 6]; // Indices to keep for the first cut
    } else if (cut === 2) {
        labelsToKeep = [0, 1]; // Indices to keep for the second cut
    } else {
        console.error("Invalid cut parameter");
        return;
    }

    // Ensure `labelPositions` exists and has valid data
    if (!Array.isArray(labelPositions) || labelPositions.length === 0) {
        console.error("No labels found to process.");
        return;
    }

    // Filter labels to keep only the specified ones
    const remainingLabels = labelPositions.filter((_, index) => labelsToKeep.includes(index));

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Redraw the floor layout
    drawFloorLayout();

    // Draw the custom lines based on the cut type
    drawCustomLines(cut);

    // Redraw the remaining labels
    drawLabels(remainingLabels);

    // Update the global `labelPositions` to reflect the remaining labels
    labelPositions = remainingLabels;

    console.log(`Remaining labels after Cut ${cut}:`, labelPositions);
}

function drawCustomLines(cut) {
    if (cut === 1) {
        drawLines(1); // Draw lines for the first cut
    } else if (cut === 2) {
        drawLines(2); // Draw lines for the second cut
    }
}



// Application initialization
function initialize(serverCount, initialLabelPositions) {
    labelPositions = initialLabelPositions; // Set the global label positions
    drawFloorLayout(); // Draw the base layout
    createButtons(); // Create interactive buttons
    drawLines(serverCount); // Draw server-specific lines
    drawLabels(labelPositions); // Draw initial labels
    positionResetButton(100, 650); // Place Reset button
    positionFirstCutButton(100, 550); // Place First Cut button
    positionSecondCutButton(100, 600); // Place First Cut button
}



window.onload = () => {
    createButtons(); // Initializes the buttons
    showModal();     // Display the server count modal when the page loads
};