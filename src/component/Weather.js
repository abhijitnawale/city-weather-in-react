import React, { useState, useEffect } from "react";
import "./style.css";


const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const suffix = "&units=metric&appid=6233ee11de9b8797b5baa715e90e369e";

function Weather() {
  const [city, setCity] = useState(null);

  const [search, setSearch] = useState([]);

  const APIkey = "6233ee11de9b8797b5baa715e90e369e";

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(baseUrl + search + suffix);

      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            placeholder="Enter your City Name"
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            value={search}
          />
        </div>
        {!city ? (
          <p >Enter Valid City</p>
        ) : (
          <div>
            <div className="info">
              <h1 className="location">
                <i className="fas fa-street-view"> </i>
                {search}
              </h1>
              <br/> <br/>
              <h1 className="temp">{city.temp}°Cel</h1>
              <br/> <br/>
              <h4 className="min_max"> Min: {city.temp_min}°Cel | Max :{city.temp_max}°Cel
               <br/> <br/> Humidity: {city.humidity}
              </h4>
            </div>
          </div>
        )}{" "}
        
      </div>
    </>
  );
}

export default Weather;
