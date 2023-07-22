import React from 'react'
import profile from '../assets/portfolio/linkedin.png';
import {BsArrowRightCircleFill} from 'react-icons/bs';

const Home = () => {
  return (
    
<div name='home' className='h-screen w-full bg-gradient-to-b 
    from-black via-black
    to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-5xl font-bold
                text-white'>
                    <h1 style={{ paddingBottom: 15, marginLeft:'1px' }} className="heading1">
                 Hello Everyone
                    Welcome
                 
                <span className="wave" role="img" aria-labelledby="wave"><tr/>
                  👋🏻
                </span>
                </h1>
                </h2>
                
                <p className='text-gray-400 py-4 max-w-md md:flex-row font-extrabold' style={{fontSize:'18px'}}>
                    This is Sai Chandu a.k.a Chandu an Enthusiastic and dedicated person keeping
                    my efforts to learn something new every day. I am passionate about creating podcasts, painting and 
                    music. I enjoy solving real-world problems and test issues. I update my goals every time to effeciently focues on my
                    learnings. I consistently work towards my plans to result in the best outcome.
                </p>
                <div>
                    <a href='https://open.spotify.com/show/1ZAGdq5aeOeAR60J2viAa7' target="blank" smooth duration={500} className='group text-black font-extrabold w-fit px-6 py-3
                    my-2 flex items-center rounded-md bg-gradient-to-r
                    from-emerald-200 to-lime-200 cursor-pointer'>
                        Podcast
                        <span className='group-hover:rotate-180 duration-300'>
                        <BsArrowRightCircleFill size={25} className='ml-1'/>
                        </span>
                        
                    </a>
                </div>
            </div>
            <div>
                <img src={profile} alt="my profile"
                className='rounded-2xl mx-auto w-25'/>
                <h1 className='text-yellow-200 justify-center font-extrabold' style={{textAlign:'center', fontSize:'50px'
                }}>Sai Chandu</h1>
            </div>
        </div>
    </div>
  )
}

export default Home