import React from 'react'
import Item from '../Item'
import './index.css'
class MyList extends React.Component{
   render(){
       const {todos,remove} = this.props
       return(
           <ul>
               {
                   todos.map((todo)=>{
                    return <Item key={todo.id} {...todo} remove={remove}/>
                })
               }
           </ul>
       )
   }
}

export default MyList