import React from "react";
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

const Image = ({ imageName, imageAlt }) =>
    readStorage(imageName)
        .then((image) => <img src={image} alt={imageAlt} />)
        .catch((error) => console.error(error));

const ElementDisplay = ({
    projectDescription,
    projectTitle,
    imageName,
    imageAlt,
    userName,
}) => {
    <section>
        <span>{userName}</span>
        <h1>{projectTitle}</h1>
        <Image imageName={imageName} imageAlt={imageAlt} />
    </section>;
};

export default ElementDisplay;
