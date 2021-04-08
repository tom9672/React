import React from 'react'
import Item from '../Item'
import './index.css'
class MyList extends React.Component{
   render(){
       return(
           <ul>
               {
                   this.props.todos.map((todo)=>{
                    return <Item key={todo.id} {...todo}/>
                })
               }
           </ul>
       )
   }
}

export default MyList