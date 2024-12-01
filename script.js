const canvas = document.getElementById('floorCanvas');
const ctx = canvas.getContext('2d');

// Draw initial layout
function drawLayout() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(100, 100, 200, 100); // Example block
    ctx.fillRect(400, 100, 200, 100); // Example block
    ctx.fillText('Station 1', 150, 150);
    ctx.fillText('Station 2', 450, 150);
}

// Button logic
const buttons = document.querySelectorAll('.station-button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const target = e.target;
        const isActive = target.classList.contains('active');
        
        if (isActive) {
            target.classList.remove('active');
            target.style.backgroundColor = 'lightgray';
        } else {
            target.classList.add('active');
            target.style.backgroundColor = 'green';
        }
    });
});

// Reset functionality
document.querySelector('.reset-button').addEventListener('click', () => {
    buttons.forEach(button => {
        button.classList.remove('active');
        button.style.backgroundColor = 'lightgray';
    });
    drawLayout();
});

// Initialize
drawLayout();
