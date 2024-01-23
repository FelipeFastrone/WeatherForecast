import { useState } from "react";

// importando icones climáticos
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThermometer,
} from "weather-icons-react";
import { FaSearch } from "react-icons/fa";
// chave api climaTempo
const apiKey = "a6a025b9cca61c2b13e1d56e1610f1d1";

function App() {
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState("");
  const lang = "pt_br";
  const units = "metric";
  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&units=${units}&appid=${apiKey}`
      );
      const data = await res.json();
      console.log(data);
      setForecast(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
    setCity("");
  };
  // eslint-disable-next-line react/prop-types
  function WeatherIcon({ code }) {
    switch (code) {
      case "01d":
        return <WiDaySunny />;

      case "01n":
        return <WiDaySunny />;
      case "02d":
        return <WiCloudy />;
      case "02n":
        return <WiCloudy />;
      case "03d":
      case "03n":
        return <WiCloudy />;
      case "04d":
      case "04n":
        return <WiCloudy />;
      case "09d":
      case "09n":
        return <WiRain className="inline"/>;
      case "10d":
      case "10n":
        return <WiRain className="inline size-28"/>;
      case "11d":
      case "11n":
        return <WiRain />;
      case "13d":
      case "13n":
        return <WiSnow />;
      case "50d":
      case "50n":
        return <WiCloudy />;
      default:
        return null;
    }
  }
  return (
    <div className=" w-100vw h-screen bg-fundo-img bg-cover flex flex-col bg-top-bottom text-center ">
      <h1 className="text-cyan-50 text-2xl font-extrabold mt-14">
        Previsão do tempo
      </h1>
      <div className="flex justify-center flex-row text-center mx-56 mt-20 ">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="text-white w-44 p-4 relative  rounded-lg h-10 border bg-transparent"
        />
        <button
          className="bg-transparent text-white w-8 h-10 pl-8 pr-8  rounded-2xl"
          onClick={fetchWeather}
        >
          <FaSearch /> 
        </button>
      </div>

      {forecast && (
        <div className="w-30 h-10">
          <h2 className="text-white font-bolder mt-10 text-xl">
            {forecast.name}
          </h2>
          <section className="text-2xl ml-4 text-blue-100 font-extrabold">
            <i>
              <WeatherIcon  code={forecast.weather[0].icon} />{" "}
            </i>
            <p className="m-4">{new Date(forecast.dt * 1000).toLocaleDateString()}</p>
            
            <p className="m-4">{forecast.weather[0].description}</p>
            <p>
              
            <WiThermometer className="inline"/>
              
              Temperature: {forecast.main.temp} 
            </p>{" "}
            
            <p className="m-4">max: {forecast.main.temp_max} / min: {forecast.main.temp_min}</p>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
