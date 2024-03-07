document.addEventListener("DOMContentLoaded", function() {
    // Typing animation for "web developer" and "Crypto Trading"
    setTimeout(typeText, 2000); // Start typing after 2 seconds
});

function typeText() {
    var textElement = document.querySelector('.tagline');
    var firstText = "I am into web development";
    var secondText = "Ex Crypto Trader";
    var speed = 100; // Typing speed in milliseconds

    typeHelper(textElement, firstText, secondText, speed);
}

function typeHelper(element, firstText, secondText, speed) {
    var i = 0;
    var isDeleting = false;
    var text = firstText;

    function type() {
        var currentText = isDeleting ? text.substring(0, i - 1) : text.substring(0, i + 1);
        element.innerHTML = currentText;

        if (!isDeleting && i === text.length) {
            if (text === firstText) {
                setTimeout(function() {
                    isDeleting = true;
                }, 2000); // Wait 2 seconds before deleting
            } else {
                return; // Exit the function, text stays solid after "Ex Crypto Trader"
            }
        } else if (isDeleting && currentText === '') {
            isDeleting = false;
            i = 0;
            if (text === firstText) {
                text = secondText;
            } else {
                setTimeout(type, speed * 2); // Wait longer before typing again
                return;
            }
        } else {
            i += isDeleting ? -1 : 1;
        }
        setTimeout(type, speed);
    }

    setTimeout(type, speed);
}

// Change color of navigation tabs on hover
var tabs = document.querySelectorAll('.navigation a');

tabs.forEach(function(tab) {
    tab.addEventListener('mouseover', function() {
        tab.style.color = '#00f'; // Blue color
        tab.style.textDecoration = 'underline';
    });

    tab.addEventListener('mouseout', function() {
        tab.style.color = '#000'; // Default color
        tab.style.textDecoration = 'none';
    });
});

// Glow effect for social media icons

// Glow effect for about me icon
var aboutMeTab = document.querySelector('.about-me');

aboutMeTab.addEventListener('mouseover', function() {
    aboutMeTab.style.boxShadow = '0 0 20px #00f';
});

aboutMeTab.addEventListener('mouseout', function() {
    aboutMeTab.style.boxShadow = 'none';
});
 // Flip animation for circular image on hover
var image = document.querySelector('.animated-image');
var isFlipped = false;

image.addEventListener('mouseenter', function() {
    if (!isFlipped) {
        image.classList.add('flip-animation');
        isFlipped = true;
    }
});

image.addEventListener('mouseleave', function() {
    if (isFlipped) {
        image.classList.remove('flip-animation');
        isFlipped = false;
    }
});
