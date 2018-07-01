import React, { Component } from 'react';
class AddTodo extends Component{
	constructor(props) {
		super(props);
		this.add = this.add.bind(this);
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.state = {
			newPlanName:""
		};
	}
	add(){
		var planName = this.state.newPlanName.trim();
		if(planName.length) {
			this.props.add(planName);
			this.setState({newPlanName: ""});
		}
	}
	onChangeHandler(e) {
		this.setState({newPlanName: e.target.value});
	}
	render(){
		return (
			<React.Fragment>
			<input placeholder="add new plan" value={this.state.newPlanName} onChange={this.onChangeHandler}/>
			<button onClick={this.add}>Add</button>
			</React.Fragment>
			)
	}
}
export default AddTodo;
//e => this.state.newPlanName = e.target.value