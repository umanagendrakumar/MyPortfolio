
import Card from "../../UIComponents/projectCard";
import { projectList } from "../../UIComponents/projectCard";

const Projects = () => {
    return (
        <div className="projects cover80">
            <h1 className="project-heading">Projects</h1>
            <div className="project-cards">
            {
                projectList.map((eachProj) => {
                    return <Card key={eachProj.index} {...eachProj} />
                })
            }
            </div>
        </div>
    );

};

export default Projects;