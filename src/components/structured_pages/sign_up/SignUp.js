import React, { useState } from "react";
import { Input, Select, Button } from "../../profile_field/UserInterface";
import "./signup.css";

const FormFields = () => {
    const [fields, setFields] = useState({
        name: "",
        email: "",
        gender: "",
        userName: "",
        userType: "",
        password: "",
        rePassword: "",
    });

    const handleChannge = (event) =>
        setFields({ ...fields, [event.target]: event.target.value });

    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <Input
                        type="text"
                        name="userName"
                        title="Username"
                        value={fields.userName}
                        handleChange={handleChannge}
                        placeholder="Enter Profile Name"
                    />
                </div>
                <div className="col">
                    <Input
                        title="Name"
                        name="name"
                        placeholder="Enter Name"
                        type="text"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Input
                        title="Email"
                        name="email"
                        placeholder="Enter E-mail"
                        type="text"
                    />
                </div>
                <div className="col">
                    <Select
                        title="Gender"
                        name="gender"
                        placeholder="Select Gender"
                        options={["Male", "Female"]}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Select
                        title="User Type"
                        name="userType"
                        placeholder="Select User Type"
                        options={["Student", "Investor"]}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Input
                        title="Password"
                        name="password"
                        placeholder="Enter password"
                        type="password"
                    />
                </div>
                <div className="col">
                    <Input
                        title="Re-enter Password"
                        name="rePassword"
                        placeholder="Re-enter Password"
                        type="password"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Button disabled={true} type="sumbit" title="Sumbit">
                        Sumbit
                    </Button>
                </div>
            </div>
        </React.Fragment>
    );
};

const SignUp = () => (
    <div className="h-100 center-y">
        <form className="sign-up">
            <FormFields />
        </form>
    </div>
);

export default SignUp;
