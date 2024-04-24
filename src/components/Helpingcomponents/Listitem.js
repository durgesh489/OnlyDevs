import React, { useState } from "react";
// import Avatar from "./Avatar";
import Userphoto from "../../Assets/Photos/Userphoto.jpg";

const Listitem = (props) => {
  return (
    <React.Fragment>
      <div className="flex shadow-md bg-white w-[60%] m-auto rounded-lg ">
        <div className="w-[35%]">
          <img className="h-[100%] w-[100%] object-cover" src={Userphoto}></img>
        </div>
        <div className="flex flex-col  border-2 w-full pt-3 px-3">
          <div className=" pl-2  w-full">
            <div className="flex gap-4 items-center ">
              <p className="text-2xl font-bold ">{props.Name}</p>
              <p className="text-lg font-Times font-medium">{props.company}</p>
            </div>
            <div className="font-normal">{props.techStack.join(" || ")}</div>
            <p className="font-medium">
              {props.experience}+ Years of Experience
            </p>
            <div className="text-lg">
              {props.Description}
              {/* "Amidst the lush greenery of the garden, a vibrant array of
              flowers bloomed, each petal a burst of color under the golden
              sunlight. Bees buzzed lazily, collecting nectar, while butterflies
              danced in the gentle breeze, creating a picturesque scene of
              nature's beauty and tranquility." */}
            </div>
          </div>
          <div className=" p-2 flex  items-center">
            <button className=" p-2 w-[6rem] rounded-lg text-white font-bold bg-green-500 hover:outline hover:outline-offset-1 hover:outline-green-500 hover:bg-green-400">
              Connect
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Listitem;
