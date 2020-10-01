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
    return (
      <div className='app'>
        <h1>hello from app.jsx</h1>
        <main>
          <div className='search-bar'>
            <input
              type='text'
              className='seach-bar'
              placeholder='search...'
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
