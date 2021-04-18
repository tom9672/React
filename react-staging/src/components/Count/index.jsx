import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createIncrementAction,
        createDecrementAction,
        createIncrementAsyncAction} 
        from '../../redux/actions/count_action'
import {Button} from 'antd'
class Count extends Component {
    addBtn=()=>{
        this.props.add(1)
    }
    minusBtn =()=>{
        this.props.minus(1)
    }

    asyncAddBtn =() =>{
        this.props.asyncAdd(1,500)
    }

    render() {
        return (
            <div>
            <h2>Count: {this.props.count}</h2>
            <p>The state length of below component is: {this.props.personList.length} </p> <br/>
            <Button onClick={this.addBtn}>+</Button>
            <Button onClick={this.minusBtn}>-</Button>
            <Button onClick={this.asyncAddBtn}>Async Add (500ms)</Button>
            </div>
        );
    }
}

export default connect(
    //map state
    state => ({count:state.countReducer,personList:state.personReducer}),
    //map action for state
    {add:createIncrementAction,
    minus:createDecrementAction,
    asyncAdd:createIncrementAsyncAction}
)(Count);