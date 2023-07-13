
$(document).ready(function() {
	//make sure the page is ready befor running the scripts
	// This is the hamburger menu
	$(".hamburger").click(function(){

	  $(this).toggleClass('active');
	  $(".mobile-menu").fadeToggle();
		});

// put class of exit on elements to make them navigate back to page-nav
			$(".exit").click(function(){

				$(this).toggleClass('active');
				$(".page-nav").fadeToggle();
			});

			// end hamburger menu

			});

			// on scroll
			// on scroll
	function reveal() {
	let reveals = document.querySelectorAll(".reveal");

	for (let i = 0; i < reveals.length; i++) {
	let windowHeight = window.innerHeight;
	let elementTop = reveals[i].getBoundingClientRect().top;
	let elementVisible = 150;

	if (elementTop < windowHeight - elementVisible) {
	reveals[i].classList.add("active");
	} else {
	}
	}
	}

	window.addEventListener("scroll", reveal);

	// Get the modal element
var modal = document.getElementById("myModal");

// Get the close button
var closeButton = document.getElementsByClassName("close")[0];

// Show the modal after a delay of 5 seconds
function showModal() {
  modal.style.display = "block";
}

setTimeout(showModal, 1500); // Delay in milliseconds (1.5 seconds)

// Hide the modal when close button is clicked
closeButton.onclick = function () {
  modal.style.display = "none";
}

// Hide the modal when clicked outside the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// 			if (window.inEditorMode) {
//   alert('Inside CloudCannon!');
// } else {
//   alert('Not in CloudCannon.');
// }
