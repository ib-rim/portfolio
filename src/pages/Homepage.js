import Nav from '../components/Nav';
import Pocket from '../components/Pocket';
import LinkedIn from '../img/linkedin.png';
import Email from '../img/email.png';

function Homepage() {

    return (
        <div className="container">
            <div className="columns">
                <div className="col content"> 
                    
                </div>
                <div className="col content">

                </div>
                <div className="col content">
                    <a className="email" href="mailto:ib.bashir@hotmail.com" target="_blank" rel="noopener noreferrer">
                        <img className="contactIcon" src={Email}/>
                        <div className="contactText">Email Me</div>
                    </a>
                    <a className="linkedin" href="https://uk.linkedin.com/in/ibrahim-bashir-250953197" target="_blank" rel="noopener noreferrer">
                        <img className="contactIcon" src={LinkedIn}/>
                        <div className="contactText">Linked In</div>
                    </a>	
                </div>
            </div>
            <Nav></Nav>
        </div>
    )
}


export default Homepage;