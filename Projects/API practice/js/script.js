//with button 
const loadComment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => displayComment(data))
}

// //with button 
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(data => displayComment(data))

const displayComment = comments => {

    const commentContainer = document.getElementById('comments')
    const first2comment = comments.slice(0, 2)

    comments.forEach(comment => {
        const div = document.createElement('div')
        div.innerHTML = `
        <p>${comment.body} </p>
        `
        commentContainer.appendChild(div)
    })
    // using for loop 
    // for (const comment of first2comment) {
    //     const div = document.createElement('div')
    //     div.innerHTML = `
    //     <p>${comment.body} </p>
    //     `
    //     commentContainer.appendChild(div)
    // }
}