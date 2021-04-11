import React from 'react'
import axios from 'axios'

export default class GetStudentInfo extends React.Component{
    btn =() =>{
        //if current port don't have this url, will go proxy to check.
        axios.get('http://localhost:3000/api1/students').then(
            response => {console.log('successful',response.data)},
            error => {console.log('successful')}
        )
    }
    render(){
        return(
            <div>
                <button onClick={this.btn}>click to get student information</button>
            </div>
        )
    }
}