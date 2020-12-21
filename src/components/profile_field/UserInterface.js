import React from "react";
import "./interface.css";

export const Input = ({
    type,
    name,
    value,
    title,
    placeholder,
    handleChange,
}) => (
    <React.Fragment>
        <label className="label"> {title} </label>
        <input
            name={name}
            type={type}
            title={title}
            value={value}
            onChange={handleChange}
            className="form-control"
            placeholder={placeholder}
        />
    </React.Fragment>
);

export const Select = ({
    name,
    title,
    value,
    options,
    placeholder,
    handleChange,
}) => (
    <React.Fragment>
        <label className="label"> {title} </label>
        <select
            name={name}
            value={value}
            onChange={handleChange}
            className="form-control"
        >
            required
            <option defaultValue disabled>
                {placeholder}
            </option>
            {options.map((field, index) => (
                <option key={index} value={field} label={field}>
                    {field}
                </option>
            ))}
        </select>
    </React.Fragment>
);

export const Button = ({ disabled, type, title, handler, children }) => (
    <button
        type={type}
        title={title}
        disabled={disabled}
        onClick={handler}
        className="button"
    >
        {children}
    </button>
);
