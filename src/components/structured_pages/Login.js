import React from "react";
import { Input, Button } from "../profile_field/UserInterface";

const Login = () => (
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
            </div>
            <div className="row">
                <div className="col">
                    <Input
                        title="Password"
                        name="password"
                        placeholder="Enter Password"
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
        </form>
    </div>
);

export default Login;
