import React, { Component } from 'react';
import { Row, Divider } from 'antd';
import TodoList from './TodoList.js';
import AddTodo from './AddTodo.js';
import Filter from './Filter.js';
import './todo.css';
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
				<Row>
					<AddTodo add={newPlan => this.addTodo(newPlan)}/>
					<Filter changeStatus={this.changeStatus}/>
				</Row>
				<Divider />
				<TodoList onRef={this.onRef} status={this.state.status}/>	
			</React.Fragment>	
			)
	}
}
export default App;