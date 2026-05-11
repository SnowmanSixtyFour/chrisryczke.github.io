// --- VARIABLES ---

// Strings

let headerText =
` SSSSS  NN   NN  OOOOO  WW      WW MM    MM   AAA   NN   NN   666       44   
SS      NNN  NN OO   OO WW      WW MMM  MMM  AAAAA  NNN  NN  66        444   
 SSSSS  NN N NN OO   OO WW   W  WW MM MM MM AA   AA NN N NN 666666   44  4   
     SS NN  NNN OO   OO  WW WWW WW MM    MM AAAAAAA NN  NNN 66   66 44444444 
 SSSSS  NN   NN  OOOO0    WW   WW  MM    MM AA   AA NN   NN  66666     444   `;

let helpText =
`F3=Exit`;

let subtitleText =
`Content Creator`;

// --- DOCUMENT ---

// Initialize Objects

// --- Navigator Bar ---

var menu = document.createElement('span');
menu.style.color = "cornflowerblue";
menu.innerHTML =
`
`;

// About Me
var aboutButton = document.createElement('a');
aboutButton.innerHTML = "About Me   ";
aboutButton.href = "./";

// Projects
var projectsButton = document.createElement('a');
projectsButton.innerHTML = "Projects   ";
projectsButton.href = "./";

// Social Media
var socialsButton = document.createElement('a');
socialsButton.innerHTML = "Social Media   ";
socialsButton.href = "./socials";

// Contacts
var contactsButton = document.createElement('a');
contactsButton.innerHTML =
`Contacts
 `;
contactsButton.href = "./";

// Header
var header = document.createElement('p');
header.innerHTML = headerText;
header.style.whiteSpace = "pre"; // Prevent Breaking when Window Resized

// Separator
var separator = document.createElement('div');

separator.style.height = '1px';
separator.style.backgroundColor = 'cornflowerblue';

// Page

var subtitle = document.createElement('p'); // Page Text
subtitle.innerHTML = subtitleText;
subtitle.style.color = "lime";

var about = document.createElement('div');
about.style.display = "inline";

var aboutText1 = document.createElement('span');
aboutText1.innerHTML =
`Snowman64 is my gaming-centered YouTube channel and online persona.

I had begun professionally working on it after my first `;

var aboutLink = document.createElement('a');
aboutLink.innerHTML =
`Minecraft video`;
aboutLink.href = "https://www.youtube.com/watch?v=9ANnCBZbtYg";
aboutLink.target = "_blank"; // Open Link in New Window

var aboutText2 = document.createElement('span');
aboutText2.innerHTML =
` released.

Since then, I've made hundreds of videos, gained over 15K subscribers, and had a lot of fun gaming and connecting with my audience.

Fun fact; Snowman64 is the name of both my online persona AND my GitHub account!
 `;

// Help (Fake Options)
var help = document.createElement('p');
help.innerHTML = helpText;
help.style.color = "cornflowerblue";

help.style.display = 'flex'; // Put Text in Center of Doc
help.style.justifyContent = 'center'; // Center Text Content
help.style.textAlign = 'left'; // Align to Left

// Copyright
var copyright = document.createElement('p');
copyright.innerHTML = `&copy; 2026 Chris Ryczke`;

// Display Objects

document.body.appendChild(menu);

menu.appendChild(aboutButton);
menu.appendChild(projectsButton);
menu.appendChild(socialsButton);
menu.appendChild(contactsButton);

document.body.appendChild(separator);
document.body.appendChild(header);
document.body.appendChild(separator.cloneNode(true));

document.body.appendChild(subtitle);
document.body.appendChild(about);

document.body.appendChild(separator.cloneNode(true));
document.body.appendChild(help);

document.body.appendChild(copyright);

// About
about.appendChild(aboutText1);
about.appendChild(aboutLink);
about.appendChild(aboutText2);

// Events

document.addEventListener('keydown', function(event)
{
    if (event.key === 'F1')
    {
        event.preventDefault();
    }
    if (event.key === 'F2')
    {
        event.preventDefault();
    }

    /* F3 (Exit) */
    if (event.key === 'F3')
    {
        event.preventDefault();

        // Go to Home
        window.location.href = "./";
    }

    if (event.key === 'F7')
    {
        event.preventDefault();
    }
    if (event.key === 'F8')
    {
        event.preventDefault();
    }
    if (event.key === 'F10')
    {
        event.preventDefault();
    }
    if (event.key === 'F12')
    {
        event.preventDefault();
    }
})