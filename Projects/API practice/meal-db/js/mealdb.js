document.getElementById('error-message').style.display = 'none'
const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = ''
    if (searchText == '') {
        // const display = document.getElementById('output').style.display = 'block'
        // const div = document.createElement('div')
        // div.innerHTML = `
        // <h3>Please Write something</h3>
        // `
        // display.appendChild(div)
        document.getElementById('spinner').style.display = 'block'
    } else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResults(data.meals))
            .catch(error => displayError(error))
        // console.log(url);
    }


}
const displayError = error => {
    document.getElementById('error-message').style.display = 'block'
}
const displaySearchResults = meals => {
    document.getElementById('error-message').style.display = 'none'
    const searchResults = document.getElementById('search-results')
    searchResults.textContent = ''
    if (meals[0].length == 0) {
        alert('added some search')
    }
    meals.forEach(meal => {
        console.log(meal);
        document.getElementById('spinner').style.display = 'none'
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div onClick="loadMealDetail(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}
                    </p>
                </div>
            </div>
        `
        searchResults.appendChild(div)
    })
}
const loadMealDetail = mealId => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details')
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p >
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div >
    `
    mealDetails.appendChild(div)
}