import { BiArrowBack } from "react-icons/bi";
// eslint-disable-next-line react/prop-types
const BackButton = ({ onClickHandler }) => {
  return (
    <button
      onClick={onClickHandler}
      className=" cursor-pointer bg-white hover:bg-gray-200 p-3 rounded-full transition-all "
    >
      <BiArrowBack />
    </button>
  );
};

export default BackButton;
