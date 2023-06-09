/* eslint-disable react/prop-types */

import DotLoader from "../Loader/DotLoader";

const Button = ({ isLoading, onClickHandler, children, type }) => {
  return (
    <button
      type={type}
      className=" px-[20px] py-1 rounded-md bg-primary hover:opacity-90 text-white transition-opacity cursor-pointer disabled:pointer-events-none disabled:opacity-80 h-[35px] min-w-[100px] text-center"
      onClick={onClickHandler}
      disabled={isLoading}
    >
      {isLoading ? <DotLoader /> : children}
    </button>
  );
};

Button.defaultProps = {
  isLoading: false,
};

export default Button;
