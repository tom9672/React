import React, { Component } from 'react';
import NavBar from './component/NavBar/NavBar'
import Page1 from './component/Page1/Page1'
import Page2 from './component/Page2/Page2'

import store from './redux/store'

class App extends Component {

    componentDidMount(){
        store.subscribe(()=>{
          this.setState({})
        })
      }

      componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
            return;
        };
    }

    render() {
        var page = 'Under development'
        if(store.getState() === 'page1'){
            page = <Page1/>
        }else if(store.getState() === 'page2'){
            page = <Page2/>
        }

        return (
            <div>
                <NavBar/>
                {page}
            </div>
        );
    }
}

export default App;