const username = "SuzzaS";
const tipButton = document.querySelector("#tip");
const tipDropdown = document.querySelector("#tip-dropdown");
const links = tipDropdown.querySelectorAll("a");

links[0].href = `https://cash.app/${username}`;
links[0].target = "_blank";
links[1].href = `https://venmo.com/${username}`;
links[1].target = "_blank";
links[2].href = `https://paypal.me/${username}`;
links[2].target = "_blank";
links[3].href = `https://ko-fi.com/${username}`;
links[3].target = "_blank";

tipButton.addEventListener("click", function() {
  tipDropdown.style.display = tipDropdown.style.display === "none" ? "block" : "none";
});