const menuBtn = document.querySelector('.center');
const sidebar = document.querySelector('.sidebar');

let isOpen = false;

menuBtn.addEventListener('click', () => {
    if (isOpen) {
        sidebar.classList.remove('open'); // Hide sidebar with animation
        menuBtn.textContent = '☰'; // Change to hamburger
    } else {
        sidebar.classList.add('open'); // Show sidebar with animation
        menuBtn.textContent = '✖'; // Change to cross
    }
    isOpen = !isOpen;
});
