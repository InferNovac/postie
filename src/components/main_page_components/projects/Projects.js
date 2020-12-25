import React from "react";
import Project from "../project/Project";
import Loading from "../../auxilary_functions/Loading";
import { fetchData } from "../../auxilary_functions/Constant";
import { getAllPosts } from "../../contact_server/ContactServer";

const Projects = () => {
    const [projects, setProjects] = React.useState(
        <div className="h-100 center-y">
            <Loading />
        </div>
    );
    React.useEffect(() => {
        fetchData(getAllPosts(), (projects) =>
            setProjects(
                projects.map(({ userName, title, imageName }, index) => (
                    <Project
                        key={index}
                        imageName={imageName}
                        userName={userName}
                        title={title}
                    />
                ))
            )
        );
    }, []);

    return projects;
};

export default Projects;
