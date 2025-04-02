import gradeConverterImg from "../../assets/proj-gpaConverter.png";
import todoListImg from "../../assets/proj-todoList.png";
import portfolioImg from "../../assets/proj-portfolio.png";


export const projectList = [{
    index: 1,
    imgUrl: gradeConverterImg,
    title: "GPA Converter",
    liveUrl: "https://uma03.netlify.app/",
    githubUrl: "https://github.com/umanagendrakumar/5thSemester-Grade-to-SGPA"
},
{
    index: 2,
    imgUrl: todoListImg,
    title: "To-Do List With Bin",
    liveUrl: "https://uma-todolist.netlify.app/",
    githubUrl: "https://github.com/umanagendrakumar/Todo_List"
},
{
    index: 3,
    imgUrl: portfolioImg,
    title: "My Portfolio",
    liveUrl: "https://kunk-portfolio.netlify.app/",
    githubUrl: "https://github.com/umanagendrakumar/MyPortfolio"
}
];


const Card = ({ imgUrl, title, liveUrl, githubUrl }) => {
    return (
        <div className="projectCard">
            <div className="img-wrapper">
                <img src={imgUrl} className="img" alt="Project image"></img>
            </div>
            <div className="title">{title}</div>
            <div className="links-wrapper">
                <a href={liveUrl} className="link live-btn">Live</a>
                <a href={githubUrl} className="link github-btn">Github</a>
            </div>
        </div>
    );
}

export default Card;
