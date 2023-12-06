

const Weather = ({ forecastData }) => {
  
  return (
    <div>
      <h2>Weather Forecast</h2>
      {((forecast, index) => (
        <div key={index}>
          <h3>Date: {forecast.date}</h3>
          <p>Description: {forecast.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Weather;
