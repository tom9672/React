import React from "react";
import qs  from 'query-string'
export default class News1 extends React.Component{


    render(){
        const {id,title} = qs.parse(this.props.location.search) ||{}
        return(
            <p>{id}: {title}</p>
        )
    }
}