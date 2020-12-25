import React, { useState } from "react";
import { Input, Button, TextArea } from "../ui/UserInterface";

const handleChange = (event, callback) => callback(event.target.value);
const handleUpload = (event, callback) => {
    console.log(event.target.files[0]);
};
const handleOnSubmit = (event) => {
    event.preventDefault();
};

const Title = () => {
    const [title, setTitle] = useState("");
    return (
        <div className="col">
            <Input
                type="text"
                name="title"
                label="Title"
                value={title}
                placeholder="Enter Your Title"
                handleChange={(event) => handleChange(event, setTitle)}
            />
        </div>
    );
};

const UploadFile = () => {
    return (
        <div className="col">
            <Input
                type="file"
                label="Upload"
                id="file-upload"
                handleChange={handleUpload}
            />
        </div>
    );
};

const Description = () => {
    const [description, setDescription] = useState("");
    return (
        <div className="col">
            <TextArea
                rows="10"
                columns="30"
                type="textarea"
                name="description"
                label="Description"
                value={description}
                placeholder="Enter Your Description"
                handleChange={(event) => handleChange(event, setDescription)}
            />
        </div>
    );
};

const Sumbit = () => (
    <div className="col">
        <Button disabled={false} type="sumbit" title="Sumbit">
            Upload
        </Button>
    </div>
);

const UploadForm = () => (
    <form onSubmit={handleOnSubmit} className="form">
        <div className="row">
            <Title />
        </div>
        <div className="row">
            <UploadFile />
        </div>
        <div className="row">
            <Description />
        </div>
        <div className="row">
            <Sumbit />
        </div>
    </form>
);

export default UploadForm;
