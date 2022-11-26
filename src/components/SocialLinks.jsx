/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {FaGithub} from 'react-icons/fa';
import { TbBrandLinkedin} from 'react-icons/tb';
import {IoIosMail} from 'react-icons/io';
import {BsPersonBoundingBox} from 'react-icons/bs';


const SocialLinks = () => {

    const links=[
        {
            id:1,
            child:(
                <>
                LinkedIn <TbBrandLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/sai-chandu-a8ba0320a/',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                GitHub <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/saic89010',
        },
        {
            id:3,
            child:(
                <>
                Mail <IoIosMail size={30}/>
                </>
            ),
            href: 'mailto:saic89010@gmail.com',
        },
        {
            id:4,
            child:(
                <>
                Resume <BsPersonBoundingBox size={30}/>
                </>
            ),
            href: '/CHANDU_MAINRESUME.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ]

  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {links.map(({id, child, href, style, download}) => (
                <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-teal-200" + " " + style}>
                    <a href={href} className="flex justify-between items-center
                    w-full text-black font-semibold download={download}
                    target='_blank'
                    rel='noreferrer'">
                        <>
                        {child}
                        </>
                    </a>
                </li>
            ))}
            
        </ul>
    </div>
  )
}

export default SocialLinks