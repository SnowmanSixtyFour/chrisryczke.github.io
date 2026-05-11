// --- VARIABLES ---

// Strings

let noticeText =
`The page requested cannot be found.
Press ENTER to return to the home page.`

// --- DOCUMENT ---

// Style

document.body.style.textAlign = "left"; /* Align Text to Left */
document.body.style.width = "50%"; /* Change Width to Fit Text */

// Initialize Objects

// Notice
var notice = document.createElement('p');
notice.innerHTML = noticeText;
notice.style.color = "red";

// Display Objects

document.body.appendChild(notice);

// Events

document.addEventListener('keydown', function(event)
{
    if (event.key === 'Enter')
    {
        // Go to Home
        window.location.href = "./";
    }

    if (event.key === 'F3')
    {
        window.location.href = "./";
    }
})