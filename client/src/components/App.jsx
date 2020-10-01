import React from 'react';
// import child components.
import axios from 'axios';
import Navigation from './Navigation.jsx';
// import axios from 'axios';

const api = {
  key: '49a9c03d5547e8fc48a1f81cff3bf6d0',
  base: 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
    };
  }

  componentDidMount() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=49a9c03d5547e8fc48a1f81cff3bf6d0')
      .then((response) => response.json())
      .then((response) => {
        console.log(response.main);
        console.log(response.name);
        console.log(response.weather);
        console.log(response.wind);
        console.log(response.sys);
        this.setState({
          apiData: response,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  render() {

    const dateBuilder = (d) => {
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`
    };

    return (
      <div className='app warm'>
        <main>
          <div className='search-box'>
            <input
              type='text'
              className='search-bar'
              placeholder='search...'
            />
          </div>
          <div className='location-box'>
            <div className='location'>Denver Colorado</div>
            <div className='date'>{dateBuilder(new Date())}</div>
          </div>
          <div className='weather-box'>
            <div className='temp'>
              75F
            </div>
            <div className='weather'>Beautiful</div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
