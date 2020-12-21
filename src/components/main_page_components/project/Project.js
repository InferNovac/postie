import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../structured_pages/Loading";
import { fetchData } from "../../auxilary_functions/Constant";
import { getStorage } from "../../contact_server/ContactServer";
import "./project.css";

const Image = ({ imageName }) => {
    const [loading, setLoading] = React.useState(<Loading />);
    React.useEffect(() => {
        fetchData(getStorage(imageName), (image) =>
            setLoading(<img src={image} alt={imageName} />)
        );
    }, []);

    return loading;
};

const Project = ({ userName, title, body, imageName }) => (
    <section className="project">
        <div>
            <header>
                <span>
                    Posted by{" "}
                    <Link
                        to={`/${userName}`}
                        title={userName}
                        className="project-link"
                    >
                        <em>{userName}</em>
                    </Link>
                </span>
            </header>
            <main>
                <h1>{title}</h1>
                <Image imageName={imageName} />
            </main>
            <footer></footer>
        </div>
    </section>
);

export default Project;
