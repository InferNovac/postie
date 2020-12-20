import React from "react";

const Loading = () => (
    <div className="load-screen full-height">
        <div className="d-flex full-height align-items-center justify-content-center">
            <div className="spinner-border text-primary">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    </div>
);

export default Loading;
