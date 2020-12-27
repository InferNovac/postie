import React from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
    const location = useLocation();
    console.log(location);
    return <div>Dummy page</div>;
};

export default Profile;
