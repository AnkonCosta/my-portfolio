import React from "react";

const Home = () => {
  return (
    <div
      className="hero min-h-screen p-0"
      style={{ backgroundImage: `url("bg.jpg")` }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            I am <span className="text-[#EA0541]">Ankon Costa</span>
          </h1>
          <p className="mb-5 text-xl">
            A Front-End Web Developer. I love building web applications using
            React.
          </p>
          <a href="mailto:ankoncosta247@gmail.com">
            <button className="btn bg-black hover:bg-black">Contact me</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
