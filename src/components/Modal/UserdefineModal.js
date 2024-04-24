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
        }  z-40 fixed shadow-black translate-x-[142%] translate-y-[-100%] flex flex-col justify-center rounded-3xl text-2xl items-center w-[400px] h-[400px] bg-slate-400  `}
      >
        <div className="absolute right-4 top-3 ">
          <button
            onClick={closeButtonClickHandler}
            className="bg-white rounded-lg"
          >
            <CloseIcon color="black" fontSize="large" />
          </button>
        </div>
        <div className="flex flex-col w-full justify-center items-center font-bold">
          <p>Want to Sign Up as :</p>
          <div>
            <Link to="/SignUp/User">
              <button
                onClick={closeButtonClickHandler}
                className="bg-white p-2 m-3 w-[7rem] rounded-full"
              >
                User
              </button>
            </Link>
          </div>
          <div>
            <Link to="/SignUp/Expert">
              <button
                onClick={closeButtonClickHandler}
                className="bg-white p-2 m-3 w-[7rem] rounded-full"
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
