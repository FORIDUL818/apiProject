import { useState, useEffect } from 'react';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
let city="bangladesh"
  // Example city
  
  
  useEffect(() => {
    const weatherurl= (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ed72f9a2792fbbe1bdf0ec21b453ec6`)
    fetch(weatherurl)
      .then((res) => res.json())
      .then((data) => setWeatherData(data))
  },[city]);

  return (
    <div className=' container mx-auto text-center pt-10 bg-slate-400'>
      <div className=''>
        <h1 className=' text-[#fff] text-[32px] bg-[green]'> Bangladesh country weather </h1>
      </div>
      {weatherData ? (
        <div className=' p-10 bg-yellow-100'>
          <h2 className=' text-[red] text-[24px]'>{weatherData.name}</h2>
          <p className='  text-[24px] text-[green]'>{weatherData.weather[0].description}</p>
          <p>Temperature: <span className=' text-[indigo] text-[18px]'>{weatherData.main.temp}</span> </p>
          {/* Display other weather information */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherApp;
