const blinkingText = document.getElementById('blinkingText');

let isVisible = true;

function toggleVisibility() {
    isVisible = !isVisible; // Toggle the boolean value
    blinkingText.style.display = isVisible ? 'block' : 'none'; // Show or hide the text
}
setInterval(toggleVisibility, 1000);
