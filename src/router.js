import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./style/common.less"
import ScifiNavbar from "./pages/home/scifiNavbar";
import Home from "./pages/home";
import Movies from "./pages/movies";
import Books from "./pages/books";
import Science from "./pages/science";
import Press from "./pages/press";
import Albums from "./pages/albums";
import Passengers from "./pages/passengers";
import NotFound from "./common/notFound";
import logo from "./logo.png";
import Login from './pages/login';


class Routers extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <ScifiNavbar />    
                </header>
                <Router>
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