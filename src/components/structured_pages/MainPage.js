import React from "react";
import {
    addUserData,
    addToEmailList,
    checkUserEmail,
    checkUserName,
    checkAllPosts,
} from "../contact_server/ContactServer";

const MainPage = () => {
    checkAllPosts()
        .then((response) => console.log(response))
        .catch((error) => console.error(error));

    return <div>Hello World !</div>;
};

export default MainPage;
