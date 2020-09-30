import React from 'react';
// import child components.
import Navigation from './Navigation.jsx'
// import axios from 'axios';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      join:{}
    };
  }

  componentDidMount() {
    axios.get('api.openweathermap.org/data/2.5/forecast?id=524901&APPID=49a9c03d5547e8fc48a1f81cff3bf6d0')
      .then((response) => {
        console.log(response);
        this.setState({
          join: response.data.result,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  render() {
    return (
      <div>
        <h1>hello from app.jsx</h1>
        <Navigation />
      </div>
    );
  }
}

export default App;
