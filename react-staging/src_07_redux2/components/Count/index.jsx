import React, { Component } from 'react';
import {Button, Select} from 'antd'

class Count extends Component {
    state={selectValue:0}
    handleChange = (value) =>{
        this.setState({selectValue:value})
    }
    add = () =>{
        this.props.add(parseInt(this.state.selectValue))
    }
    minus = ()=>{
        this.props.minus(parseInt(this.state.selectValue))
    }
    asyncAdd = ()=>{
        this.props.asyncAdd(parseInt(this.state.selectValue))
    }
    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                {/* <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp; */}
                <Select onChange={this.handleChange}>
                    <Select.Option value="1">1</Select.Option>
                    <Select.Option value="2">2</Select.Option>
                    <Select.Option value="3">3</Select.Option>
                </Select>&nbsp;
                <Button onClick={this.add}>+</Button> &nbsp;
                <Button onClick={this.minus}>-</Button> &nbsp;
                <Button onClick={this.asyncAdd}>Async + (500ms)</Button>
            </div>
        );
    }
}

export default Count;