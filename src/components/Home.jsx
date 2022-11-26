import React from 'react'
import profile from '../assets/chandu-profile.png';
import {BsArrowRightCircleFill} from 'react-icons/bs';
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b 
    from-black via-black
    to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-4xl font-bold
                text-white'>
                    <h1 style={{ paddingBottom: 15 }} className="heading1">
                 Hello Everyone...!! My name is <strong className='main-name'>SAI CHANDU{" "}</strong>
                <span className="wave" role="img" aria-labelledby="wave"><tr/>
                  👋🏻
                </span>
              </h1>
                    <Typewriter
                        options={{
                            strings: [
                            "I am currently a Student..",
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                        }}
                    text-cyan-500 style={{ padding: 50, textAlign: "left" }}/>
                </h2>
                <p className='text-gray-500 py-4 max-w-md font-extrabold'>
                    I am a student of KL University pursuing B-Tech
                    from CSE department. I love to work on web
                    development technologies like React, HTML, CSS and
                    I also love to code.
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-black font-extrabold w-fit px-6 py-3
                    my-2 flex items-center rounded-md bg-gradient-to-r
                    from-emerald-200 to-lime-200 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <BsArrowRightCircleFill size={25} className='ml-1'/>
                        </span>
                        
                    </Link>
                </div>
            </div>
            <div>
                <img src={profile} alt="my profile"
                className='rounded-3xl mx-auto w-23'/>
            </div>
        </div>
    </div>
  )
}

export default Home