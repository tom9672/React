import React from 'react'
import './index.css'
class MyItem extends React.Component{
   render(){

        const {id,name,done} = this.props

        return(
            <li id={id}><input type="checkbox" defaultChecked={done}/>{name}</li>
        )
   }
}

export default MyItem