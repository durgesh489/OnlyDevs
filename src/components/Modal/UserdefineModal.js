import CloseIcon from "@mui/icons-material/Close";
import { BrowserRouter, Link } from "react-router-dom";
import React from "react";

const UserdefinModal = (props) => {
  const closeButtonClickHandler = () => {
    props.visibilityHandler();
  };

  return (
    <React.Fragment>
      <div
        className={`${
          props.visibility ? " " : "hidden"
        }  z-40  shadow-md border-2 border-blue-400 fixed top-0 translate-x-[142%] translate-y-[28%] bg-white flex justify-center rounded-2xl text-2xl  w-[400px] h-[400px]   `}
      >
        <div className="absolute right-4 top-3 ">
          <button
            onClick={closeButtonClickHandler}
            className="bg-white rounded-lg"
          >
            <CloseIcon color="black" fontSize="large" />
          </button>
        </div>
        <div className="flex flex-col w-full justify-center gap-8 items-center font-bold">
          <p>Want to Sign Up as :</p>
          <div>
            <div>
              <Link to="/SignUp/User">
                <button
                  onClick={closeButtonClickHandler}
                  className="bg-green-500 text-white p-2 w-[7rem] rounded-lg hover:outline hover:outline-offset-2  hover:outline-green-500 hover:bg-green-400"
                >
                  User
                </button>
              </Link>
            </div>
          </div>
          <div>
            <Link to="/SignUp/Expert">
              <button
                onClick={closeButtonClickHandler}
                className="bg-green-500 text-white p-2  w-[7rem] rounded-lg hover:outline hover:outline-offset-2  hover:outline-green-500 hover:bg-green-400"
              >
                Expert
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserdefinModal;
