import React from "react";
import contactpic from "../assets/contact.jpg";
import '../style.css';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black via-black
      to-gray-800  text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-sky-700" style={{marginLeft:'400px'}}>
            Get in touch
          </p>
          <p className="text-xl py-6 font-semibold" style={{fontSize:'25px', marginLeft:'80px'}}>If you want to connect you can contact me on via the form below.</p>
        </div>

        

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/5c3e79a9-31f4-4616-bc6a-680f374b0408"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
            style={{marginLeft:'100px', marginRight:'150px'}}
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              size='50'
            />
            <input
              type="text"
              name="email"
              required
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-yellow-500 to-pink-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Chat
            </button>
          </form>
          <div className="contactpic">
                <img src={contactpic} alt="my profile"
                />
                
            </div>
        </div>
        
        
      </div>
      
    </div>
  );
};

export default Contact;
