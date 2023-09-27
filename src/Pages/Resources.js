import React from 'react';
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from "react-bootstrap/Image";
import assets from '../Styles/assets.css';

import resource from './Images/resources.png';
import resource1 from './Images/InfoVideo.png';
import wireshark from './Images/wireshark-1.png';
import nmap from './Images/nmap.jpg';
import metasploit from './Images/metasploit.png';
import burpsuite from './Images/burpsuite.png';
import resource3 from './Images/certification.png';
import resource4 from './Images/Glossary.png';
const Resources = () => {
  return (
    <div>
      <div >
          <img className="resourceimg" src={resource} alt="blogs image" />
      </div>

      {/* Resource 1 - Informational Videos */}
      <h2 className="Resource1">Informational Videos</h2>
      <div className="container">

        <div className="RImage1">
          <img src={resource1} alt="bruce image" width={300} height={160} rounded />
        </div>
        <div className="pRes1">
        <p>
        Informational videos are a multimedia format that delivers educational content, explanations, and insights on best security practices. These videos are typically designed to inform and educate viewers on specific subjects or concepts. 
        </p>
        <a href="https://www.youtube.com/@StaySafeOnline1/playlists" target="_blank">Click to watch the videos</a>
        </div>
      </div>

      {/* Resource 2 - Security tools */}
      <h2 className="Resource1">Security Tools</h2>

       {/* tool1 */}
       <CardGroup>
          <Card className="googleImage">
            <Card.Img variant="top" src={wireshark} alt=""/>
            <Card.Body>
              <Card.Title>Wireshark</Card.Title>
              <Card.Text>
              Wireshark is a powerful and widely-used open-source network protocol analyzer. It allows users to capture, inspect, and analyze network traffic in real-time.
              </Card.Text>
              <Card.Link target="_blank" href="https://www.varonis.com/blog/how-to-use-wireshark">Know more</Card.Link>
            </Card.Body>
        </Card>

        {/* tool 2 */}
          <Card className="securityWeek">
            <Card.Img variant="top" src={nmap} alt=""/>
            <Card.Body>
              <Card.Title>Nmap- Network Mapper</Card.Title>
              <Card.Text>
              Nmap, short for Network Mapper, is a versatile and open-source security tool used for network discovery and security auditing. 
              </Card.Text>
              <Card.Link target="_blank" href="https://nmap.org/">Know more</Card.Link>
            </Card.Body>
        </Card>

        {/* tool 3 */}
        <Card className="kerbs">
            <Card.Img variant="top" src={metasploit} alt=""/>
            <Card.Body>
              <Card.Title>Metasploit</Card.Title>
              <Card.Text>
              Metasploit is a powerful and widely-used penetration testing and exploitation framework. It provides security professionals, ethical hackers, and cybersecurity experts with a comprehensive toolkit for testing the vulnerabilities.
              </Card.Text>
              <Card.Link target="_blank" href="https://www.metasploit.com/download">Know more</Card.Link>
            </Card.Body>
        </Card>

        {/* tool4 */}
        <Card className="dark">
            <Card.Img variant="top" src={burpsuite} alt=""/>
            <Card.Body>
              <Card.Title>Burpsuite</Card.Title>
              <Card.Text>
              Burp Suite is a leading web vulnerability scanner and penetration testing tool used primarily for assessing and securing web applications. 
              </Card.Text>
              <Card.Link target="_blank" href="https://portswigger.net/burp/documentation/desktop/getting-started">Know more</Card.Link>
            </Card.Body>
        </Card>
        </CardGroup>

     {/* Resource 3 - Security Certifications */}
     <h2 className="Resource1">Security Certification Programs</h2>
     <div className="container">
          
          <div className="list">
          <ListGroup  as="ol" numbered className="list">
            <ListGroup.Item target="_blank" action variant="secondary" href="https://www.isc2.org/">International Information System Security Certification Consortium (ISC)² </ListGroup.Item>
            <ListGroup.Item target="_blank" action variant="secondary" href="https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/" >Certified Ethical Hacker (CEH)</ListGroup.Item>
            <ListGroup.Item target="_blank" action variant="secondary" href="https://www.isaca.org/">Certified Information Systems Auditor (CISA)</ListGroup.Item>
            <ListGroup.Item target="_blank" action variant="secondary" href="https://www.isc2.org/Certifications/CISSP" >Certified Information Systems Security Professional (CISSP)</ListGroup.Item>
            <ListGroup.Item target="_blank" action variant="secondary" href="https://www.isaca.org/credentialing/cism">Certified Information Security Manager (CISM)</ListGroup.Item>
          </ListGroup>
          </div>
          <div className="img2">
            <Image src={resource3} width={400} height={280} />
          </div>
          </div>
      
    {/* Resource 4 - Glossary */}
    <h2 className="Resource1">Glossary</h2>
    <div className="container">
          <div className="Res4">
            <Image src={resource4} width={400} height={280} rounded />
          </div>    

          <div className="Res4P">
            <p> 
            A glossary of common security terms and definitions.
            </p>
            <a href="https://www.techopedia.com/" target="_blank">Read more</a>
          </div>
    </div>
    </div>
  )

}

export default Resources
