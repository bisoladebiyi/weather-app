import React from 'react'

const WeatherResponse = () => {
    const response = JSON.parse(localStorage.getItem("weatherResponse"))
    const url = "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png"
    return (
        <div className="response-page">
            <h1 className="city-name">{response.name}</h1>
            <p className="country">{response.sys.country}</p>
            <div className="temp-container">
                <img src={url} alt="" />
            <p className="temp">{response.main.temp}°C</p>
            </div>
            <div className="extra-info">
                <div>
                    <h3>Wind Status</h3>
                    <p>{response.wind.speed} mph</p>

                </div>
                <div>
                    <h3>Humidity</h3>
                    <p>{response.main.humidity}%</p>
                    
                </div>
            </div>
            
        </div>
    )
}

export default WeatherResponse
