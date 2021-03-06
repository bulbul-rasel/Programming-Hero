const loadUsers = () => {
    fetch(`https://randomuser.me/api/?results=5000`)
        .then(res => res.json())
        .then(data => displayUsers(data))
}
const displayUsers = data => {
    const userDiv = document.getElementById('users')

    const users = data.results;
    const first20pic = users.slice(0, 20)
    for (const user of first20pic) {
        console.log(user);
        const div = document.createElement('div')
        div.innerHTML = `
        <img src=" ${user.picture.medium}">
        <h3> Name: ${user.name.title} ${user.name.first} ${user.name.last} 
        </h3>
        <p> City: ${user.location.city}</p>
        <p> Country: ${user.location.country}</p>
        <p> State: ${user.location.state}</p>
        <p> Street: ${user.location.street.name} , ${user.location.street.number}</p>
        <p> Timezone: ${user.location.timezone.description} , ${user.location.timezone.offset}</p>
        
        `
        userDiv.appendChild(div)
    }
}