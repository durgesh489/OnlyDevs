import React from "react";

import Listitem from "../components/Helpingcomponents/Listitem";
import SearchAppBar from "../components/Helpingcomponents/Seacrchapp";

const Data = [
  {
    id: "cyz",
    Title: "Frontend Expert",
    company: "Microsoft",
    FirstName: "Aditya",
    LastName: "Sharma",
    experience: "5+ years",
    Description:
      "Highly skilled Frontend Expert with 5+ years of experience at Microsoft, specializing in web development.",
  },
  {
    id: "abc",
    Title: "Backend Developer",
    company: "Google",
    FirstName: "John",
    LastName: "Doe",
    experience: "10+ years",
    Description:
      "Senior Backend Developer with over 10 years of experience at Google, focusing on scalable solutions.",
  },
  {
    id: "def",
    Title: "Data Scientist",
    company: "Amazon",
    FirstName: "Alice",
    LastName: "Smith",
    experience: "8+ years",
    Description:
      "Experienced Data Scientist with 8+ years at Amazon, proficient in machine learning and analytics.",
  },
  {
    id: "ghi",
    Title: "UX/UI Designer",
    company: "Apple",
    FirstName: "Michael",
    LastName: "Johnson",
    experience: "12+ years",
    Description:
      "Seasoned UX/UI Designer with 12+ years at Apple, creating intuitive and visually appealing interfaces.",
  },
  {
    id: "jkl",
    Title: "Software Engineer",
    company: "Facebook",
    FirstName: "Emily",
    LastName: "Brown",
    experience: "6+ years",
    Description:
      "Software Engineer with 6+ years experience at Facebook, contributing to cutting-edge projects.",
  },
  {
    id: "mno",
    Title: "DevOps Engineer",
    company: "Tesla",
    FirstName: "David",
    LastName: "Wilson",
    experience: "9+ years",
    Description:
      "Skilled DevOps Engineer with 9+ years at Tesla, automating infrastructure and deployment pipelines.",
  },
];

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="bg-slate-500 h-[100vh]">
        <SearchAppBar />
        <div className="rounded-xl my-4 bg-white m-auto w-[500px] h-[630px] overflow-scroll">
          {Data.map((item) => {
            return (
              <Listitem
                id={item.id}
                Title={item.Title}
                company={item.company}
                FirstName={item.FirstName}
                LastName={item.LastName}
                experience={item.experience}
                Description={item.Description}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
