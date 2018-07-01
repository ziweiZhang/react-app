import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
class TodoList extends Component {
	componentDidMount(){
        this.props.onRef(this);
    }
	constructor(props){
		super(props);
		this.onListChange = this.onListChange.bind(this);
		this.list = [
				{
					completed: false,
					name: 'running',
					id: 1
				},
				{
					completed: true,
					name: 'meeting',
					id: 2
				},
				{
					completed: false,
					name: 'stady',
					id: 3
				},
				{
					completed: true,
					name: 'sleep early',
					id: 4
				}
			];
		this.state = {
			list: this.list
		}
	}
	// 更新计划状态
	onListChange(checked, id){
		let newList = this.state.list.slice(0);
		newList.forEach(item => {
			if(item.id === id) {
				item.completed = checked;
			}
		});
		this.setState({
			list: newList
		});
	}
	// 添加新计划
	AddNewPlan(planName){
		let newList = this.state.list.slice(0);
		newList.unshift({
			name: planName,
			completed: false,
			id: newList.length+1
		});
		this.setState({
			list: newList
		});
	}
	// 筛选符合status的列表
	filterList(status) {
		let newList = [];
		switch (status) {
			case 'active': newList = this.state.list.filter(plan => !plan.completed); break;
			case 'completed': newList = this.state.list.filter(plan => plan.completed); break;
			default: newList = this.state.list.slice(0); break;
		}
		return newList;
	}
	render(){
		let list = this.filterList(this.props.status);
		return (
			<ul>
		{list.map(item => <TodoItem item={item} onListItemChange={this.onListChange} key={item.id}/>)}
			</ul>);
		
	}
}
export default TodoList;