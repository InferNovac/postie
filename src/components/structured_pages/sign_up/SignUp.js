import React, { useState } from "react";
import { Input, Select, Button } from "../../ui/UserInterface";
import "./signup.css";

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

const Name = () => {
    const [name, setName] = useState("");
    return (
        <div className="col">
            <Input
                name="name"
                type="text"
                value={name}
                label="Name"
                placeholder="Enter Name"
                handleChange={(event) => handleChange(event, setName)}
            />
        </div>
    );
};

const Email = () => {
    const [email, setEmail] = useState("");
    return (
        <div className="col">
            <Input
                type="text"
                name="email"
                label="Email"
                value={email}
                placeholder="Enter E-mail"
                handleChange={(event) => handleChange(event, setEmail)}
            />
        </div>
    );
};

const Gender = () => {
    const [gender, setGender] = useState("");
    return (
        <div className="col">
            <Select
                name="gender"
                value={gender}
                label="Gender"
                placeholder="Select Gender"
                options={["Male", "Female"]}
                handleChange={(event) => handleChange(event, setGender)}
            />
        </div>
    );
};

const UserType = () => {
    const [userType, setUserType] = useState("");
    return (
        <div className="col">
            <Select
                name="userType"
                value={userType}
                label="User Type"
                placeholder="Select User Type"
                options={["Student", "Investor"]}
                handleChange={(event) => handleChange(event, setUserType)}
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

const RePassword = () => {
    const [rePassword, setRePassword] = useState("");
    return (
        <div className="col">
            <Input
                type="password"
                name="rePassword"
                value={rePassword}
                label="Re-enter Password"
                placeholder="Re-enter Password"
                handleChange={(event) => handleChange(event, setRePassword)}
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

const SignUpForm = () => (
    <form
        method="POST"
        className="sign-up"
        onSubmit={(event) => {
            event.preventDefault();
            const userData = {};
            for (const element of event.target) {
                if (element.value.length > 0) {
                    userData[element.name] = element.value;
                }
            }
        }}
    >
        <div className="row">
            <UserName />
            <Name />
        </div>
        <div className="row">
            <Email />
            <Gender />
        </div>
        <div className="row">
            <UserType />
        </div>
        <div className="row">
            <Password />
            <RePassword />
        </div>
        <div className="row">
            <Sumbit />
        </div>
    </form>
);

const SignUp = () => (
    <div className="h-100 center-y">
        <SignUpForm />
    </div>
);

export default SignUp;
