import React, { Component } from 'react';
import logo from './akira-logo.jpg';
import './App.css';
var moment = require('moment');

class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		data: []
  	}
  }

  getData() {
    return fetch('https://app.akira.md/api/system_status')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    return fetch('https://app.akira.md/api/system_status')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: [responseJson]});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="App">
        	<header className="App-header">
          		<img src={logo} className="App-logo" alt="logo" />
          		<h1 className="App-title">Welcome to Akira!</h1>
        	</header>
        	<div>
        		{this.state.data.map(function(item) {
        			return (
        				<div>
        				   <p>Current system time: {moment(item.system_time).format("dddd MMMM D h:mm:ssA")}</p>
        					<p>We are {(item.online) ? 'open!' : 'closed.'}</p>
        					<p>Hours of operation: {moment(item.open_hours_today.open_at).format("h:mmA")} to {moment(item.open_hours_today.close_at).format("h:mmA")}</p>
        				</div>
        			)
        		})}
        	</div>
      </div>
    );
  }
}

export default App;
