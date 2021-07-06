import { Switch, Route, Redirect } from 'react-router-dom'
import { authRoutes, routes } from './routes'

const AppRouter = () => {   
    return (
        <Switch>
            {(localStorage.getItem('token')) && authRoutes.map(({path, component}) => 
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
