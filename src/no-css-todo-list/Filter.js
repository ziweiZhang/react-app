import React, { Component } from 'react';
class Filter extends Component {
	constructor(props){
		super(props);
		// this.changeStatus = this.changeStatus.bind(this);
		this.state = {
			planStatus: ['all', 'active', 'completed']
		}
	}
	changeStatus(e) {
		this.props.changeStatus(e.target.value)
	}
	render(){
		return (
		<div>
		show: <select defaultValue={this.state.planStatus[0]} onChange={e => this.props.changeStatus(e.target.value)}>{this.state.planStatus.map((status, index) => <option key={index} value={status}>{status}</option>)}</select>
		</div>
		)
	}
}
export default Filter;