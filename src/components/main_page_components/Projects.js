import React from "react";
import Project from "./project/Project";
import Loading from "../structured_pages/Loading";
import { fetchData } from "../auxilary_functions/Constant";
import { getAllPosts } from "../contact_server/ContactServer";

const Projects = () => {
    const [projects, setProjects] = React.useState(<Loading />);
    React.useEffect(() => {
        fetchData(getAllPosts(), (projects) =>
            setProjects(
                projects.map(({ userName, title, body, imageName }, index) => (
                    <Project
                        key={index}
                        imageName={imageName}
                        userName={userName}
                        title={title}
                        body={body}
                    />
                ))
            )
        );
    }, []);

    return projects;
};

export default Projects;
