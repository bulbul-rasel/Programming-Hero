const searchPlayers = () => {
    const searchField = document.getElementById("search-field")
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = ''
    document.getElementById('spinner').style.display = 'block'

    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`)
        .then(res => res.json())
        .then(data => displayPlayers(data.player[0]))
}
const displayPlayers = (players) => {
    console.log(players);
    const search = document.getElementById('searchPlayer')
    search.textContent = "";
    document.getElementById('spinner').style.display = 'none'
    const div = document.createElement('div')

    div.innerHTML = `
    <div class="container">
    <div class="row">
      <div class="col">
      <img src = "${players.strCutout}">
      
      </div>
      <div class="col">
      <h4> Name: ${players.strPlayer} </h4>
      <h4> Sports: ${players.strPosition} </h4>
      <h4> Nationality: ${players.strNationality}</h4>
      <p>${players.strDescriptionEN.slice(0, 1000)} </p>
      
      </div>
      
    </div>
  </div>

    
    
    
    `

    search.appendChild(div)
}