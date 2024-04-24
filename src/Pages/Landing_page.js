import React from "react";

import Listitem from "../components/Helpingcomponents/Listitem";
import { dummyDataArray } from "../components/Helpingcomponents/DummyData";

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="flex flex-row items-center w-full h-[5rem]">
        <input
          placeholder="Search here"
          className="  border-black border-2 text-black align-text-bottom focus:outline-none mx-[10rem] py-2 px-[2rem] w-full rounded-lg"
          type="text"
        />
      </div>

      <div className="bg-slate-200 h-[76vh] my-0 m-auto overflow-y-scroll ">
        {/* <SearchAppBar /> */}
        <div className="  p-3 flex flex-col gap-5  ">
          {dummyDataArray.map((item) => {
            return (
              <Listitem
                id={item.id}
                Name={item.Name}
                Title={item.Title}
                experience={item.experience}
                Description={item.Description}
                techStack={item.techStack}
                company={item.company}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
