import React from "react";
import { NavLink, Route, Switch } from 'react-router-dom'
import News1 from "../News/News1";
import News2 from "../News/News2";
import News3 from "../News/News3";

export default class Page1 extends React.Component{
    render(){
        return(
            <div>
                <p>PAGE 1</p>
                <div>
                    <NavLink to={`/page1/News1?id=1&title=testTitle`}>news1</NavLink> &nbsp;
                    <NavLink to={{pathname:'/page1/News2', state:{id:2, title:'Test2'}}}>news2</NavLink> &nbsp;
                    <NavLink to='/page1/News3'>news3</NavLink> &nbsp;
                </div>
                <div>
                    <Switch>
                        <Route path='/page1/News1' component={News1}/>
                        <Route path='/page1/News2' component={News2}/>
                        <Route path='/page1/News3' component={News3}/>    
                    </Switch>
                </div>
            </div>
        )
    }
}

