const api_key = '07c5a2278aeebdbc6da2264c95895cff'

const searchTemp = () => {
    const city = document.getElementById('city-name').value;
    console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemp = (temp) => {
    setInnerText('city', temp.name)
    setInnerText('temp', temp.main.temp)
    setInnerText('condition', temp.weather[0].main)

    const url = `https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('icon')
    imgIcon.setAttribute('src', url)
}