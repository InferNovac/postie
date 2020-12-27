import React from "react";
import {
    IsValid,
    nameRegex,
    userNameRegex,
    passwordRegex,
} from "../auxilary/Constant";

const UserName = ({ value }) => (
    <IsValid
        check={userNameRegex.test(value)}
        incorrect={[
            "6 characters long",
            "Contains only lowercasae letters",
            "Contains only upppercase letters",
        ]}
        correct={["Correct !"]}
    />
);

const Name = ({ value }) => (
    <IsValid
        check={nameRegex.test(value)}
        incorrect={[
            "Contains only lowercasae letters",
            "Contains only upppercase letters",
        ]}
        correct={["Correct !"]}
    />
);

const Password = ({ value }) => (
    <IsValid
        check={passwordRegex.test(value)}
        incorrect={[
            "Minimum 8 characters",
            "At least one upppercase letter",
            "At least one lowercase letter",
            "At least one number",
            "One special character '@$!%*?&'",
        ]}
        correct={["Correct !"]}
    />
);

const Validate = ({ type, value }) => {
    switch (type) {
        case "userName":
            return <UserName value={value} />;
        case "name":
            return <Name value={value} />;
        case "rePassword":
            return <Password value={value} />;
        case "password":
            return <Password value={value} />;
        default:
            return "";
    }
};

export default Validate;
