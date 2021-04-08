import React from 'react'
import './index.css'
class MyItem extends React.Component{
    remove =(id) =>{
        this.props.remove(id)
    }

   render(){

        const {id,name} = this.props

        

        return(
            <li id={id}>
                {name}
                <button onClick={()=>{this.remove(id)}}>Delete</button>
            </li>
        )   
   }
}

export default MyItem