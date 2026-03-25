let siteHeader = `
<div id='topnav' align="center">
<ul class='list-inline'>
	<li class="list-inline-item" style="font-size: 28px;"><a href="https://chrisryczke.com#About">About Me</a></li>
	<li class="list-inline-item" style="font-size: 28px;"><a href="https://chrisryczke.com#Projects">Projects</a></li>
	<li class="list-inline-item" style="font-size: 28px;"><a href="./socials">Social Media</a></li>
	<li class="list-inline-item" style="font-size: 28px;"><a href="https://chrisryczke.com#Contacts">Contacts</a></li>
</ul>
</div>
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

// If on Desktop
if (window.matchMedia("(min-width: 768px)").matches) {
	// Move Navbar with Scroll
	window.onscroll = function() {scrollFunction()};
	var navBar = document.getElementById("topnav");

	function scrollFunction() {
	  if (document.body.scrollTop > 315 || document.documentElement.scrollTop > 315) {
		  navBar.classList.add("topnav-fixed");
	  } else {
		  navBar.classList.remove("topnav-fixed");
	  }
	} 
}