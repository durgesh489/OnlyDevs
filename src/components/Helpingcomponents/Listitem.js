import React from "react";
// import Avatar from "./Avatar";
import Userphoto from "../../Assets/Photos/Userphoto.jpg";

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

    // <div className="max-w-sm mx-auto bg-sky-400 text-white m-6 shadow-md rounded-lg overflow-hidden">
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">{props.Title}</div>
    //     <p className=" text-base">
    //       <span className="font-semibold">Name:</span> {props.FirstName}{" "}
    //       {props.LastName}
    //     </p>
    //     <p className=" text-base">
    //       <span className="font-semibold">Company:</span> {props.company}
    //     </p>
    //     <p className=" text-base">
    //       <span className="font-semibold">Experience:</span> {props.experience}
    //     </p>
    //     <p className=" text-base">
    //       <span className="font-semibold">Description:</span>{" "}
    //       {props.Description}
    //     </p>
    //   </div>
    //   </div>

    // <ListItem>
    //   <ListItemAvatar>
    //     <Avatar>
    //       <PersonIcon />
    //     </Avatar>
    //   </ListItemAvatar>
    //   <ListItemText
    //     primary={`${props.FirstName} ${props.LastName}`}
    //     secondary={
    //       <React.Fragment>
    //         <span>Email: {props.email}</span>
    //         <br />
    //         <span>Experience: {props.experience}</span>
    //       </React.Fragment>
    //     }
    //   />
    // </ListItem>

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
            <div className="font-normal">
              {props.techStack.join(" || ")}
              {/* HTML || CSS || JavaScript || React.js || MySql */}
            </div>
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
          <div className=" p-2 flex justify-evenly items-center">
            <button className=" p-2 w-[6rem] rounded-lg text-white font-bold bg-sky-600">
              {" "}
              Contact
            </button>
            <button className=" p-2 w-[6rem] rounded-lg text-white font-bold bg-sky-600">
              {" "}
              Info
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Listitem;
