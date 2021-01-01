import React, { useState } from "react";
import { Input, Button } from "../ui/UserInterface";
import { handleChange, collect } from "../auxilary/Constant";
const handleOnSubmit = (event) => {
    event.preventDefault();
    const { userName, password } = collect(event.target.elements);
};

const UserName = () => {
    const [userName, setUserName] = useState("");
    return (
        <div className="row">
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
        </div>
    );
};

const Password = () => {
    const [password, setPassword] = useState("");
    return (
        <div className="row">
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
        </div>
    );
};

const Sumbit = () => (
    <div className="row">
        <div className="col">
            <Button disabled={false} type="sumbit" title="Sumbit">
                Sumbit
            </Button>
        </div>
    </div>
);

const LoginForm = () => (
    <form method="POST" onSubmit={handleOnSubmit} className="form">
        <UserName />
        <Password />
        <Sumbit />
    </form>
);

export default LoginForm;
