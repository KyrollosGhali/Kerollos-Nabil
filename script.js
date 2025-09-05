// Sequential float animation for .story ul li
document.addEventListener('DOMContentLoaded', function() {
	const storyList = document.querySelector('.story ul');
	if (storyList) {
		const items = Array.from(storyList.children);
		let current = 0;
		function showNext() {
			items.forEach((li, i) => li.classList.remove('active'));
			items[current].classList.add('active');
			setTimeout(() => {
				items[current].classList.remove('active');
				current = (current + 1) % items.length;
				showNext();
			}, 1800); // duration matches CSS animation
		}
		showNext();
	}
});
// Typewriter animation for info-box
const typewriterElement = document.getElementById('typewriter');
const typewriterTexts = [
	'Do you wanna technology make your life more easiest ?',
	'You are with the right one, in the right place'
];
let twIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
	const currentText = typewriterTexts[twIndex];
	if (!isDeleting) {
		typewriterElement.textContent = currentText.substring(0, charIndex + 1);
		charIndex++;
		if (charIndex === currentText.length) {
			setTimeout(() => { isDeleting = true; typeWriter(); }, 1500);
		} else {
			setTimeout(typeWriter, 60);
		}
	} else {
		typewriterElement.textContent = currentText.substring(0, charIndex - 1);
		charIndex--;
		if (charIndex === 0) {
			isDeleting = false;
			twIndex = (twIndex + 1) % typewriterTexts.length;
			setTimeout(typeWriter, 500);
		} else {
			setTimeout(typeWriter, 30);
		}
	}
}
if (typewriterElement) typeWriter();
// Smooth scroll for navigation links
document.querySelectorAll('.navbar ul a').forEach(link => {
	link.addEventListener('click', function(e) {
		const href = this.getAttribute('href');
		if (href.startsWith('#')) {
			e.preventDefault();
			document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
		}
	});
});

// Contact form validation and feedback
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
if (form) {
	form.addEventListener('submit', function(e) {
		e.preventDefault();
		const name = document.getElementById('contact-name').value;
		const email = document.getElementById('contact-email').value;
		const message = document.getElementById('contact-message').value;
		const mailtoLink = `mailto:kerollosnabil16@gmail.com?subject=Contact from ${encodeURIComponent(name)} (${encodeURIComponent(email)})&body=${encodeURIComponent(message)}`;
		window.location.href = mailtoLink;
		formMessage.textContent = 'Your email client should open. If not, please send your message to kerollosnabil16@gmail.com.';
		form.reset();
	});
}

// Responsive mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
	const menuIcon = document.getElementById('menu-icon');
	const navbarUl = document.querySelector('.navbar ul');
	if (menuIcon && navbarUl) {
		menuIcon.addEventListener('click', function() {
			if (navbarUl.classList.contains('collapsed')) {
				navbarUl.classList.remove('collapsed');
				navbarUl.classList.add('expanded');
			} else {
				navbarUl.classList.remove('expanded');
				navbarUl.classList.add('collapsed');
			}
		});
		// Collapse menu by default on small screens
		function handleResize() {
			if (window.innerWidth <= 600) {
				navbarUl.classList.add('collapsed');
				navbarUl.classList.remove('expanded');
			} else {
				navbarUl.classList.remove('collapsed');
				navbarUl.classList.remove('expanded');
			}
		}
		window.addEventListener('resize', handleResize);
		handleResize();
	}
});
    const icon = document.getElementById("menu-icon");
    const nav = document.getElementsByClassName("navbar");

    icon.addEventListener("click", () => {
      Array.from(nav).forEach(element => {
		if (element.style.display === "none" || getComputedStyle(element).display === "none") {
			element.style.zIndex = "100"; // bring it to the front
			element.style.transition = "all 0.3s ease"; // smooth transition
			element.style.display = "flex"; // show the navbar
			return;
		}
        element.style.zIndex = "-100"; // make it disappear behind other elements
		element.style.transition = "all 0.3s ease"; // smooth transition
		element.style.display = "none"; // hide the navbar
      });
    });