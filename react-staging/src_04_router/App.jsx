import React from 'react'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'
import Page1 from './Component/Page1/Page1'
import Page2 from './Component/Page2/Page2'
export default class App extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className="col-2">
                    <div className='list-group'>
                        <NavLink className='list-group-item' to='/page1'>Page1</NavLink>
                        <NavLink className='list-group-item' to='/page2'>Page2</NavLink>

                    </div>
                </div>
                <div className="col-8">
                    <Switch>
                        <Route path='/page1' component={Page1} />
                        <Route path='/page2' component={Page2} />
                        <Redirect to='/page1' />
                    </Switch>
                </div>

            </div>
        )
    }
}