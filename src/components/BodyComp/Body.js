import initialPic from '../../../assets/initial-pic.jpg';

const Body = () => {

    return (
        <div className="body cover80 ">
            <div className="body-left">
                <div className="body-img-container img-container">
                    <img className="body-img my-image" src={initialPic} alt="my-pic" />
                </div>
            </div>
            <div className="body-right">
                <p className='body-right-hello'>Hello I'm</p>
                <h1 className='body-right-name'>Kambala Uma Nagendra Kumar</h1>
                <h1 className='body-right-title'>Aspiring Web Developer</h1>
                <div className="body-btn-section">
                    <button className="body-btn body-btn-download">Download CV</button>
                    <button className="body-btn body-btn-contact">Contact Me</button>
                </div>
                <div className="body-links-section links-section">
                    <a href="https://www.linkedin.com/in/kunk/" className="body-link linkedin-link">LinkedIn</a>
                    <a href="https://github.com/umanagendrakumar" className="body-link github-link">GitHub</a>
                    <a href="https://leetcode.com/u/KunkLeetcodeId/" className="body-link leetcode-link">Leetcode</a>
                </div>
            </div>
        </div>
    );
}

export default Body;