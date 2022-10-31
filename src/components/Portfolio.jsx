import React from "react";
import p1 from "../assets/portfolio/p1.png";
import p2 from "../assets/portfolio/p2.png";
import p3 from "../assets/portfolio/p3.png";
import p4 from "../assets/portfolio/p4.png";
import p5 from "../assets/portfolio/p5.jpg";
import p6 from "../assets/portfolio/p6.png";

const Portfolio = () => {


  const portfolios = [
    {
      id: 1,
      src: p1,
      href: "https://github.com/saic89010/Automobile-System",
    },
    {
      id: 2,
      src: p4,
    },
    {
      id: 3,
      src: p3,
    },
    {
      id: 4,
      src: p5,
    },
    {
      id: 5,
      src: p2,
    },
    {
      id: 6,
      src: p6,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black via-black
      to-gray-800 text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-10 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-fuchsia-400">
            My Blogs & Portfolio
          </p>
          <p className="py-6 font-semibold">Apart from coding, I have interest towards writing blog posts,
          designing posters and content writing which helps us to uptake some new skills in us.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <a href="http://github.com/saic89010" className=" text-2xl font-bold project__btn">Ckeck Out</a><br/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
