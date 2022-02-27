const allPlayers = () => {
    document.getElementById('player-container').innerHTML = ''
    document.getElementById('spinner').style.display = 'block'
    const searchText = document.getElementById('search-box')
    const searchValue = searchText.value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => showPlayersDetails(data.player))

    console.log(searchValue);
    searchText.value = ''
}
const showPlayersDetails = players => {
    players.forEach(player => {
        const parent = document.getElementById('player-container')
        if (player.value = !null) {
            document.getElementById('spinner').style.display = 'none'
        } else {
            document.getElementById('spinner').style.display = 'block'
        }
        const div = document.createElement('div')
        div.innerHTML = `
    <div class="card border p-5">
                        <div class="pro-pic">
                            <img class="w-25" src="${player.strThumb}" alt="">
                            <h2>Name:${player.strPlayer}</h2>
                            <h4>Country:${player.strNationality}</h4>
                            <p></p>
                            <div class="allButton">
                                <button onClick="deleteID(${player.idPlayer})" class="btn btn-danger">Delete</button>
                                <button onClick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
                            </div>
                        </div>
                    </div>
    `
        parent.appendChild(div)
    })
    console.log(players);
}
const details = (id) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.players[0]))
}
const setDetails = (info) => {
    if (info.strGender == "Male") {
        document.getElementById('male').style.display = 'block'
        document.getElementById('female').style.display = 'none'
    } else {
        document.getElementById('male').style.display = 'none'
        document.getElementById('female').style.display = 'block'
    }
    document.getElementById("details-container").innerHTML = `
    <div class="text-center border p-3">
    <img class="w-25" src="${info.strThumb}" alt="">
    <h1>Name:${info.strPlayer}</h1>
    <h3>Club:${info.strTeam}</h3>
    <h3>Gender:${info.strGender}</h3>


    <p>About:${info.strDescriptionEN.slice(0, 1000)}</p>

    </div>
    `
}
const deleteID = (dId) => {

}