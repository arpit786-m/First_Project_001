let balloon = document.getElementById("balloon");
let pump = document.getElementById("pump");

let size = 1;
let isFloating = false;
let floatInterval;

pump.addEventListener("click", function() {
    if (!isFloating) {
        size += 0.2; 
        balloon.style.transform = `scale(${size})`;

        if (size >= 2) {
            startFloating();
        }
    }
});

function startFloating() {
    isFloating = true;
    let yPos = 50;
    
    floatInterval = setInterval(() => {
        if (yPos > 500) {
            clearInterval(floatInterval);
        } else {
            yPos += 3;
            balloon.style.transform = `scale(${size}) translateY(-${yPos}px)`;
        }
    }, 50);
}

balloon.addEventListener("click", function() {
    if (isFloating) {
        clearInterval(floatInterval);
        balloon.style.display = "none"; // Burst effect
        alert("Balloon Burst!");
    }
});