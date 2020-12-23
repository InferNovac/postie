import React, { useState } from "react";
import { Input, Button } from "../ui/UserInterface";

const handleChange = (event, callback) => callback(event.target.value);

const UserName = () => {
    const [userName, setUserName] = useState("");
    return (
        <div className="col">
            <Input
                type="text"
                name="userName"
                label="Username"
                value={userName}
                placeholder="Enter Profile Name"
                handleChange={(event) => handleChange(event, setUserName)}
            />
        </div>
    );
};

const Password = () => {
    const [password, setPassword] = useState("");
    return (
        <div className="col">
            <Input
                value={password}
                type="password"
                name="password"
                label="Password"
                placeholder="Enter password"
                handleChange={(event) => handleChange(event, setPassword)}
            />
        </div>
    );
};

const Sumbit = () => (
    <div className="col">
        <Button disabled={false} type="sumbit" title="Sumbit">
            Sumbit
        </Button>
    </div>
);

const LoginForm = () => (
    <form
        onSubmit={(event) => {
            event.preventDefault();
            const userData = {};
            for (const element of event.target) {
                if (element.value.length > 0) {
                    userData[element.name] = element.value;
                }
            }
        }}
        className="sign-up"
    >
        <div className="row">
            <UserName />
        </div>
        <div className="row">
            <Password />
        </div>
        <div className="row">
            <Sumbit />
        </div>
    </form>
);

const Login = () => (
    <div className="h-100 center-y">
        <LoginForm />
    </div>
);

export default Login;
