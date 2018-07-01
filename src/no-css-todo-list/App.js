import React, { Component } from 'react';
import TodoList from './TodoList.js';
import AddTodo from './AddTodo.js';
import Filter from './Filter.js';
class App extends Component {
	constructor(props){
		super(props);
		this.addTodo = this.addTodo.bind(this);
		this.changeStatus = this.changeStatus.bind(this);
		this.state = {
			status: ''
		};
	}
	addTodo(newPlan){
		this.TodoList.AddNewPlan(newPlan);
	}
	changeStatus(status) {
		this.setState({
			status
		});
	}
	onRef = (ref) => {
        this.TodoList = ref;
    }
	render(){
		return (
			<React.Fragment>
			<Filter changeStatus={this.changeStatus}/>
			<AddTodo add={newPlan => this.addTodo(newPlan)}/>
			<TodoList onRef={this.onRef} status={this.state.status}/>	
			</React.Fragment>	
			)
	}
}
export default App;