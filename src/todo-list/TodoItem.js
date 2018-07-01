import React, {Component} from "react";
import {Checkbox } from 'antd'
class TodoItem extends Component{
	constructor(){
		super();
		this.changeComplete = this.changeComplete.bind(this);
	}

	changeComplete(id, e){		
		this.props.onListItemChange(e.target.checked, id);
	}
	render(){
		let item = this.props.item;
		return (
			<li  className={item.completed?"completed":"active"}>
				<Checkbox defaultChecked={item.completed} onChange={e => this.changeComplete(item.id, e)}/>
				<span>{item.name}</span>
			</li>
			);
	}
}
export default TodoItem;
//{item.completed?(checked="checked"):""}