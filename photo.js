document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const photoId = urlParams.get('id');
    const photoDetail = document.getElementById('photo-detail');

    fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
        .then(response => response.json())
        .then(photo => {
            photoDetail.innerHTML = `
                <div style="display: flex; align-items: center;">
                    <img src="${photo.url}" alt="${photo.title}" style="max-width: 50%;">
                    <div style="padding: 20px;">
                        <h2>${photo.title}</h2>
                        <p>${photo.title}</p>
                    </div>
                </div>
            `;
        });
});
