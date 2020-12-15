import React from "react";

const Submit = ({ formValid, buttonType, buttonName, buttonHandler }) => {
    return (
        <div className="form-submit">
            <button // Provides a template for our buttons, in both creation and log in page
                disabled={formValid}
                type={buttonType}
                name={buttonName}
                onClick={buttonHandler}
            />
        </div>
    );
};

export default Submit;
