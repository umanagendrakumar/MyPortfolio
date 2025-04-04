import aboutPic from '../../../assets/Photo.png';
import eduLogo from '../../../assets/degree.png';
import togetherLogo from '../../../assets/together.png';
const About = () => {
    return (
        <section className="about cover80" id='about'>
            <div className="about-left">
                <div className="about-heading1">Get To Know More</div>
                <div className="about-heading2">About ME</div>
                <div className="about-cards">
                    <div className="card card-degree">
                        <img className="degree-img card-img" alt="Edu Logo" src={eduLogo}></img>
                        <h2 className="card-head">Education</h2>
                        <p>B.Tech Bachelors Degree
                            Computer Science</p>
                    </div>
                    <div className="card card-hiring">
                        <img className="together-img card-img" alt="community Logo" src={togetherLogo}></img>

                        <h2 className="card-head">Status</h2>
                        <p>Ready To Build & Deploy Together</p>
                    </div>
                </div>
                <div className="about-para">My name is Kambala Uma Nagendra Kumar, and I am a final-year Computer Science Engineering student at Acharya Nagarjuna University. I am passionate about becoming a web developer and have built a solid foundation in <span className="about-para-bold">HTML, CSS, JavaScript, ReactJS, Java, and basic Data Structures and Algorithms (DSA).</span> In addition to my current skills, I am eager to learn and <span className="about-para-bold">Node.js, ExpressJS, MongoDB</span> to expand my expertise in modern web development and full-stack technologies. I am excited to grow, collaborate with like-minded professionals, and take on challenging projects that push my skills further.</div>
            </div>
            <div className="about-right">
                <div className="about-img-container img-container">
                    <img className="about-img my-image" alt="My Image" ></img>
                </div>
            </div>
        </section>
    );
};

export default About;
