import React from 'react';
import { Card } from 'react-bootstrap';
import podcastStyle from '../Styles/podcastStyle.css';

import podcast from './Images/podcasts.jpg';
import podcast1 from './Images/Podcast1.jpg'; 
import podcast2 from './Images/cyberWire.png';
import podcast3 from './Images/Smashing.jpeg';
import podcast4 from './Images/darknet.png';
import podcast5 from './Images/maliciousLife.jpg';
const Podcasts = () => {
  return (
    <div>
         <div className="podcastImage">
          <img  src={podcast} alt="Podcast image" width={400} height={200} fluid/>
        </div>

    {/* Podcast 1 */}
    <div className="podcast1">
      <Card className="text-center">
      <Card.Img variant="top" src={podcast1} width={200} height={300} alt="Podcast 1"/>
      <Card.Body>
        <Card.Title className="title1">Security Now! by TWiT</Card.Title>
        <Card.Text>
        Hosted by Steve Gibson and Leo Laporte, this podcast covers a wide range of security topics, including current security practices, vulnerabilities, and news.
        </Card.Text>
        <Card.Link href="https://twit.tv/shows/security-now" target="_blank" >Click to know more</Card.Link>
      </Card.Body>
    </Card>
    </div>

{/* Podcast 2 */}
<div className="podcast1">
      <Card className="text-center">
      <Card.Img variant="top" src={podcast2} width={200} height={300} alt="Podcast 1"/>
      <Card.Body>
        <Card.Title className="title1">The CyberWire</Card.Title>
        <Card.Text>
        The CyberWire podcast provides daily cybersecurity news and analysis, focusing on current threats and best practices.
        </Card.Text>
        <Card.Link href="https://thecyberwire.com/podcasts" target="_blank" >Click to know more</Card.Link>
      </Card.Body>
    </Card>
    </div>


{/* Podcast 3 */}
<div className="podcast1">
      <Card className="text-center">
      <Card.Img variant="top" src={podcast3} width={200} height={300} alt="Podcast 1"/>
      <Card.Body>
        <Card.Title className="title1">Smashing Security</Card.Title>
        <Card.Text>
        Hosted by Graham Cluley and Carole Theriault, Smashing Security covers current security news, trends, and practical advice with a humorous twist. 
        </Card.Text>
        <Card.Link href="https://www.smashingsecurity.com/" target="_blank" >Click to know more</Card.Link>
      </Card.Body>
    </Card>
</div>

{/* Podcast 4 */}
<div className="podcast1">
      <Card className="text-center">
      <Card.Img variant="top" src={podcast4} width={200} height={300} alt="Podcast 1"/>
      <Card.Body>
        <Card.Title className="title1">Darknet Diaries</Card.Title>
        <Card.Text>
        Host Jack Rhysider explores real-life hacking stories, current cyber threats, and the people behind them in this engaging podcast.   </Card.Text>
        <Card.Link href="https://darknetdiaries.com/" target="_blank" >Click to know more</Card.Link>
      </Card.Body>
    </Card>
</div>

{/* Podcast 5 */}
<div className="podcast1">
      <Card className="text-center">
      <Card.Img variant="top" src={podcast5} width={200} height={300} alt="Podcast 1"/>
      <Card.Body>
        <Card.Title className="title1">Malicious Life</Card.Title>
        <Card.Text>
        Malicious Life delves into the history of cybersecurity incidents and explores current security practices through storytelling        </Card.Text>
        <Card.Link href="https://malicious.life/" target="_blank" >Click to know more</Card.Link>
      </Card.Body>
    </Card>
</div>

    </div>
  )
}

export default Podcasts
