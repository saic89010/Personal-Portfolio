
import React from 'react'
import '../style.css';
import profile from '../assets/pic1.jpg';
import profile1 from '../assets/pic2.jpg';
import profile2 from '../assets/pic3.jpg';
import profile3 from '../assets/pic4.jpg';
import profile4 from '../assets/pic5.jpg';
import profile5 from '../assets/pic6.jpg';
/*import { MdDoubleArrow } from "react-icons/md";
import profile from '../assets/profile.png';
import {Col, Row } from "react-bootstrap";
import profile from '../assets/profile.png';*/


const About = () => {
  return (
    <div name='about me' className='f-screen w-full bg-gradient-to-b 
    from-gray-800 to-black text-white'>
        <div>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full'>
            <div className='pb-5'>
                <h className='text-4xl font-bold inline border-b-4
                border-cyan-500' style={{alignItems:"center", marginLeft:'350px'}}>
                Know more about me
                </h><br/>
                <div className='btn-group' style={{marginTop:'15px'}}>
                  <button style={{marginLeft:'20px'}}>Biography</button>
                  <button style={{marginLeft:'50px'}}>Education</button>
                  <button style={{marginLeft:'50px'}}>Childhood</button>
                  <button style={{marginLeft:'50px'}}>Career</button>
                </div><br/><br/>

                <h1 style={{marginTop:'10px', fontSize:'27px', fontWeight:'bold', color:'yellow', marginLeft:'10px', marginRight:'10px'}} className='bio'>Biography</h1>
            <h1 className="py-10 text-1.7xl font-semibold" style={{fontSize:'19px', marginLeft:'10px', marginRight:'440px'}}>
            I came from a family of teachers. But I knew I don't wanted to become a teacher 
            as there was no plan at start, I planned to take engineering as my first step. I got into an engineering college.
            My college life was going smooth but apart from academics I wanted to do something different and then thought of starting a
            podcast. The academics results are going smooth but something is pushing me backwards. I then realized I need to begin a 
            new journey on my own.
            </h1><br/>
            <div className='pic1'>
                <img src={profile} alt="my profile"
                className='rounded-2xl mx-auto'/>
            </div>
            
            

            <h1 style={{marginTop:'60px', fontSize:'27px', fontWeight:'bold', color:'yellow', marginLeft:'10px', marginRight:'40px'}} className='edu'>Education</h1>
            <h1 className="py-10 text-1.7xl font-semibold" style={{fontSize:'19px', marginLeft:'10px'}}>
            I have taken Computer Science in engineering and after passing a couple a semesters I got bored in coding and slightly
            my interests changed into web development. I used spend some ample of time in building websites for projects and it also 
            finally ended up. I have got into an internship and worked very well. But while in that period I used to think that something need to
            be done unique on my own and then started picking up some interests past the office hours.
            </h1><br/>

            <div className='pic4'>
                <img src={profile3} alt="my profile"
                className='rounded-2xl mx-auto'/>
            </div>
            <div className='pic3'>
                <img src={profile2} alt="my profile"
                className='rounded-2xl mx-auto'/>
            </div>
            <div className='pic2'>
                <img src={profile1} alt="my profile"
                className='rounded-2xl mx-auto'/>
            </div>
            <div className='pic5'>
                <img src={profile4} alt="my profile"
                className='rounded-2xl mx-auto'/>
            </div>

            <h1 style={{marginTop:'60px', fontSize:'27px', fontWeight:'bold', color:'yellow', marginLeft:'10px', marginRight:'40px'}} className='edu'>Childhood</h1>
            <h1 className="py-10 text-1.7xl font-semibold" style={{fontSize:'19px', marginLeft:'10px'}}>
            In my childhood, I used to be a shy but confident person. I rose to talk with various kind of people at every moment
            but my shyness had pulled me back every time. Due to this I didn't make much friends and lost many people. But now I have enjoyed a lot 
            through my learnings. And my mom and dad have encouraged me a lot to participate in various events. Then, I got
            into sprint running, karate and painting and I went forward winning couple of competitions.
            </h1><br/>

            <div className='pic6'>
                <img src={profile5} alt="my profile"
                className='rounded-2xl mx-auto'/>
            </div>
            
            <h1 style={{marginTop:'-350px', fontSize:'27px', fontWeight:'bold', color:'yellow', marginLeft:'10px', marginRight:'40px'}} className='edu'>Career</h1>
            <h1 className="py-10 text-1.7xl font-semibold" style={{fontSize:'19px', marginLeft:'10px', marginRight:'300px'}}>
            <h1 >Start of Podcasting</h1>
            <h1 className="py-10 text-1.7xl font-semibold" style={{fontSize:'19px', marginLeft:'5px'}}>
            At beginning, I have no idea on starting my first podcast. I have gone through many resources on how to start a podcast, what are 
            platforms to record, host and publish the episode. I have learnt from youtube and gradually recorded my first episode on the perspective
            of leading a life. The episode landed on anchor platform and there are only few views as it was start. As, I was new to content creation
            I started learning and will try to rise the standards of my show by continouing it as my passion. I would love to compete with many 
            passionate creators and will expand my network. 
            </h1>
            </h1>
            <h1 className="py-10 text-1.7xl font-semibold" style={{fontSize:'19px', marginLeft:'15px', marginRight:'5px', marginTop:'-100px'}}>
            I am learning, exploring and expanding my network every day to acquire knowledge from them. From my career, I have gone through struggling phase,
            where not knowing what to do, where to start, boring life. Then I started to meet new people, connecting with them, had few conversations
            and bonding that boosts strength, energy and the way of thinking.
            </h1>

    </div>
        </div> 
        </div>  
    </div>
  )
}

export default About