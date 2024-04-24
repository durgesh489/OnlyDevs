import Lottie from "react-lottie";
import Errorpage from "../../Assets/Lottie_Animation/Errorpage.json";

const ErrorPage = () => {
  return (
    <div className="  translate-y-[50%] ">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: Errorpage,
        }}
        height={300}
        width={300}
      />
    </div>
  );
};

export default ErrorPage;
