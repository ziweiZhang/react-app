import React, { Component } from 'react';
import { Input, Col, Button, Row } from 'antd';
class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.state = {
            newPlanName: ""
        };
    }
    add() {
        var planName = this.state.newPlanName.trim();
        if (planName.length) {
            this.props.add(planName);
            this.setState({
                newPlanName: ""
            });
        }
    }
    onChangeHandler(e) {
        this.setState({
            newPlanName: e.target.value
        });
    }
    render() {
        return ( <
            React.Fragment >
            <
            Col span = { 5 } >
            <
            Input placeholder = "add new plan"
            value = { this.state.newPlanName } onChange = { this.onChangeHandler }
            /> < /
            Col > <
            Col span = "2" >
            <
            Button type = "primary"
            onClick = { this.add } style = {
            {
                marginLeft: 10
            }
            } >
            Add < /Button > < /
            Col > <
            /React.Fragment>
        )
    }
}
export default AddTodo;
//e => this.state.newPlanName = e.target.value