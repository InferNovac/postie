import React, { useState, Fragment } from "react";
import { Input, Select, Button } from "../../profile_field/UserInterface";
import "./signup.css";

const handleChange = (event, callback) => callback(event.target.value);

const UserName = () => {
    const [userName, setUserName] = useState("");
    return (
        <div className="col">
            <Input
                type="text"
                name="userName"
                title="Username"
                value={userName}
                handleChange={(event) => handleChange(event, setUserName)}
                placeholder="Enter Profile Name"
            />
        </div>
    );
};

const Name = () => {
    const [name, setName] = useState("");
    return (
        <div className="col">
            <Input
                title="Name"
                name="name"
                type="text"
                value={name}
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
                title="Email"
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
                title="Gender"
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
                title="User Type"
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
                title="Password"
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
                title="Re-enter Password"
                handleChange={(event) => handleChange(event, setRePassword)}
                placeholder="Re-enter Password"
            />
        </div>
    );
};

const FormFields = () => (
    <form className="sign-up">
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
            <div className="col">
                <Button disabled={true} type="sumbit" title="Sumbit">
                    Sumbit
                </Button>
            </div>
        </div>
    </form>
);

const SignUp = () => (
    <div className="h-100 center-y">
        <FormFields />
    </div>
);

export default SignUp;
