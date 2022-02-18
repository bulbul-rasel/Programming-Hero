function setPlayerStyle(player) {
    player.style.border = '1px solid red';
    player.style.borderRadius = '5px';
    player.style.margin = '10px'
    player.style.padding = '10px'
}


const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player);
    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = "yellow"
    // })
}

function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div')
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>Laboriosam cupiditate accusamus ullam harum quod natus non, iure totam eaque laudantium nisi hic
        deleniti molestiae unde adipisci beatae mollitia veniam eius aspernatur asperiores consequuntur?
        Itaque, dolore. Eum, voluptate voluptatibus?</p>
    `
    setPlayerStyle(player)
    playersContainer.appendChild(player);
}
document.getElementById('players').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = "yellow"
    } else {
        event.target.parentNode.style.backgroundColor = "yellow"
    }
})