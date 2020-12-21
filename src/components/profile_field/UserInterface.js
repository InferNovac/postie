import React from "react";
import "./interface.css";

export const Input = ({
    title,
    name,
    placeholder,
    value,
    handleChange,
    type,
}) => (
    <div className="box">
        <label> {title} </label>
        <input
            title={title}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            type={type}
        />
    </div>
);

export const Select = ({
    title,
    name,
    value,
    handleChange,
    placeholder,
    options,
}) => (
    <div className="box">
        <label> {title} </label>
        <select name={name} value={value} onChange={handleChange}>
            required
            <option selected disabled>
                {placeholder}
            </option>
            {options.map((field, index) => (
                <option key={index} value={field} label={field}>
                    {field}
                </option>
            ))}
        </select>
    </div>
);

export const Button = ({ isValid, type, title, handler, children }) => (
    <button disabled={isValid} type={type} title={title} onClick={handler}>
        {children}
    </button>
);
