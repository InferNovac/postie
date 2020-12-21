import React from "react";
import { Input, Select, Button } from "../../profile_field/UserInterface";
import "./signup.css";

const SignUp = () => (
    <div className="h-100 center-y">
        <form className="sign-up">
            <div className="row">
                <div className="col">
                    <Input
                        title="Username"
                        name="userName"
                        placeholder="Enter Profile Name"
                        type="text"
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
                <div className="col-2">
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
            <Button type="sumbit" title="Sumbit">
                Sumbit
            </Button>
        </form>
    </div>
);

export default SignUp;
