function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
}
function displayPhotos(photos) {

    const photoContainer = document.getElementById('photos')
    for (const photo of photos) {
        const div = document.createElement('div')
        div.innerHTML = `
        <h3>${photo.title}</h3>
        <img src="https://via.placeholder.com/600/92c952" alt="">
        `
        photoContainer.appendChild(div)
    }
}