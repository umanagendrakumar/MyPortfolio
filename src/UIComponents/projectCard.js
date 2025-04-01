import gradeConverterImg from "../../assets/proj-gpaConverter.png";


export const projectList = [{
    index: 1,
    imgUrl: gradeConverterImg,
    title: "GPA Converter",
    liveUrl: "https://uma03.netlify.app/",
    githubUrl: ""
},
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
