import React, { Fragment } from "react";
import "./interface.css";

export const Input = ({
    type,
    name,
    hint,
    value,
    label,
    placeholder,
    handleChange,
}) => (
    <Fragment>
        <label className="label"> {label} </label>
        <input
            name={name}
            type={type}
            title={label}
            value={value}
            onChange={handleChange}
            className="form-control"
            placeholder={placeholder}
        />
        {hint}
    </Fragment>
);

export const TextArea = ({
    name,
    rows,
    label,
    columns,
    placeholder,
    handleChange,
}) => (
    <Fragment>
        <label className="label">{label}</label>
        <textarea
            name={name}
            rows={rows}
            cols={columns}
            onChange={handleChange}
            className="form-control"
            placeholder={placeholder}
        />
    </Fragment>
);

export const Select = ({
    name,
    label,
    value,
    options,
    placeholder,
    handleChange,
}) => (
    <Fragment>
        <label className="label">{label}</label>
        <select
            name={name}
            value={value}
            title={label}
            onChange={handleChange}
            className="form-control"
        >
            <option defaultValue disabled>
                {placeholder}
            </option>
            {options.map((field, index) => (
                <option key={index} value={field} label={field}>
                    {field}
                </option>
            ))}
        </select>
    </Fragment>
);

export const Button = ({ disabled, type, title, handler, children }) => (
    <button
        type={type}
        title={title}
        onClick={handler}
        className="button"
        disabled={disabled}
    >
        {children}
    </button>
);
