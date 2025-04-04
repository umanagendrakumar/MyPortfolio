import gradeConverterImg from "../../assets/proj-gpaConverter.png";
import todoListImg from "../../assets/proj-todoList.png";
// import portfolioImg from "../../assets/proj-portfolio.png";
import portfolioImg from "../../assets/proj-portfolio.png";


export const projectList = [{
    index: 1,
    imgUrl: gradeConverterImg,
    title: "GPA CONVERTER",
    liveUrl: "https://uma03.netlify.app/",
    githubUrl: "https://github.com/umanagendrakumar/5thSemester-Grade-to-SGPA"
},
{
    index: 2,
    imgUrl: todoListImg,
    title: "T0-DO LIST WITH BIN",
    liveUrl: "https://uma-todolist.netlify.app/",
    githubUrl: "https://github.com/umanagendrakumar/Todo_List"
},
{
    index: 3,
    imgUrl: portfolioImg,
    title: "MY PORTFOLIO",
    liveUrl: "https://kunk-portfolio.netlify.app/",
    githubUrl: "https://github.com/umanagendrakumar/MyPortfolio"
}
];


const Card = ({ imgUrl, title, liveUrl, githubUrl }) => {
    return (
        <div className="projectCard">
            <div className="title">{title}</div>
            <div className="img-wrapper">
                <img src={imgUrl} className="img" alt="Project image"></img>
            </div>
            <div className="links-wrapper">
                <a href={liveUrl} className="link live-btn">LIVE</a>
                <a href={githubUrl} className="link github-btn">GITHUB</a>
            </div>
        </div>
    );
}

export default Card;
