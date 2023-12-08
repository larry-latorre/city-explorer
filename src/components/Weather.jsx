/* eslint-disable react/prop-types */

const Weather = ({ weatherData }) => {
    return (
      <div>
        <h2>Weather Forecast</h2>
        {weatherData.map((forecast, index) => (
          <div key={index}>
            <h3>Date: {forecast.date}</h3>
            <p>Description: {forecast.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Weather;
  