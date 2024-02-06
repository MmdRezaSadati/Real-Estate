import { ReactNode } from "react";

const MainContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`min-w-[330px] max-w-[1920px] px-5 md:px-16 lg:px-24 xl:px-32 mx-auto w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default MainContainer;
