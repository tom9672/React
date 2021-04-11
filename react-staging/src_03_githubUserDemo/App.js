import React from 'react'
import Hello from './Components/Hello/Hello'
import Welcome from './Components/Welcome/Welcome'
import GetStudentInfo from './Components/GetStudentInfo/GetStudentInfo'
import Search from './Components/Search/Search'
import List from './Components/List/List'
class App extends React.Component{

    state={users:[], isFirst:true, isLoading:false, err:''}

    updateAppState = (stateObj) =>{
        this.setState(stateObj)
    }
    
    render(){
        return(
            <div>
                <h1>App....</h1>
                <Hello/>
                <Welcome/>
                <GetStudentInfo/>
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        )
    }
}

export default App