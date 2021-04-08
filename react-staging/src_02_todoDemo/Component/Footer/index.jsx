import React from 'react'

class Confirm extends React.Component{
    remove = () =>{
        var {todos} = this.props
        for(var i =0;i<todos.length;i++){
            if(todos[i].done===true){
                todos.splice(i,1)
            }
        }
        this.props.update(todos)
    }

   render(){
        return(
            <button onClick={this.remove}>Done</button>
        )
   }
}

export default Confirm