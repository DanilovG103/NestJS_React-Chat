import React from 'react'
import Cookies from 'js-cookie'
import { Switch, Route, Redirect } from 'react-router-dom'
import { authRoutes, routes } from './routes'

const AppRouter = () => {   
    return (
        <Switch>
            {(Cookies.get('token')) && authRoutes.map(({path, component}) => 
                <Route key={path} path={path} component={component} exact/>
            )}
            {routes.map(({path, component}) => 
                <Route key={path} path={path} component={component} exact/>
            )}
            <Redirect to='/login'/>
        </Switch>
    )
}

export default AppRouter
