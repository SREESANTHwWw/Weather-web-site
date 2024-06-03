const apikey = "8cf0fcc97f113ed415f65fe0aba4e526"
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchbox= document.querySelector(".search_div input")
const searchbtn = document.querySelector(".search_icon button")
const images= document.querySelector(".clouds_imgs")

async function check (citname_dec){
    const response = await fetch(apiurl + citname_dec +`&appid=${apikey}`);
    let data = await response.json()
    console.table(data)
    document.querySelector(".citname_dec").innerHTML =data.name;
    document.querySelector(".temp").innerHTML= Math.round (data.main.temp )+ "°C";
    document.querySelector(".humdity_per").innerHTML =data.main.humidity + "%";
    document.querySelector(".KmH").innerHTML =data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        images.src = "weather-app-img/images/clouds.png"

    }else if(data.weather[0].main == "Rain"){
        images.src ="weather-app-img/images/rain.png"
    }else if(data.weather[0].main == "Drizzle"){
        images.src ="weather-app-img/images/drizzle.png"
    }else if (data.weather[0].mai == "Mist"){
        images.src = "weather-app-img/images/mist.png"
    }

}

searchbtn.addEventListener("click",()=>{
    check(searchbox.value)
})

