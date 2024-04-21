"use client";

import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import Link from "next/link";
import React, { FC } from "react";
import Loader from "../Loader/Loader";

type Props = {};

const Hero: FC<Props> = (props) => {
  const { isLoading } = useGetHeroDataQuery("", {});

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className={`w-[90%] min-h-screen 800px:w-[80%] m-auto flex flex-col justify-center items-center`}
        >
          <h1 className="text-center font-Poppins !text-[45px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white 800px:!leading-[60px] text-[#000] font-[700] tracking-tight">
            Unleash your inner{" "}
            <span className="text-gradient">
              programming <br />
              genius{" "}
            </span>{" "}
            with our community.
          </h1>
          <br />
          <h5 className="text-center font-Poppins !text-lg leading-[15px] sm:text-xl lg:text-2xl dark:text-white 800px:!leading-[30px] text-[#000] font-[300] tracking-tight opacity-65">
            Empower your programming journey with Becodemy <br />
            dedicated community and comprehensive resources.
          </h5>
          <Link href="/courses">
            <button className="border-[2px] py-3 px-5 rounded-full text-black dark:text-white border-black dark:border-white mt-5 courseButton">
              Explore Courses
            </button>
          </Link>{" "}
        </div>
      )}
    </>
  );
};
export default Hero;
