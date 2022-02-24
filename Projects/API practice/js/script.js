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
    console.log(comments);
    const commentContainer = document.getElementById('comments')
    const first20comment = comments.slice(0, 20)

    first20comment.forEach(comment => {
        const div = document.createElement('div')
        div.innerHTML = `
        <p>${comment.body} </p>
        <button onClick="loadEmail('${comment.id}')">Find Email</button>
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

const loadEmail = (comment) => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${comment}`)
        .then(response => response.json())
        .then(data => displayEmail(data))
}
const displayEmail = emails => {
    console.log(emails);
    const emailContainer = document.getElementById('emails')
    emailContainer.innerHTML = `
    <h3>${emails.id} </h3>
    <h5>${emails.name} </h5>
    <p>${emails.email} </p>
    `


    // // const first20comment = comments.slice(0, 20)
    // for (const email of emails) {
    //     const div = document.createElement('div')
    //     div.innerHTML = `
    //         <p>${email.email} </p>
    //         `
    //     emailContainer.appendChild(div)
    // }

}