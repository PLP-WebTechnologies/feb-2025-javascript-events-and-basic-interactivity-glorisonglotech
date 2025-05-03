const clickButton = document.getElementById('clickButton');
clickButton.addEventListener('click', () => {
    alert("Welcome to the interactive page!");
});

const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.backgroundColor = "blue";
    hoverBox.style.color = 'white';
});
hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = "lightgray";
    hoverBox.style.color = 'blue';
});

document.getElementById('keypressInput').addEventListener('keypress', (event) => {
    console.log(`You pressed: ${event.key}`);
});

const doubleClickButton = document.getElementById('doubleClickButton');
doubleClickButton.addEventListener('dblclick', () => {
    alert("Double-click action detected!");
});

document.getElementById('toggleButton').addEventListener('click', () => {
    const text = document.getElementById('toggleText');
    text.textContent = text.textContent === 'Hello, World!' ? 'Goodbye, World!' : 'Hello, World!';
});

const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let currentImageIndex = 0;

document.getElementById('prevImage').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('galleryImage').src = images[currentImageIndex];
});

document.getElementById('nextImage').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('galleryImage').src = images[currentImageIndex];
});

document.querySelectorAll('.tabButton').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        document.querySelectorAll('.tabContent').forEach(content => content.style.display = 'none');
        document.getElementById(`tabContent${tabId}`).style.display = 'block';
    });
});

document.getElementById('validationForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    if (!name || !email || password.length < 8) {
        document.getElementById('formFeedback').textContent = 'Please ensure all fields are filled out correctly.';
    } else {
        document.getElementById('formFeedback').textContent = 'Your form has been submitted successfully!';
    }
});