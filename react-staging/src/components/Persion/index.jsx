import React, { Component } from 'react';
import {Button} from 'antd'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person_action'
class Person extends Component {
    addUser =()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(), name, age}
        this.props.addPerson(personObj)
    }
    render() {
        return (
            <div>
                Person ... <br/>
                The state of above component is: {this.props.count} <br/>
                <input ref={c => this.nameNode = c} type="text" name="" id="name" placeholder="Name"/> 
                <input ref={c => this.ageNode = c} type="text" name="" id="age" placeholder="Age"/>
                <Button onClick={this.addUser}>Add</Button>
                <br/>
                <ul>
                    {
                        this.props.personList.map((each)=>{
                            return <li key={each.id}>{each.name} -- {each.age}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({personList:state.personReducer, count:state.countReducer}),
    {addPerson:createAddPersonAction}
)(Person);