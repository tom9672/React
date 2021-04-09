import React from 'react'

export default class Search extends React.Component{
    search = () =>{
        const {keywordEle:{value:keyword}} = this
        console.log(keyword)
    }
    render(){
        return(
            <div>
                <h3>Search Github User</h3>
                <input ref={c => this.keywordEle = c} type="text" name="" id="" placeholder='Keywords'/> &nbsp; 
                <button onClick={this.search}>Search</button>
            </div>
        )
    }
}