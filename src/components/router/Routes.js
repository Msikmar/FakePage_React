import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Contact } from '../pages/Contact';
import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { News } from '../pages/News';
import { Login } from "../pages/Login";
import { NotFoundPage } from '../pages/NotFoundPage';
import RoutePath from './RoutePath';
import { UserContext } from "../../global/Userprovider"

export const Routes = (props) => {

    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    
    const blockRouteIfAuthenticated = (navigationToView) => {
        return authenticatedUser ? Home : navigationToView
    }
    
    const blockRouteIfNotAuthenticated = (navigateToView) => {
        return !authenticatedUser ? Login : navigateToView
    }
    
    const checkIfUserIsAuthenticatedInBrowser = () => {
        setAuthenticatedUser( localStorage.getItem("username"))
    }
    
    useEffect(() => {
        checkIfUserIsAuthenticatedInBrowser()
    }, [])

    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path={RoutePath.home} component={Home} />
                <Route exact path={RoutePath.contact} component={blockRouteIfNotAuthenticated(Contact)} />
                <Route exact path={RoutePath.details} component={blockRouteIfNotAuthenticated(Details)} />
                <Route exact path={RoutePath.news} component={blockRouteIfNotAuthenticated(News)} />
                <Route exact path={RoutePath.login} component={blockRouteIfAuthenticated(Login)} />
                <Route component={NotFoundPage} />
            </Switch>   
        </Router>
    )
}