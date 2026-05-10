// --- VARIABLES ---

// Strings

let noticeText =
`The page requested cannot be found.
Press ENTER to return to the home page.`

// --- DOCUMENT ---

// Properties

document.body.style.userSelect = 'none'; // Disable Text Selecting

// Website Size
document.body.style.width = "50%"; // Width
document.body.style.scale = "1.8"; // Scale

// Fit Elements on Screen
document.body.style.margin = "auto"; // Margin
document.body.style.alignContent = "center"; // Align
document.body.style.height = "1.5rem"; // Height

// Hide Scroll Bar
document.body.style.scrollbarWidth = "none";

// Style

document.body.style.fontFamily = "terminal"; // Font

document.body.style.backgroundColor = "black"; // BG Colour
document.body.style.color = "white"; // Text Colour

document.body.style.textAlign = "left"; // Align Text to Center

document.body.style.whiteSpace = "pre-wrap"; // Allow Multiple Lines in Text

// Initialize Objects

// Notice
var notice = document.createElement('p');
notice.innerHTML = noticeText;
notice.style.color = "red";

// Display Objects

document.body.appendChild(notice);

// Events

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        // Go to Home
        window.location.href = "./index";
    }
})