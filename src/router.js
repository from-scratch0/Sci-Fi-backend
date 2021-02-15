import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "./style/common.less"
import ScifiNavbar from "./components/scifiNavbar";
import Home from "./pages/home";
import Movies from "./pages/movies";
import Books from "./pages/books";
import Science from "./pages/science";
import Press from "./pages/press";
import Albums from "./pages/albums";
import Passengers from "./pages/passengers";
import NotFound from "./components/common/notFound";
import logo from "./logo.png";
import Login from './pages/login';
import createHistory from 'history/createHashHistory';
let history = createHistory();
history.listen(loc => {
    if(loc.pathname == '/' && !sessionStorage.getItem('username')) {
        // history.push('/login');

    }
})


class Routers extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <ScifiNavbar />    
                </header>
                <Router history={history}>
                    <Switch>
                        <Route exact path = "/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/movies" component={Movies} />
                        <Route path="/books" component={Books} />
                        <Route path="/science" component={Science} />
                        <Route path="/press" component={Press} />
                        <Route path="/albums" component={Albums} />
                        <Route path="/passengers" component={Passengers} />
                        <Route path="/not-found" component={NotFound} />
                        <Redirect to="/not-found" />
                    </Switch>
                </Router>
            </React.Fragment>
         );
    }
}
 
export default Routers;