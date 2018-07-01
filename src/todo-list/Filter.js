import React, { Component } from 'react';
import { Select, Col } from 'antd';
const Option = Select.Option;
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
		<Col span="6" className="filter-wrap">
			show: <Select 
			style={{ width: 120 }} 
			defaultValue={this.state.planStatus[0]} 
			onChange={value => this.props.changeStatus(value)}>
			{this.state.planStatus.map((status, index) => 
				<Option 
				key={index} 
				value={status}>{status}</Option>
			)}</Select>
		</Col>
		)
	}
}
export default Filter;