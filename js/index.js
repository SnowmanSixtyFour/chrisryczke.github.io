// --- VARIABLES ---

// Strings
let headerText =
` CCC  H   H RRRR  III  SSSS       RRRR  Y   Y  CCC  ZZZZZ K   K EEEEE
C   C H   H R   R  I  S           R   R  Y Y  C   C    Z  K  K  E    
C     HHHHH RRRR   I   SSS        RRRR    Y   C       Z   KKK   EEEE 
C   C H   H R  R   I      S       R  R    Y   C   C  Z    K  K  E    
 CCC  H   H R   R III SSSS        R   R   Y    CCC  ZZZZZ K   K EEEEE`;

// --- DOCUMENT ---

// Properties

document.body.style.userSelect = 'none'; // Disable Text Selecting

// Style

document.body.style.fontFamily = "monospace"; // Font

document.body.style.backgroundColor = "black"; // BG Colour
document.body.style.color = "white"; // Text Colour

document.body.style.textAlign = "center"; // Align Text to Center

// Events


// Initialize Objects

// Header
var header = document.createElement('p');

// Separator
var separator = document.createElement('div');

separator.style.height = '1px';
separator.style.backgroundColor = 'white';

// Option
var optionPrefix = document.createElement('span');

var option = document.createElement('input');

option.type = "text";
option.id = "option";
option.style.borderBottom = "1px solid white"; // Line

// Set Objects

header.innerHTML = headerText;
header.style.whiteSpace = "pre";

optionPrefix.innerHTML = "Option ";

// Display Objects

// Text
document.body.appendChild(separator);
document.body.appendChild(header);
document.body.appendChild(separator.cloneNode(true));

// Option
document.body.appendChild(optionPrefix);
document.body.appendChild(option);