import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import home from '../Styles/home.css'
import Image from "react-bootstrap/Image";
import ListGroup from 'react-bootstrap/ListGroup';

import  secPractise from './Images/SecurityPractice.jpg'; 
import HomepageImage from "./Images/HomepageImage.jpg";
import HomepageImage2 from "./Images/SecurityPractice.jpg";
import BssecurityImg from "./Images/BSPractice.png";
import Importantimg from "./Images/Importance.jpg";
const Home = () => {
const cardInfo = [
    // {image: "./Images/SecurityPractice.jpg", title:"What do you mean by Security Practices?", text:"Seurity Practice Definition"},
    // {image: "./Images/CommonPractices.png", title:"Common Security Practices", text:"List of security Practices"},
    // {image: "", title:"", text:""},
    <CardGroup className="card">
          <Card >
            <Card.Img variant="top" src={secPractise} alt="" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
            </Card>
            </CardGroup>
];

const renderCard = (card, index) => {
    return (
<CardGroup>
          <Card className="card">
            <Card.Img variant="top" src={HomepageImage2} alt=""/>
            <Card.Body>
              <Card.Title>What do you mean by security practice?</Card.Title>
              <Card.Text>
                A security practice is a set of established procedures, measures or actions designed to protect something valuable, such as data, assets or people from potential threats, risks or harm. These practices are put in place to ensure safety and minimize vulnerability.
              </Card.Text>
              <Card.Link target="_blank" href="https://en.wikipedia.org/wiki/Wikipedia:Personal_security_practices">Know more</Card.Link>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
            </Card>
            {/* <Card>
        <Card.Img variant="top" src="/Images/Practices.png" height={318} width={100}/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" alt="image 3"/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
        </Card> */}
            </CardGroup>
    );
};
    return ( 
        <div className="home">
            <img  className="img1" src={HomepageImage} height={50} />
            {cardInfo.map(renderCard)}    
          {/* List for types of security practices */}
          <h2 className="head">Best Security Practices</h2>
          <div className="container">
          
          <div className="list">
          <ListGroup  as="ol" numbered className="list">
            <ListGroup.Item target="_blank" action variant="secondary" href="https://security.calpoly.edu/content/passwords">Use a strong password</ListGroup.Item>
            <ListGroup.Item target="_blank" action variant="secondary" href="https://security.calpoly.edu/content/antivirus/index" >Install anti-virus software</ListGroup.Item>
            <ListGroup.Item target="_blank" action variant="secondary" href="https://uk.norton.com/blog/how-to/the-importance-of-general-software-updates-and-patches">Update operating system regularly</ListGroup.Item>
            <ListGroup.Item target="_blank" action variant="secondary" href="https://www.techopedia.com/definition/8117/log-out" >Log off public computers</ListGroup.Item>
            <ListGroup.Item target="_blank" action variant="secondary" href="https://www.reputationdefender.com/blog/privacy/top-ten-reasons-keep-your-personal-information-private" >Keep personal information safe</ListGroup.Item>
            <ListGroup.Item target="_blank" action variant="secondary" href="https://privacyrights.org/resources" >Limit social network information</ListGroup.Item>
            <ListGroup.Item target="_blank" action variant="secondary" href="https://security.calpoly.edu/content/faq/dmca-faqs" >Download the files legally</ListGroup.Item>
          </ListGroup>
          </div>
          <div className="img2">
            <Image src={BssecurityImg} width={400} height={280} />
          </div>
          </div>
      
        
        {/* Importance of security practices */}
          <h2 className="imp">Importance of implementing security practices</h2>
          <div className="container">

          <div className="img3">
            <Image src={Importantimg} width={400} height={280} rounded />
          </div>

          <div className="SPImportance">
            <p> 
            In today’s digital age, where technology is an integral part of nearly every business, cyber security is of paramount importance to protect sensitive data, financial information, intellectual property, and other critical assets from cyber attacks. The following are some reasons why cyber security is crucial for your business:
            </p>
              <ul class="a">
                <li>Protects sensitive data</li>
                <li>Builds trust with customers</li>
                <li>Maintains business continuity</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Protects your reputation</li>
                <li>Improved performance</li>
              </ul>            
              <a href="https://www.datacentreplus.co.uk/the-importance-of-good-cyber-security-practices/#:~:text=In%20summary%2C%20implementing%20robust%20cyber,requirements%2C%20and%20protect%20your%20reputation." target="_blank">Read more</a>
          </div>
        </div>
        </div>
        
     );
}
 
export default Home;