import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Store from "./redux/Store";
import Nav from "./nav/Nav";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Profile from "./pages/Profile";
import "./css/style.css";

const App = () => (
    <Provider store={Store}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Nav />
                    <Main />
                </Route>
                <Route exact path="/sign-up">
                    <SignUp />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/upload">
                    <Upload />
                </Route>
                <Route path="/:user">
                    <Profile />
                </Route>
            </Switch>
        </Router>
    </Provider>
);

export default App;
