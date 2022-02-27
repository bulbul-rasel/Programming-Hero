document.getElementById('spinner').style.display = 'block'
fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then(res => res.json())
    .then(data => displayPhoto(data))

const displayPhoto = photos => {
    photos.forEach(photo => {
        console.log(photo);
        const cardContainer = document.getElementById('card-container')
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="col">
          <div class="card">
            <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${photo.title}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button onclick="loadPhoto(${photo.id})" class="btn btn-success mx-auto">Load Photo</button>
              </div>
          </div>
        </div>
        `
        cardContainer.appendChild(div)
    })
    document.getElementById('spinner').style.display = 'none'
}

const loadPhoto = (id) => {
    console.log(id);
    const url = `https://jsonplaceholder.typicode.com/photos`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySingle(data[0]))

    document.getElementById('photo-Container').innerHTML = ''
}
const displaySingle = (ids) => {
    const photoContainer = document.getElementById('photo-Container')
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
            <img src="${ids.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${ids.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
            </div>
        </div>
    `
    photoContainer.appendChild(div)
}