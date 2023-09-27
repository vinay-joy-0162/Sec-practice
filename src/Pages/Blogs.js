import React from 'react';
import blogStyle from '../Styles/blogStyle.css';
import home from '../Styles/home.css';

import Blog from './Images/blog.jpg';
import Blog1 from './Images/Bruce.jpg';
import Blog2 from './Images/NakedSecurity1.png';
import Blog3 from './Images/CyberArkLogo.jpg';
import Blog4 from './Images/hackerNewsBlog.jpg';

const Blogs = () => {
  return (
    <div>
      {/* <h1> welcome to my security Blogs</h1> */}
      <div className="blogimg">
          <img  src={Blog} alt="blogs image" width={500} height={100}/>
        </div>

      {/* Blog post 1 */}
      <h2 className="headBlog">Schneier on Security</h2>
      <div className="container">

        <div className="bruceBlog">
          <img src={Blog1} alt="bruce image" width={280} height={280} rounded />
        </div>
        <div className="pBlog">
        <p>
          Bruce Schneier is a renowned security expert who shares his insights and analysis on security-related topics. Bruce has been writing about security issues on his blog since 2004, and in his monthly newsletter since 1998. He is a fellow and lecturer at Harvard's Kennedy School, a board member of EFF, and the Chief of Security Architecture at Inrupt, Inc. 
        </p>
        <a href="https://www.schneier.com/" target="_blank">Read more</a>
        </div>
      </div>


      {/* Blog post 2 */}
      <h2 className="sopBlog">naked security by SOPHOS</h2>
      <div className="container">
        <div className="pSop">
        <p>
          Sophos offers insights into cybersecurity topics, including best practices, threat analysis, and security news. Sophos delivers a broad portfolio of advanced products and services to secure users, networks and endpoints against ransomware, malware, exploits, phishing and the wide range of other cyberattacks. 
          </p>
          <a href="https://nakedsecurity.sophos.com/" target="_blank">Read more</a>
          </div>
          <div className="sopImgBlog">
          <img src={Blog2} alt="sophos image" width={280} height={280} rounded />
        </div>
      </div>

       {/* Blog post 3 */}
       <h2 className="blog3">CyberArk Blog</h2>
      <div className="container">

        <div className="arkBlog">
          <img src={Blog3} alt="Cyber Ark image" width={280} height={280} rounded />
        </div>
        <div className="pBlog">
        <p>
        CyberArk, a leading cybersecurity company, maintains a blog that covers various security practices and trends.
        </p>
        <a href="https://www.cyberark.com/" target="_blank">Read more</a>
        </div>
      </div>

    {/* Blog post 4 */}
    <h2 className="blog4">The Hacker News Blog</h2>
      <div className="container">
        <div className="hackBlog">
        <p>
        The Hacker News Blogs frequently posts latest articles and blogs about current cybersecurity practices, threats, and trends.
        </p>
          <a href="https://thehackernews.com/" target="_blank">Read more</a>
          </div>
          <div className="hackImageBlog">
          <img src={Blog4} alt="sophos image" width={280} height={280} rounded />
        </div>
      </div>

  </div>
  )
}

export default Blogs
