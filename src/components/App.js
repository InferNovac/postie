import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./main_page_components/nav/Nav";
import Main from "./structured_pages/Main";
import SignUp from "./structured_pages/sign_up/SignUp";
import Login from "./structured_pages/Login";
import Upload from "./structured_pages/Upload";
import "./css/style.css";

const App = () => (
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
                <div>Dummy page for user</div>
            </Route>
        </Switch>
    </Router>
);

export default App;
