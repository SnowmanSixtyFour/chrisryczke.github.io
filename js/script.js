let siteHeader = `
<h2 align="center"><a href="index#About">About Me</a> | <a href="index#Projects">Projects</a> | <a href="./socials">Social Media</a> | <a href="index#Contacts">Contacts</a></h2>
`;
let siteFooter = `
<footer>
	<p align="center">&copy; 2026 Chris Ryczke</p>
</footer>
`;

// Global
document.querySelector('#siteHeader').insertAdjacentHTML('beforeend', siteHeader);
document.querySelector('#siteFooter').insertAdjacentHTML('beforeend', siteFooter);

function copyUrl() {
  // Website URL
  let url = "https://www.chrisryzcke.com";

   // Copy the URL
  navigator.clipboard.writeText(url);

  // Alert Copy
  alert("Copied this page to the clipboard!");
}