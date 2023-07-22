import React from "react";
import p1 from "../assets/portfolio/p1.png";
import p2 from "../assets/portfolio/p2.png";
import p3 from "../assets/portfolio/p3.png";
import p4 from "../assets/portfolio/p4.png";
import p5 from "../assets/portfolio/p5.jpg";
import p6 from "../assets/portfolio/p6.png";

const Portfolio = () => {


  
  return (
    <div
      name="blogs"
      className="bg-gradient-to-b from-black via-black
      to-gray-800 text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-10 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-fuchsia-400" style={{marginLeft:'350px'}}>
            My Projects & Blogs
          </p>
          <p className="text-xl py-6 font-bold">Engaging in diverse projects and reading insightful blogs has enriched my learning experience. 
          Projects allowed me to apply knowledge practically, honing problem-solving skills. Blogs introduced fresh perspectives, 
          latest trends, and valuable tips, expanding my understanding and keeping me updated with industry developments, fostering 
          continuous growth and expertise.</p>
        </div>
        
        <div className="portrow">
          <div className="portcol">
          <div class="card1">
                  <img src={p1} alt="no"/>
                  <a href="https://www.linkedin.com/posts/sai-chandu-a8ba0320a_experience-our-article-with-your-great-activity-6857908947240796160-a9GT?utm_source=share&utm_medium=member_desktop" target="blank">Check Out</a>
                </div>
          </div>
          <div className="portcol">
          <div class="card1">
                  <img src={p2} alt="no"/>
                  <a href="https://www.linkedin.com/posts/sai-chandu-a8ba0320a_loveyourtime-activity-6866352529794564096-C6q6?utm_source=share&utm_medium=member_desktop" target="blank">Check Out</a>
                </div>
          </div>
          <div className="portcol">
          <div class="card1">
                  <img src={p3} alt="no"/>
                  <a href="https://www.linkedin.com/posts/sai-chandu-a8ba0320a_love-comment-activity-6864515593199058944-8aZY?utm_source=share&utm_medium=member_desktop" target="blank">Check Out</a>
                </div>
          </div>
          <div className="portcol">
          <div class="card1">
                  <img src={p4} alt="no"/>
                  <a href="https://github.com/saic89010/Automobile-System" target="blank">Check Out</a>
                </div>
          </div>
          <div className="portcol">
          <div class="card1">
                  <img src={p5} alt="no"/>
                  <a href="https://github.com/saic89010/Healthcare" target="blank">Check Out</a>
                </div>
          </div>
          <div className="portcol">
          <div class="card1" style={{marginLeft:'-630px', marginTop:'-207px'}}>
                  <img src={p6} alt="no"/>
                  <a href="https://github.com/saic89010/Automobile-System" target="blank">Check Out</a>
                </div>
          </div>

          
        </div>
        

        
      </div>
    </div>
  );
};

export default Portfolio;
