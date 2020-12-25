import React, { useState } from "react";
import { Input, Button } from "../ui/UserInterface";
import { getUserCredentials } from "../contact_server/ContactServer";

const handleChange = (event, callback) => callback(event.target.value);
const handleOnSubmit = (event) => {
    event.preventDefault();
    const { elements } = event.target;
    const userData = {};
    for (const element of elements) {
        const { name, value } = element;
        if (value.length > 0) {
            userData[name] = value;
        }
    }

    getUserCredentials(userData.userName, userData.password)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
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

const Form = ({ children }) => {
    return (
        <form method="POST" onSubmit={handleOnSubmit} className="form">
            {children}
        </form>
    );
};

const LoginForm = () => (
    <Form>
        <UserName />
        <Password />
        <Sumbit />
    </Form>
);

export default LoginForm;
