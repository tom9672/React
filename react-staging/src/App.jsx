import React from 'react'
import './App.css'

import Header from './Component/Header'
import MyList from './Component/List'
import Confirm from './Component/Footer'

class App extends React.Component {

    state = {
        todos: [
            { id: '1', name: 'Eat', done: false },
            { id: '2', name: 'Sleep', done: true },
            { id: '3', name: 'Play', done: false },
            { id: '4', name: 'Study', done: false }
        ]
    }

    update = (todoObj) => {
        const newTodos = [todoObj, ...this.state.todos]
        this.setState({ todos: newTodos })
    }



    render() {
        return (
            <div className='main'>
                <Header update={this.update} len={this.state.todos.length} />
                <MyList todos={this.state.todos} />
                <Confirm update={this.update} todos={this.state.todos}/>
            </div>
        )
    }
}

export default App