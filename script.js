const searchInput = document.getElementById('search-input');
const gameCards = document.querySelectorAll('.game-card');

// Real-time search filter
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        gameCards.forEach(card => {
            const title = card.getAttribute('data-title').toLowerCase();
            if (title.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Click alert for game buttons
document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const gameTitle = e.target.parentElement.querySelector('h3').textContent;
        alert(`Launching ${gameTitle}... Have fun playing!`);
    });
});