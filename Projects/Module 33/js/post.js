function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
function displayPosts(data) {
    const postContainer = document.getElementById('posts')
    for (const post of data) {
        const div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
        postContainer.appendChild(div)
    }
}