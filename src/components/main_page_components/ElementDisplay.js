import React, { useState, useEffect } from "react";
import { readStorage } from "../contact_server/ContactServer";

/*

const showcasePreview = !this.state.expand
            ? this.props.projectDes.substring(0, 400)
            : this.props.projectDes;
        const showProfIcon =
            this.props.pClick === "none" ? (
                ""
            ) : (
                <span className="hover" onClick={this.props.pClick}>
                    <i className="icon-size material-icons">account_circle</i>
                </span>
            );

        const fullPage = !this.state.expand ? "" : "d-flex";
        return (
            <div className={"user-projects card container " + fullPage}>
                <img
                    src={this.state.image}
                    className="user-projects-img card-img-top"
                    alt="Project"
                ></img>
                <div className="card-body">
                    <div className="card-title">
                        <strong>Author: </strong>
                        <i>{this.props.userName}</i>
                    </div>
                    <span className="hover" onClick={this.expandBtn}>
                        <h6 className="card-title">
                            {this.props.projectTitle}
                        </h6>
                        <p className="card-text">{showcasePreview}</p>
                    </span>
                    <div className="btn-group-vertical float-right">
                        {showProfIcon}
                    </div>
                </div>
            </div>
        );


*/

const Image = ({ imageName }) =>
    readStorage(imageName)
        .then((image) => <img src={image} alt="an image" />)
        .catch((error) => console.error(error));

const ElementDisplay = ({ imageName }) => {
    <Image imageName={imageName} />;
};

export default ElementDisplay;
