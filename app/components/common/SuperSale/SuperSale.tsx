import { SuperSaleType } from "./resources";

const SuperSale = ({
  children,
  className,
  rounded,
  padding,
}: SuperSaleType) => {
  return (
    <div
      className={`blur-section group-hover:animate-bounceAnimation p-2 ${rounded} overflow-hidden select-none ${className}`}
    >
      <div className={`p-2  ${rounded} bg-white w-full h-full`}>
        <div
          className={`bg-blue-700 ${rounded} ${padding} font-bold text-center text-white text-2xl w-full h-full`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default SuperSale;
