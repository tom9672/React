import React from "react";

export default class News2 extends React.Component{
    render(){
        const {id, title} = this.props.location.state || {}
        return(
            <p>{id}, {title}</p>
        )
    }
}