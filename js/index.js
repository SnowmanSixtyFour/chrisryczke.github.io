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
`  F1=Help         F2=Split         F3=Exit                  F7=Backward      F8=Forward
 F10=Actions     F12=Cancel                                                            `;

// --- DOCUMENT ---

// Properties

document.body.style.userSelect = 'none'; // Disable Text Selecting

// Website Size
document.body.style.width = "57%"; // Width
document.body.style.scale = "1.7"; // Scale

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

document.body.style.textAlign = "center"; // Align Text to Center

document.body.style.whiteSpace = "pre"; // Allow Multiple Lines in Text

// Initialize Objects

// Above Header
var menu = document.createElement('p');
menu.innerHTML = menuText;
menu.style.color = "cornflowerblue";

// Header
var header = document.createElement('p');
header.innerHTML = headerText;

// Separator
var separator = document.createElement('div');

separator.style.height = '1px';
separator.style.backgroundColor = 'cornflowerblue';

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
optionPrefix.innerHTML = "Option ===> ";

var option = document.createElement('input');
option.type = "text";
option.id = "option";
option.style.borderBottom = "1px solid cyan"; // Line
option.style.width = "100%"; // Set Width to Size

var help = document.createElement('p');
help.innerHTML = helpText;
help.style.color = "cornflowerblue";

// Copyright
var copyright = document.createElement('p');
copyright.innerHTML = `&copy; 2026 Chris Ryczke`;

// Display Objects

document.body.appendChild(menu);

document.body.appendChild(separator);
document.body.appendChild(header);
document.body.appendChild(separator.cloneNode(true));

document.body.append(choices);

document.body.appendChild(optionDiv);

optionDiv.appendChild(optionPrefix);
optionDiv.appendChild(option);

document.body.appendChild(help);

document.body.appendChild(copyright);