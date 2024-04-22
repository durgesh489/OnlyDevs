import React from "react";
import Avatar from "./Avatar";

const Listitem = (props) => {
  return (
    // <React.Fragment>
    //   <div className="flex bg-rose-200">
    //     <div>
    //       <p>Frontend Developer</p>
    //     </div>
    //     <div>
    //       <p>experieence of 5+ years</p>
    //     </div>
    //     <div>Description</div>

    //     <div>
    //       <Avatar
    //         username="Aditya Sharma"
    //         //   {`${props.name}`}
    //         bgColor="steelblue"
    //         textColor="white"
    //         borderColor="steelblue"
    //       />
    //       <div>
    //         <p>Currently in Microsoft</p>
    //       </div>
    //     </div>
    //   </div>
    // </React.Fragment>

    <div className="max-w-sm mx-auto bg-sky-400 text-white m-6 shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.Title}</div>
        <p className=" text-base">
          <span className="font-semibold">Name:</span> {props.FirstName}{" "}
          {props.LastName}
        </p>
        <p className=" text-base">
          <span className="font-semibold">Company:</span> {props.company}
        </p>
        <p className=" text-base">
          <span className="font-semibold">Experience:</span> {props.experience}
        </p>
        <p className=" text-base">
          <span className="font-semibold">Description:</span>{" "}
          {props.Description}
        </p>
      </div>
    </div>
  );
};

export default Listitem;
