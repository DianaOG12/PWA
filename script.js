document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');

    fetch('https://jsonplaceholder.typicode.com/photos?_limit=16')
        .then(response => response.json())
        .then(data => {
            data.forEach(photo => {
                const item = document.createElement('div');
                item.classList.add('gallery-item');
                item.innerHTML = `
                    <img src="${photo.thumbnailUrl}" alt="${photo.title}">
                    <p>${photo.title}</p>
                `;
                item.addEventListener('click', () => {
                    window.location.href = `photo.html?id=${photo.id}`;
                });
                gallery.appendChild(item);
            });
        });
});
