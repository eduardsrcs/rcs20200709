"// main.js" 

  getData()

  setInterval(() => getData(), 120000)

  function getData  () { fetch('inbox.php')
    .then(res => res.json())
    .then(data => render(data))
    .catch(err => console.log(err))
  }

  var render = (data) => {
    document.querySelector('#city').innerHTML = data.geoip.city
    document.querySelector('#temp').innerHTML = `${data.weather.currTemp} &#8451;`
    document.querySelector('#otherweather').innerHTML = `${data.weather.icoSymbol}, wind: ${data.weather.windSpeed} m/s`

  }

  