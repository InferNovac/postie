import React from "react";

const Select = ({ title, value, handleChange, placeholder, options }) => {
    return (
        <div
            className="form-group"
            //A template for our drop down menus at form creation
        >
            <label> {title} </label>
            <select //Template for select
                className="form-control"
                value={value}
                onChange={handleChange}
            >
                required
                <option
                    selected
                    disabled
                    //Template for our options, with a default option that is non selectable
                >
                    {placeholder}
                </option>
                {options.map((field) => {
                    //Allows us to use an array of choices to be displayed rather than create each option within the render portion
                    return (
                        <option key={field} value={field} label={field}>
                            {field}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default Select;
