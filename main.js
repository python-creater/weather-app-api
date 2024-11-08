const submit_btn = document.body.querySelector("#submit");
const city_input = document.body.querySelector("#city_input");
const set_data = document.body.querySelector(".set_data");

const getData = async () => {
    const city_name = city_input.value.trim();
    const apiKey = "36181ae6d206c6ee92f7e994417d0834";
    if (city_name !== "") {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}&units=metric&lang=uz`);
            if (!response.ok) {
                console.log("Xato: " + response.status);
                return;
            }
            const data = await response.json();
            showData(data);
        }
        catch (error) {
            console.error(error);
        }
    }
    else {
        console.log("Shahar nomini kiriting!");

    }

}

const showData = (data) => {
    let text = `
                <h3>${data.name} shahridagi ob-havo</h3>
                <p>Harorat: ${data.main.temp}°C</p>
                <p>Namlik: ${data.main.humidity}%</p>
                <p>Shamol tezligi: ${data.wind.speed} m/s</p>
                <p>Havo holati: ${data.weather[0].description}</p>
                `
    set_data.innerHTML = text;
}

submit_btn.addEventListener("click", getData);