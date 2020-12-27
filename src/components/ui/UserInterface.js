import React, { Fragment } from "react";
import Validate from "../forms/Validate";
import "./interface.css";

export const Input = ({
    ref,
    type,
    name,
    value,
    label,
    accept,
    placeholder,
    handleChange,
}) => (
    <Fragment>
        <label className="label"> {label} </label>
        <input
            ref={ref}
            name={name}
            type={type}
            title={label}
            value={value}
            accept={accept}
            onChange={handleChange}
            className="form-control"
            placeholder={placeholder}
        />
        <Validate type={name} value={value} />
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
            <option defaultValue={placeholder} disabled>
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
