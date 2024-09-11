import React, { useState } from 'react';
import axios from 'axios'; // Use axios with correct case
import "./App.css"


const KEY = '51df6a597d7ce9c2ca8cb251c689695c';

const App = () => {

  const [city,setCity] = useState("");
  const [data,setData] = useState();

  const fetchData = async () => {
    try {
      // Use template literals to insert city and API key into the URL
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`
      );
      setData(response.data);
    } catch (err) {
      alert('Please Enter the City Name');
    }
  };

  return (
    <div className='app'>
      <h1 className='title'>Weather App</h1>
      <div className='input-container'>
        <input type="text" className='input' value={city} onChange={e => setCity(e.target.value)} placeholder='Enter the City Name'/>
        <button className='button' onClick={fetchData}>Fetch</button>
      </div>
      <div>
        {data && (
          <div className='container'>
            <h1>{data.name},{data.sys.country}</h1>
            <div className='wether-info'>
              <div className='temp'>{Math.round(data.main.temp)} C</div>
              <div className='coordinate'>
                <div>Lat - {data.coord.lat}</div>
                <div>Lon - {data.coord.lon}</div>

              </div>
            </div>

            </div>
        )}
      </div>

    </div>
  );
}

export default App;
