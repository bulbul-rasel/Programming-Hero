const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = country => {
    console.log(country);
    const countriesHTML = country.map(country => getCountriesHTML(country))
    const container = document.getElementById('countries')
    container.innerHTML = countriesHTML.join(' ')
}
// const getCountriesHTML = country => {
//     // Main 
//     const { name, flags } = country;
//     return `
//     <div class="country ">
//         <h2>${country.name.common}</h2>
//         <img src="${country.flags.png}">
//     </div>
//     `
// }
// const getCountriesHTML = country => {
//     // Option 1 
//     const { name, flags } = country;
//     return `
//     <div class="country ">
//         <h2>${name.common}</h2>
//         <img src="${flags.png}">
//     </div>
//     `
// }
const getCountriesHTML = ({ name, flags }) => {
    // Option 2
    return `
    <div class="country ">
        <h2>${name.common}</h2>
        <img src="${flags.png}">
    </div>
    `
}

loadCountries();