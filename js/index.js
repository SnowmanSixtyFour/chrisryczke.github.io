// --- VARIABLES ---

// Strings

let menuText =
`Menu      Utilities      Compilers      Options      Status      Help`;

let headerText =
` CCC  H   H RRRR  III  SSSS       RRRR  Y   Y  CCC  ZZZZZ K   K EEEEE
C   C H   H R   R  I  S           R   R  Y Y  C   C    Z  K  K  E    
C     HHHHH RRRR   I   SSS        RRRR    Y   C       Z   KKK   EEEE 
C   C H   H R  R   I      S       R  R    Y   C   C  Z    K  K  E    
 CCC  H   H R   R III SSSS        R   R   Y    CCC  ZZZZZ K   K EEEEE`;

let helpText =
` F1=Help         F2=Split         F3=Exit               F7=Backward        F8=Forward
F10=Actions     F12=Cancel`;

let pageHome =
`Software Engineer`;
let page0 =
`I have been fascinated by technology ever since I was a child.

With experience in object-oriented programming and web development, along with being fast at keyboard typing, I am a skilled software engineer.
Specializing in both front-end and back-end development.

I am still building my skills, currently studying IBM Mainframe and the COBOL language, using the TN 3270 terminal.`

// --- DOCUMENT ---

// Initialize Objects

// Above Header (Fake Options)
var menu = document.createElement('p');
menu.innerHTML = menuText;
menu.style.color = "cornflowerblue";

// Header
var header = document.createElement('p');
header.innerHTML = headerText;
header.style.whiteSpace = "pre"; // Prevent Breaking when Window Resized

// Separator
var separator = document.createElement('div');

separator.style.height = '1px';
separator.style.backgroundColor = 'cornflowerblue';

// Page

var currentPage = document.createElement('p'); // Page Text
currentPage.innerHTML = pageHome;

// Choices
var choices = document.createElement('p');
choices.innerHTML =
`0 <span class=choice>About Me</span>
1 <span class=choice>Projects</span>
    2 <span class=choice>Social Media</span>
3 <span class=choice>Contacts</span>`;

// Option

var optionDiv = document.createElement('div');
optionDiv.style.display = "flex";
optionDiv.style.whiteSpace = "nowrap";

optionDiv.style.color = "lime";

var optionPrefix = document.createElement('span');
optionPrefix.innerHTML = "Option ===>";

var option = document.createElement('input');
option.style.width = "100%";

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

document.body.appendChild(separator);
document.body.appendChild(header);
document.body.appendChild(separator.cloneNode(true));

document.body.appendChild(currentPage);
document.body.append(choices);

document.body.appendChild(optionDiv);

optionDiv.appendChild(optionPrefix);
optionDiv.appendChild(option);

document.body.appendChild(help);

document.body.appendChild(copyright);

// Events

document.addEventListener('keydown', function(event)
{
    if (event.key === 'Enter')
    {
        // Go to Selected Page
        if (option.value === "0") currentPage.innerHTML = page0;
        if (option.value === "2") window.location.href = "./socials";

        // Reset Option
        option.value = "";
    }
})