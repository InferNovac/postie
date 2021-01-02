import React, { useState } from "react";
import { Input, Button, TextArea } from "../ui/UserInterface";
import { setPost, setStorage } from "../server/ContactServer";
import { handleChange, collect } from "../auxilary/Constant";

const handleImage = (event, callback) => {
    callback(event.target.files[0]);
};

const handleOnSubmit = (event, image) => {
    event.preventDefault();
    const post = collect(event.target.elements);
    const userName = "Test";
    Promise.all([
        setPost({
            ...post,
            userName: userName,
            imageName: image.name,
        }),
        setStorage(image),
    ]);
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

const UploadFile = ({ setImage }) => (
    <div className="col">
        <Input
            type="file"
            label="Upload"
            handleChange={(event) => handleImage(event, setImage)}
        />
    </div>
);

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

const UploadForm = () => {
    const [image, setImage] = useState("");
    return (
        <form
            onSubmit={(event) => handleOnSubmit(event, image)}
            className="form"
        >
            <div className="row">
                <Title />
            </div>
            <div className="row">
                <UploadFile setImage={setImage} />
            </div>
            <div className="row">
                <Description />
            </div>
            <div className="row">
                <Sumbit />
            </div>
        </form>
    );
};

export default UploadForm;
