const inputbox=document.querySelector('.input');
const tem=document.querySelector('.temp');
const des=document.querySelector('.des');
const hum=document.getElementById('hum');
const wind_speed=document.getElementById('wind-speed');
const wheather_img=document.querySelector('.Wheather-img');
const srcbtn=document.getElementById('srcbtn');
const citys=document.querySelector('.city')

async function checkWeather(city){
    const api='4931a100b7265d228404051a76381163';
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

    const weather_data= await fetch(`${url}`).then(response=>response.json());
    tem.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`
    des.innerHTML=`${weather_data.weather[0].description}`
    hum.innerHTML=`${weather_data.main.humidity}%`
    wind_speed.innerHTML=`${weather_data.wind.speed}Km/h`
    citys.innerHTML=`${weather_data.name}`
    console.log(weather_data)
switch(weather_data.weather[0].main){
        case 'Clouds':
            wheather_img.src="image/cloud.jpg"
            break;
        case 'Clear':
            wheather_img.src="image/sunny.jpg"  
            break;  
        case 'Rain':
            wheather_img.src="image/rain.jpg"
            break;
        case 'Mist':
            wheather_img.src="image/wind.jpg" 
            break;   
        case 'Snow':
            wheather_img.src="image/snow.jpg"
           break;
    }

}
srcbtn.addEventListener('click',()=>{
    checkWeather(inputbox.value);
});



