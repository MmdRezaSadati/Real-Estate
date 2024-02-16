import BoxTypes from "../types/Box.type";

const Box = ({ children, className }: BoxTypes) => {
  return (
    <div
      className={`${
        className ? className : ""
      } bg-white shadow-md my-3 shadow-slate-300/50 p-7 rounded-lg`}
    >
      {children}
    </div>
  );
};

export default Box;
