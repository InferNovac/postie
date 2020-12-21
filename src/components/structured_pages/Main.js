import React from "react";
import Project from "../main_page_components/Project";
import Loading from "../structured_pages/Loading";
import { checkAllPosts } from "../contact_server/ContactServer";

const Projects = () => {
    const [projects, setProjects] = React.useState(<Loading />);

    React.useEffect(() => {
        const fetchData = async () =>
            checkAllPosts()
                .then((projects) =>
                    setProjects(
                        projects.map((project, index) => (
                            <Project key={index} userName={project.userName} />
                        ))
                    )
                )
                .catch((error) => console.error(error));
        fetchData();
    }, []);

    /*
    data.map((project, index) => (
        <Project key={index} userName={project.userName} />
    ))
    */
    return projects;
};

const Main = () => (
    <div className="content-space mx-auto">
        <Projects />
    </div>
);

export default Main;
