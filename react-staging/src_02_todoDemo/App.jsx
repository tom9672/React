import React from 'react'
import './App.css'

import Header from './Component/Header'
import MyList from './Component/List'

class App extends React.Component {

    state = {
        todos: [
            { id: '1', name: 'Eat'},
            { id: '2', name: 'Sleep'},
            { id: '3', name: 'Play'},
            { id: '4', name: 'Study'}
        ]
    }

    update = (todoObj) => {
        const newTodos = [todoObj, ...this.state.todos]
        this.setState({ todos: newTodos })
    }

    remove = (id) =>{
        const {todos} = this.state
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id
        })
        this.setState({ todos: newTodos })
    }



    render() {
        return (
            <div className='main'>
                <Header update={this.update} len={this.state.todos.length} />
                <MyList todos={this.state.todos} remove = {this.remove}/>
                
            </div>
        )
    }
}

export default App