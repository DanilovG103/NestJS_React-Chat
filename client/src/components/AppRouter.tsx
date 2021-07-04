import { Switch, Route, Redirect } from 'react-router-dom'
import { authRoutes, publicRoutes } from './routes'

const AppRouter = () => {   
    const auth = true
    
    return (
        <Switch>
            {auth && authRoutes.map(({path, component}) => 
                <Route key={path} path={path} component={component} exact/>
            )}
            {publicRoutes.map(({path, component}) => 
                <Route key={path} path={path} component={component} exact/>
            )}
            <Redirect to='/login'/>
        </Switch>
    )
}

export default AppRouter
