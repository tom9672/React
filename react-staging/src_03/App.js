import React from 'react'
import Hello from './Components/Hello/Hello'
import Welcome from './Components/Welcome/Welcome'
class App extends React.Component{
    render(){
        return(
            <div>
                <h1>App....</h1>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}

export default App