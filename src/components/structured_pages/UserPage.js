import React from "react";
import { Component } from "react";
import ElementDisplay from "../main_page_components/ElementDisplay";

export default class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: this.props.projects,
            uName: this.props.uName,
        };
    }
    getProjects() {
        const userTitle = (" Projects By:  " + this.state.uName).toUpperCase();
        const passUser = this.state.projects;
        const nProjects = [...Array(this.state.projects.length).keys()];
        const projects = nProjects.map((p) => (
            <ElementDisplay
                key={p.toString()}
                projectTitle={passUser[p].title}
                userName={passUser[p].userName}
                projectDes={passUser[p].body}
                image={passUser[p].imageName}
                pClick={"none"}
            />
        ));
        return (
            <div>
                <div className="container text-center user-display">
                    <h3>{userTitle}</h3>
                </div>
                {projects}
            </div>
        );
    }
    render() {
        const projects = this.getProjects();
        return <div className="user-page">{projects}</div>;
    }
}
