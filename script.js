let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;
const backgroundMusic = document.getElementById('background-music');
const startButton = document.getElementById('startButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

document.addEventListener('DOMContentLoaded', () => {
    pages[currentPage].classList.add('active');
});

function start() {
    startButton.style.display = 'none';
    prevButton.style.display = 'inline-block';
    nextButton.style.display = 'inline-block';
    playMusic();
}

function nextPage() {
    if (currentPage < totalPages - 1) {
        pages[currentPage].classList.remove('active');
        currentPage++;
        pages[currentPage].classList.add('active');
    }
}

function prevPage() {
    if (currentPage > 0) {
        pages[currentPage].classList.remove('active');
        currentPage--;
        pages[currentPage].classList.add('active');
    }
}

function playMusic() {
    backgroundMusic.play().catch(error => {
        console.error("Background music play failed:", error);
    });
}
