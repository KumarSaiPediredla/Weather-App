var inp = document.getElementById("inp");
var btn = document.getElementById("btn");
var temperature = document.getElementById("temperature");
var city = document.getElementById("city");
var climate = document.getElementById("haze");

var key = "37e9e4f5f2a8519423d7b94df615fa91";

btn.addEventListener("click",()=>{
    if(inp.value == "")
    {
        alert("please enter the CITY name");
    }
    else
    {
        var inpt = inp.value;
        var url = (`https://api.openweathermap.org/data/2.5/weather?q=${inpt}&appid=${key}`);

        fetch(url).then(result=>result.json())
        .then(data =>{
            console.log(data);
            const{name}=data;
            city.innerHTML=name;
            city.style.color="rgb(51,51,51)";
            city.style.fontWeight="bold";
            const{feels_like}=data.main;
            temperature.innerHTML=Math.floor(feels_like-273) + "°C";
            temperature.style.color="rgb(51,51,51)";
            temperature.style.fontWeight="bold";
            const{description}=data.weather[0];
            climate.innerHTML=description;
            climate.style.textTransform="uppercase";
            climate.style.color="rgb(51,51,51)";
            climate.style.fontWeight="bold";
        })
       
        .catch(()=>{
            alert("NO DATA FOUND");
        })
    }
    
})