import React from "react";
const Homepage = () => {
  return (
    <React.Fragment>
      <div className=" flex flex-col items-center justify-center pt-[9.5rem] ">
        <div className="text-black flex flex-col text-6xl border-2px border-white bg-transparent">
          <p className=" leading-4 self-center">Facing a complex Issue?</p>
          <br />
          <p className="self-center">Hire our Talented Experts.</p>
        </div>
        <div className=" flex justify-evenly w-[30rem] my-[1.7rem] py-[0.8rem]">
          <button className=" bg-sky-600 rounded-full w-[8rem] p-[0.5rem] text-white text-lg ">
            Know more
          </button>
          <button className="broder-white border-2 p-[0.5rem] bg-black w-[8rem] rounded-full text-white">
            Book a call
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
