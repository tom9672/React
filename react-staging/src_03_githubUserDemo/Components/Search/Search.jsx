import axios from 'axios'
import React from 'react'

export default class Search extends React.Component{
    search = () =>{
        const {keywordEle:{value:keyword}} = this
        const url = 'https://api.github.com/search/users?q=' + keyword
        this.props.updateAppState({isFirst:false, isLoading:true})
        axios.get(url).then(
            response => {
                const data = response.data.items
                this.props.updateAppState({users:data, isLoading:false})
            },
            error => {
                this.props.updateAppState({isLoading:false, err:error.message})
            }
        )
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