import React from 'react';
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import newsStyle from '../Styles/newsStyle.css';
import NewsImg from './Images/News.jpg'
import Hackerimg1 from './Images/HackerNews.jpg';
import Securityweek from './Images/SecurityWeek.jpg';
import kerbs from './Images/Kerbs.jpg';
import Darkreading from './Images/DarkReading.jfif';
import SecMagazine from './Images/SecurityMagazine.jpg';
import Zdnet from './Images/zdnet.png';
const News = () => {
  return (
    <div>
      {/* <h3 className="heading">News & Updates </h3> */}
        <div className="newsimg">
          <img  src={NewsImg} alt="news image" width={300} height={280}/>
        </div>
       {/* <a href="https://www.securityweek.com/google-patches-chrome-zero-day-reported-by-apple-spyware-hunters/"><img  className="googleImage" src="./Images/googleNews.jpg" alt="news image" width={400} height={280}/></a> */}
        

        {/* card 1 */}
       <CardGroup>
          <Card className="googleImage">
            <Card.Img variant="top" src={Hackerimg1} alt=""/>
            <Card.Body>
              <Card.Title>The Hacker News</Card.Title>
              <Card.Text>
              Trusted Cybersecurity News Platform.
              This site offers up-to-date news on cybersecurity, hacking, and technology.
              </Card.Text>
              <Card.Link target="_blank" href="https://thehackernews.com/">Read more</Card.Link>
            </Card.Body>
        </Card>

          <Card className="securityWeek">
            <Card.Img variant="top" src={Securityweek} alt=""/>
            <Card.Body>
              <Card.Title>Cybersecurity News, Insights and Analysis</Card.Title>
              <Card.Text>
              SecurityWeek is a trusted source for cybersecurity news, analysis, and insights.
              </Card.Text>
              <Card.Link target="_blank" href="https://www.securityweek.com/">Read more</Card.Link>
            </Card.Body>
        </Card>

        <Card className="kerbs">
            <Card.Img variant="top" src= {kerbs} alt=""/>
            <Card.Body>
              <Card.Title>Kerbs on Security</Card.Title>
              <Card.Text>
              Brian Krebs is a well-known investigative journalist covering cybersecurity, and his website is a great source for in-depth security news.              </Card.Text>
              <Card.Link target="_blank" href="https://krebsonsecurity.com/">Read more</Card.Link>
            </Card.Body>
        </Card>

        <Card className="dark">
            <Card.Img variant="top" src= {Darkreading}alt=""/>
            <Card.Body>
              <Card.Title>Dark Reading</Card.Title>
              <Card.Text>
              Dark Reading is a comprehensive cybersecurity news source that also covers web security topics.
              </Card.Text>
              <Card.Link target="_blank" href="https://www.darkreading.com/">Read more</Card.Link>
            </Card.Body>
        </Card>
</CardGroup>

<CardGroup>
        <Card className="magazine">
            <Card.Img variant="top" src= {SecMagazine}alt=""/>
            <Card.Body>
              <Card.Title>Security Magazine</Card.Title>
              <Card.Text>
              Security Magazine provides news, analysis, and insights on a wide range of cybersecurity topics, including data breaches, malware, and emerging threats.              
              </Card.Text>
              <Card.Link target="_blank" href="https://www.securitymagazine.com/">Read more</Card.Link>
            </Card.Body>
        </Card>

        <Card className="zdnet">
            <Card.Img variant="top" src= {Zdnet} alt=""/>
            <Card.Body>
              <Card.Title>ZDNet Security</Card.Title>
              <Card.Text>
              ZDNet's security section offers news and analysis on the latest cybersecurity trends, incidents, and technologies.              
              </Card.Text>
              <Card.Link target="_blank" href="https://www.zdnet.com/">Read more</Card.Link>
            </Card.Body>
        </Card>
{/* </CardGroup> */}
        </CardGroup>


 {/* card 2 */}
 {/* <CardGroup>
          <Card className="securityWeek">
            <Card.Img variant="top" src="/Images/SecurityWeek.jpg" alt=""/>
            <Card.Body>
              <Card.Title>Cybersecurity News, Insights and Analysis</Card.Title>
              <Card.Text>
              SecurityWeek is a trusted source for cybersecurity news, analysis, and insights.
              </Card.Text>
              <Card.Link target="_blank" href="https://www.securityweek.com/">Read more</Card.Link>
            </Card.Body>
        </Card>
</CardGroup> */}

 {/* card 3 */}
 {/* <CardGroup> */}
          {/* <Card className="kerbs">
            <Card.Img variant="top" src="/Images/Kerbs.jpg" alt=""/>
            <Card.Body>
              <Card.Title>Kerbs on Security</Card.Title>
              <Card.Text>
              Brian Krebs is a well-known investigative journalist covering cybersecurity, and his website is a great source for in-depth security news.              </Card.Text>
              <Card.Link target="_blank" href="https://krebsonsecurity.com/">Read more</Card.Link>
            </Card.Body>
        </Card> */}
{/* </CardGroup> */}

{/* card 4 */}
{/* <CardGroup>
          <Card className="dark">
            <Card.Img variant="top" src="/Images/DarkReading.jfif" alt=""/>
            <Card.Body>
              <Card.Title>Dark Reading</Card.Title>
              <Card.Text>
              Dark Reading is a comprehensive cybersecurity news source that also covers web security topics.
              </Card.Text>
              <Card.Link target="_blank" href="https://www.darkreading.com/">Read more</Card.Link>
            </Card.Body>
        </Card>
</CardGroup> */}
    </div>
  )
}

export default News;
