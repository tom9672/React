import React from 'react'
import Hello from './Components/Hello/Hello'
import Welcome from './Components/Welcome/Welcome'
import GetStudentInfo from './Components/GetStudentInfo/GetStudentInfo'
import Search from './Components/Search/Search'
class App extends React.Component{
    render(){
        return(
            <div>
                <h1>App....</h1>
                <Hello/>
                <Welcome/>
                <GetStudentInfo/>
                <Search/>
            </div>
        )
    }
}

export default App