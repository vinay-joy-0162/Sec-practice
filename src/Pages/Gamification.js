import React from 'react'
import games from '../Styles/games.css'
import gameImage from './Images/game.gif'
import hackTheBoxImage from './Images/hackTheBox.png'
// import gameImage from './Images/game.gif'
import game2 from './Images/CTF.png';
import game3 from './Images/rocketman.png'
import game4 from './Images/cyberstart.png';

const Gamification = () => {
  return (
    <div className="mainPage">
        <div class="marquee-container">
            <div className="marquee">
            <img src={gameImage} alt="game icon" width={100} heigth={100} />
             <p>GAMIFICATION</p>
             </div>
        </div>

        {/* game 1 */}
      <h2 className="game1">Hack The Box</h2>
      <div className="container">

        <div className="hackthebox">
          <img src={hackTheBoxImage} alt="GAME 1" width={280} height={280} rounded />
        </div>
        <div className="box">
        <p>
        Hack The Box is a platform that offers various virtual machines and challenges for practicing your ethical hacking skills. It's a great way to learn about security vulnerabilities and how to secure systems.        </p>
        <a href="https://www.hackthebox.com/" target="_blank">CLICK TO PLAY</a>
        </div>
      </div>

    {/* Game 2 */}
    <h2 className="game2">Capture The Flag (CTF) Challenge</h2>
      <div className="container">
        <div className="CTF">
        <p>
        Capture The Flag (CTF) is a cybersecurity game that challenges participants to solve a series of puzzles, challenges, or security-related tasks to find "flags" hidden within a computer system or network. These flags are typically short strings of text or alphanumeric characters, and the goal is to capture as many of them as possible within a specified time frame. CTFs are widely used in cybersecurity training, competitions, and as a means of testing and improving participants' hacking and security skills.
          </p>
          <a href="https://ctfsites.github.io/" target="_blank">CLICK TO PLAY</a>
          </div>
          <div className="CTFImage">
          <img src={game2} alt="CTF image" width={280} height={280} rounded />
        </div>
      </div>
      
     {/* game 3 */}
     <h2 className="game3">Try Hack Me</h2>
      <div className="container">

        <div className="THM">
          <img src={game3} alt="try hack me" width={280} height={280} rounded />
        </div>
        <div className="THMtext">
        <p>
        TryHackMe is an online platform that provides various virtual labs and challenges for learning and practicing cybersecurity skills. It's designed for individuals looking to gain hands-on experience in ethical hacking and penetration testing. 
        </p>
        <a href="https://tryhackme.com/" target="_blank">CLICK TO PLAY</a>
        </div>
      </div>

     {/*Game 4 */}
     <h2 className="game4">Cyberstart Game</h2>
      <div className="container">
        <div className="CSG">
        <p>
        CyberStart Game is an online platform that provides challenges and puzzles to help you learn about cybersecurity. It's designed to introduce you to security concepts in a gamified manner.
        </p>
          <a href="https://cyberstart.com/" target="_blank">CLICK TO PLAY</a>
          </div>
          <div className="CSGGame">
          <img src={game4} alt="CSG image" width={280} height={280} rounded />
        </div>
      </div>

    </div>
  )
}

export default Gamification
