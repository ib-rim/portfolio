import Nav from '../components/Nav';
import Pocket from '../components/Pocket';
import LinkedIn from '../img/linkedin.png';
import Email from '../img/email.png';
import Me from '../img/me.jpg';

function Homepage() {

    return (
        <div className="container">
            <div className="columns">
                <div className="col content"> 
                    <div className="aboutMe">
                        <img className="photo" src={Me} alt="Ibrahim Bashir"/>
                        <div className="aboutMeText">
                            I'm <b>Ibrahim</b>, a <b>Computer Science</b> student at <b>Queen Mary University of London.</b>
                        </div>
                    </div>
                    <div className="listText">
                        <b>Interests:</b>
                        <ul>
                            <li>UI/UX</li>
                            <li>Data Analysis</li>
                        </ul>
                    </div>
                    <div className="listText">
                        <b>Skills:</b>
                        <ul>
                            <li>React</li>
                            <li>???</li>
                        </ul>
                    </div>
                </div>
                <div className="col content">
                    <a className="portfolioText" href="https://ib-rim-speedcube.herokuapp.com/" target="_blank" rel="noopener noreferrer">Speedcubing App</a>
                </div>
                <div className="col content">
                    <a className="email" href="mailto:ib.bashir@hotmail.com" target="_blank" rel="noopener noreferrer">
                        <img className="contactIcon" src={Email} alt="Email Icon"/>
                        <div className="contactText">Email</div>
                    </a>
                    <a className="linkedin" href="https://uk.linkedin.com/in/ibrahim-bashir-250953197" target="_blank" rel="noopener noreferrer">
                        <img className="contactIcon" src={LinkedIn} alt="LinkedIn Icon"/>
                        <div className="contactText">Linked In</div>
                    </a>	
                </div>
            </div>
            <Nav></Nav>
        </div>
    )
}


export default Homepage;