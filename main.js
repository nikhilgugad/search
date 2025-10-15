const searchBox = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchBtn');
const appsDropdown = document.querySelector('#appsDropdown');
const appsBtn = document.querySelector('#appsBtn');
const aiBtn = document.querySelector('#aiBtn');


searchBtn.addEventListener('click', () => {
    const query = searchBox.value.trim();
    if (query) {
        window.location.href = 'https://yandex.com/search/?text=' + encodeURIComponent(query);
    }
});

searchBox.addEventListener('keypress', (e) => {
    const query = searchBox.value.trim();
    if (e.key == "Enter" && e.ctrlKey == false) {
        window.location.href = 'https://yandex.com/search/?text=' + encodeURIComponent(query);
    }
});

aiBtn.addEventListener('click', () => {
    const query = searchBox.value.trim();
    if (query) {
        window.open('https://www.perplexity.ai/search?q=' + encodeURIComponent(query), '_blank').focus();
    }
});

document.addEventListener('keydown', (e) => {
    const query = searchBox.value.trim();
    if (e.ctrlKey == true && e.key == 'Enter') {
        window.open('https://www.perplexity.ai/search?q=' + encodeURIComponent(query), '_blank').focus();
    }
});

appsBtn.addEventListener('click', (e) => {
    appsDropdown.classList.remove('opacity-0');
    appsDropdown.classList.add('opacity-100');
    appsDropdown.style.height = '400px';
    e.stopPropagation();
});

document.addEventListener('click', (e) => {
    if (!appsDropdown.contains(e.target) && !appsBtn.contains(e.target)) {
        appsDropdown.classList.add('opacity-0');
        appsDropdown.classList.remove('opacity-100');
        appsDropdown.style.height = '0px';
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key == 'Escape') {
        appsDropdown.classList.add('opacity-0');
        appsDropdown.classList.remove('opacity-100');
        appsDropdown.style.height = '0px';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey == true && e.key == ' ') {
        appsDropdown.classList.remove('opacity-0');
        appsDropdown.classList.add('opacity-100');
        appsDropdown.style.height = '400px';
    }
});

