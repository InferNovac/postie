import React from "react";
import { Component } from "react";
import { writeStorage, writePostData } from "../contact_server/ContactServer";

/*
  Allows uploading a project there is few checks here which have to be ticked to upload a project
  self-explanatory code nothing complex occurs here.

*/
class UploadProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            error: null,
            uName: this.props.uName,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleChange(e) {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            if (image.type.includes("image")) {
                this.setState({ image: image });
            } else {
                this.setState({
                    error: (
                        <p className="danger"> Only Images Are Accepted !</p>
                    ),
                });
                e.target.value = "";
            }
        }
    }
    async handleUpload(event) {
        event.preventDefault();
        const getTitle = document.getElementById("title").value;
        const getDesc = document.getElementById("desc").value;
        let report = <p className="danger"> Something Went Wrong !</p>;
        if (getDesc.length < 500) {
            report = (
                <p className="danger">
                    {" "}
                    Description Must Be At Least 500 Characters Long !
                </p>
            );
        }

        if (
            this.state.image !== null &&
            getTitle.length !== 0 &&
            getDesc.length >= 500
        ) {
            const image = this.state.image;
            const storageCall = await writeStorage(image);
            if (storageCall) {
                writePostData(getTitle, getDesc, this.state.uName, image.name);
                this.clearValues();
                report = <p className="success"> Uploaded Successfully !</p>;
            }
        }
        this.setState({ error: report });
    }
    clearValues() {
        const getTitle = document.getElementById("title");
        const getDesc = document.getElementById("desc");
        const getUpload = document.getElementById("uploader");
        getUpload.value = "";
        getTitle.value = "";
        getDesc.value = "";
    }
    render() {
        return (
            <div className="upload-project">
                <div className="d-flex full-height align-items-center justify-content-center">
                    <div className="form-struct card">
                        <div className="container">
                            <h3 className="text-center">UPLOAD PROJECT</h3>
                        </div>
                        <form>
                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            className="form-control"
                                            placeholder="Enter Your Title"
                                            title="Title"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea
                                            name="body"
                                            id="desc"
                                            className="form-control"
                                            placeholder="Enter Your Description"
                                            rows="10"
                                            cols="30"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Choose File</label>
                                        <input
                                            type="file"
                                            id="uploader"
                                            className="form-control"
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <button
                                            className="btn btn-primary form-control"
                                            onClick={this.handleUpload}
                                        >
                                            Upload
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm">
                                    <div className="form-group">
                                        <div className="container text-center">
                                            {this.state.error}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default UploadProject;
