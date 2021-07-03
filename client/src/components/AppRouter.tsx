import { Switch, Route, Redirect } from 'react-router-dom'
import { authRoutes, publicRoutes } from './routes'

const AppRouter = () => {
    const isAuth = true
    return (
        <Switch>
            {isAuth && authRoutes.map(({path, component}) => 
                <Route key={path} path={path} component={component} exact/>
            )}
            {publicRoutes.map(({path, component}) => 
                <Route key={path} path={path} component={component} exact/>
            )}
            <Redirect to='auth'/>
        </Switch>
    )
}

export default AppRouter
