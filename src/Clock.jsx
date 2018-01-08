import React, { Component } from 'react';
var moment = require('moment');

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			system_time: new Date()
		};
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	tick() {
		this.setState({
			system_time: new Date()
		});
	}

	render() {
		return (
			<p>Current system time:&nbsp; 
			{moment(this.state.system_time).format("dddd MMMM D, h:mm:ssA")}</p>
		);
	}
}

export default Clock;