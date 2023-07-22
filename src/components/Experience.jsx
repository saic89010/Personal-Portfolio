import React from "react";
import google1 from "../assets/google1.png";
import google2 from "../assets/google2.png";
import google3 from "../assets/google3.png";
import redhat from "../assets/redhat.png";
import aws1 from "../assets/aws1.png";

const Experience = () => {

  

  return (
    <div
      name="recognitions"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-rose-300 p-2 inline" style={{marginLeft:'350px'}}>
            Top Certifications
          </p>

          <p className="text-xl py-6 font-semibold">As a part of my journey these certifications I obtained 
          added significant value to my learning path. It deepened my understanding of the subject matter,
           provided practical knowledge, and boosted my confidence. It enhanced my skills, making me more competitive
            and credible in my field, opening new opportunities for growth and advancement.</p>
        </div>  

        <div class="row">
          <div class="column">
            <div class="card">
              <img src={google1} alt="no"/>
              <p>Google Analytics for Beginners</p>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img src={google2} alt="no"/>
              <p>Advanced Google Analytics</p>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img src={aws1} alt="no"/>
              <p>AWS Cloud Practitioner</p>
              
            </div>

            
          </div>

          <div class="column">
            <div class="card">
              <img src={google3} alt="no"/>
              <p>Google Cloud Associate</p>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img src={redhat} alt="no"/>
              <p>Redhat Application Developer</p>
            </div>
          </div>
        </div>

      

       
      </div>
    </div>
  );
};

export default Experience;
