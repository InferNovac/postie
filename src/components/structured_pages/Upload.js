import React, { useState } from "react";
import { Input, Button, TextArea } from "../ui/UserInterface";

const handleChange = (event, callback) => callback(event.target.value);

const Title = () => {
    const [title, setTitle] = useState("");
    return (
        <div className="col">
            <Input
                type="text"
                name="title"
                title="Title"
                value={title}
                placeholder="Enter Your Title"
                handleChange={(event) => handleChange(event, setTitle)}
            />
        </div>
    );
};

const UploadFile = () => {
    const [file, setFile] = useState("");
    return (
        <div className="col">
            <Input
                type="file"
                value={file}
                handleChange={(event) => handleChange(event, setFile)}
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
                title="Description"
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
    <form className="sign-up">
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

const Upload = () => (
    <div className="h-100 center-y">
        <UploadForm />
    </div>
);

export default Upload;
