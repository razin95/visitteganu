
// Functionality to handle the navigation active state dynamically
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (currentPath.includes(link.getAttribute("href"))) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

// Search functionality
document.querySelector("form[role='search']").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    const searchQuery = this.querySelector("input[type='search']").value.trim().toLowerCase();

    if (searchQuery) {
        // Define a mapping of keywords to pages
        const pageMappings = {
            home: "home.html",
            about: "About.html",
            accommodation: "Accommodation.html",
            contact: "contact.html",
            destination: "Destination.html",
            events: "Events.html",
            heritage: "Cultural%20Heritage.html",
            cuisine: "Local%20Cuisine.html",
            stories: "Local%20Stories.html",
            tips: "traveltips.html"
        };

        // Check if the search query matches a key in pageMappings
        let matchedPage = null;
        for (const [key, page] of Object.entries(pageMappings)) {
            if (searchQuery.includes(key)) {
                matchedPage = page;
                break;
            }
        }

        // If a page is matched, redirect to it
        if (matchedPage) {
            alert(`Redirecting to: ${matchedPage}`);
            window.location.href = matchedPage;
        } else {
            alert(`No matching page found for: "${searchQuery}"`);
        }
    } else {
        alert("Please enter a search term!");
    }
});


// Scroll to top button functionality
const scrollToTopButton = document.createElement("button");
scrollToTopButton.innerText = "↑ Top";
scrollToTopButton.style.position = "fixed";
scrollToTopButton.style.bottom = "20px";
scrollToTopButton.style.right = "20px";
scrollToTopButton.style.padding = "10px";
scrollToTopButton.style.borderRadius = "50%";
scrollToTopButton.style.border = "none";
scrollToTopButton.style.backgroundColor = "#007BFF";
scrollToTopButton.style.color = "white";
scrollToTopButton.style.fontSize = "16px";
scrollToTopButton.style.cursor = "pointer";
scrollToTopButton.style.display = "none"; // Initially hidden
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show the scroll-to-top button when the user scrolls down
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Slideshow

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds


}

// Function to change the image and description based on the selected city
function changeImage(city) {
    let imagePath = '';
    let descriptionText = '';

    // Determine the image and description for the selected city
    switch(city) {
        case 'Kuala_Terengganu':
            imagePath = 'path/to/kuala_terengganu_image.jpg';
            descriptionText = 'Explore the capital of Terengganu, known for its rich culture and beautiful coastline.';
            break;
        case 'Kemaman':
            imagePath = 'path/to/kemaman_image.jpg';
            descriptionText = 'Kemaman is famous for its natural attractions and laid-back lifestyle.';
            break;
        case 'Redang_Island':
            imagePath = 'path/to/redang_island_image.jpg';
            descriptionText = 'Redang Island is known for its crystal-clear waters and coral reefs, a paradise for divers.';
            break;
        default:
            imagePath = 'Home/peta.gif';
            descriptionText = 'Click on a city to explore more!';
            break;
    }

    // Update the image and description on the webpage
    document.getElementById('mapImage').src = imagePath;
    document.getElementById('cityDescription').innerHTML = descriptionText;
}

// Get all the links in the navbar
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Get the current page URL
const currentPage = window.location.href;

// Loop through all nav links and add the 'active' class to the matching link
navLinks.forEach(link => {
    if (currentPage.includes(link.getAttribute('href'))) {
        link.classList.add('active');
    }
});

