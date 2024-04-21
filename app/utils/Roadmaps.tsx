import Link from "next/link";
import React from "react";

type Props = {
  userData: any;
  activeItem: number;
  setOpen: (open: boolean) => void; 
};

const Roadmaps = ({ userData, activeItem, setOpen }: Props) => {
  const isLoggedIn = !!userData; 

  return (
    <div
      className={`${
        activeItem === 4
          ? "dark:text-[#37a39a] text-blue-400"
          : "dark:text-white text-black"
      } text-[18px] px-6 font-Poppins font-[400]`}
      onClick={() => !isLoggedIn && setOpen(true)} // open login popup if not logged in
    >
      <Link href={isLoggedIn ? "/roadmaps" : "#"} passHref>
        Roadmaps
      </Link>
    </div>
  );
};

export default Roadmaps;
