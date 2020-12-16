import React from "react";

const Input = ({ title, placeholder, value, handleChange, type }) => (
    // We want a label for our input, we want to receive a string value, and we want an ability to handle change. No need to handle options
    <div
        className="form-group"
        //Incorporates our label into our input
    >
        <label> {title} </label>
        <input //Provides template for our input function, with optional fields to fill out for each depending on how we want to use it
            title={title}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            type={type}
        />
    </div>
);

export default Input;
