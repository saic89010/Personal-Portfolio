
import React from 'react'
/*import { MdDoubleArrow } from "react-icons/md";
import profile from '../assets/profile.png';*/
import {Col, Row } from "react-bootstrap";
/*import profile from '../assets/profile.png';*/
import {
  SiHackerrank,
  SiLeetcode,
  SiCodechef,
  SiCodeforces,
  SiUnity,
  SiSpotify,
} from "react-icons/si";

const About = () => {
  return (
    <div name='about' className='f-screen w-full bg-gradient-to-b 
    from-gray-800 to-black text-white'>
        <div>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full'>
            <div className='pb-5'>
                <h className='text-4xl font-bold inline border-b-4
                border-cyan-500' style={{alignItems:"center"}}>
                About
                </h><br/>
            <h1 className="py-6 text-1xl font-semibold" >I practise coding in many online global platforms and I also like to 
                design some tools and build some graphic designing. These platforms have given me an opportunity to 
                practise for different companies and make some certifications which given me an immense value to my profile.
                In, my free time I will listen music and learn drawing, painting. 
            </h1><br/>
            
    
            <Row style={{ justifyContent: "center", paddingBottom: "50px", alignItems: "right"}}>
                <Col xs={4} md={2} className="tech-icons">
                    <SiHackerrank />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiLeetcode />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiCodechef />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiUnity />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiCodeforces />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiSpotify />
                </Col>
            </Row>  

            <h className="py-6 text-1xl font-semibold" >These are the some skills which I would like to learn in my free time and it looks so funny to 
              experiment on unknowm one's.😄 As a enthusiastic student we need to learn so many skills to build our confidence and 
              try to experiment  through it is wrong but at a later stage it would seems to be great to us.</h><br/>
            
            <div className="service component__space" id="Services">

      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Learning Music</h1>
                <p className="p service__text p__color">
                  I want to sing any song
                </p>
                <p className="p service__text p__color">
                  but nothing looks likes the same
                </p>
                <p className="p service__text p__color">as it is in the song.😃</p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Website Development</h1>
                <p className="p service__text p__color">
                  It is useful for everyone to just
                </p>
                <p className="p service__text p__color">
                  build their own website and to 
                </p>
                <p className="p service__text p__color">communicate with others through it.</p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Content Writing</h1>
                <p className="p service__text p__color">
                  It is the most awaited skill
                </p>
                <p className="p service__text p__color">
                  which will be used to build our 
                </p>
                <p className="p service__text p__color">proficiency and creativity.</p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Mobile App Development</h1>
                <p className="p service__text p__color">
                  If we want to convert our
                </p>
                <p className="p service__text p__color">
                  own website into an application
                </p>
                <p className="p service__text p__color">then it looks so adorable.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
        </div> 
        </div>  
    </div>
  )
}

export default About