"use client";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import NavItems from "../utils/NavItems";
import Roadmaps from "../utils/Roadmaps";
import Chatbot from "../utils/Chatbot";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import CustomModal from "../utils/CustomModal";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Verification from "./Auth/Verification";
import Image from "next/image";
import avatar from "../../public/assets/avatar.png";
import { BiSearch } from "react-icons/bi";
import { useSession } from "next-auth/react";
import {
  useLogOutQuery,
  useSocialAuthMutation,
} from "../../redux/features/auth/authApi";
import toast from "react-hot-toast";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Loader from "./Loader/Loader";
import { useRouter } from "next/navigation";

interface HeaderProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  setRoute: (route: string) => void;
}
const Header: FC<HeaderProps> = ({
  activeItem,
  setOpen,
  open,
  route,
  setRoute,
}) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const { data } = useSession();
  const {
    data: userData,
    isLoading,
    refetch,
  } = useLoadUserQuery(undefined, {});

  const [search, setSearch] = useState("");
  const router = useRouter();
  const [socialAuth, { isSuccess, error }] = useSocialAuthMutation();
  const [logout, setLogOut] = useState(false);
  const {} = useLogOutQuery(undefined, { skip: !logout ? true : false });

  useEffect(() => {
    if (!isLoading) {
      if (!userData) {
        if (data) {
          socialAuth({
            email: data?.user?.email,
            name: data?.user?.name,
            avatar: data.user?.image,
          });
          refetch();
        }
      }

      if (error) {
        if ("data" in error) {
          const errorData = error as any;
          toast.error(errorData.data.message);
        }
      }

      if (data === null) {
        if (isSuccess) {
          toast.success("Login Successfully");
        }
      }
      if (data === null && !isLoading && !userData) {
        setLogOut(true);
      }
    }
  }, [data, isSuccess, isLoading, userData, error, socialAuth, refetch]);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }
  const handleClose = (e: any) => {
    if (e.target.id === "screen") {
      {
        setOpenSidebar(false);
      }
    }
  };

  const handleSearch = () => {
    if (search === "") {
      return;
    } else {
      router.push(`/courses?title=${search}`);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full relative">
          <div
            className={`${
              active
                ? "dark:bg-opacity-50 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[11vh] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
                : "w-full border-b dark:border-[#ffffff1c] h-[11vh] z-[80] dark:shadow"
            }`}
          >
            <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
              <div className="w-full h-[80px] flex items-center justify-between p-3">
                <div className="w-[50%] flex items-between gap-10">
                  <div className="mb-3">
                    <Link
                      href={"/"}
                      className={`text-[25px] font-Poppins font-[500] text-black dark:text-white `}
                    >
                      Hitech-Arge
                    </Link>
                  </div>
                  <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative">
                    <input
                      type="search"
                      placeholder="Search Courses..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-xl p-2 w-full h-[80%] outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin"
                    />
                    <div
                      className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[40px] right-0 top-0 bg-[#39c1f3] rounded-r-xl"
                      onClick={handleSearch}
                    >
                      <BiSearch className="text-white" size={30} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <NavItems activeItem={activeItem} isMobile={false} />
                  <Roadmaps userData={userData} activeItem={activeItem} setOpen={setOpen} />
                  <Chatbot userData={userData} activeItem={activeItem} setOpen={setOpen} />
                  <ThemeSwitcher />
                  {/* only for mobile */}
                  <div className="800px:hidden">
                    <HiOutlineMenuAlt3
                      size={25}
                      className="cursor-pointer dark:text-white text-black"
                      onClick={() => setOpenSidebar(true)}
                    />
                  </div>
                  {userData ? (
                    <Link href={"/profile"}>
                      <Image
                        src={
                          userData?.user.avatar
                            ? userData.user.avatar.url
                            : avatar
                        }
                        alt=""
                        width={30}
                        height={30}
                        className="w-[30px] h-[30px] rounded-full cursor-pointer"
                        style={{
                          border:
                            activeItem === 7 ? "2px solid #37a39a" : "none",
                        }}
                      />
                    </Link>
                  ) : (
                    <button
                      className="hidden 800px:block cursor-pointer dark:text-white text-black border-[2px] border-black dark:border-white py-2 px-5 rounded-full"
                      onClick={() => setOpen(true)}
                    >
                      Login
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* mobile sidebar */}
            {openSidebar && (
              <div
                className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
                onClick={handleClose}
                id="screen"
              >
                <div className="w-[70%] fixed z-[999999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
                  <NavItems activeItem={activeItem} isMobile={true} />
                  <Roadmaps userData={userData} activeItem={activeItem} setOpen={setOpen} />
                  <Chatbot userData={userData} activeItem={activeItem} setOpen={setOpen} />
                  {userData?.user ? (
                    <Link href={"/profile"}>
                      <Image
                        src={
                          userData?.user.avatar
                            ? userData.user.avatar.url
                            : avatar
                        }
                        alt=""
                        width={30}
                        height={30}
                        className="w-[30px] h-[30px] rounded-full ml-[20px] cursor-pointer"
                        style={{
                          border:
                            activeItem === 7 ? "2px solid #37a39a" : "none",
                        }}
                      />
                    </Link>
                  ) : (
                    <button
                      className="hidden 800px:block cursor-pointer dark:text-white text-black border-[2px] border-black dark:border-white py-2 px-5 rounded-full"
                      onClick={() => setOpen(true)}
                    >
                      Login
                    </button>
                  )}
                  <br />
                  <br />
                  <p className="text-[16px] px-2 pl-5 text-black dark:text-white">
                    Copyright © 2023 ELearning
                  </p>
                </div>
              </div>
            )}
          </div>
          {route === "Login" && (
            <>
              {open && (
                <CustomModal
                  open={open}
                  setOpen={setOpen}
                  setRoute={setRoute}
                  activeItem={activeItem}
                  component={Login}
                  refetch={refetch}
                />
              )}
            </>
          )}

          {route === "Sign-Up" && (
            <>
              {open && (
                <CustomModal
                  open={open}
                  setOpen={setOpen}
                  setRoute={setRoute}
                  activeItem={activeItem}
                  component={SignUp}
                />
              )}
            </>
          )}

          {route === "Verification" && (
            <>
              {open && (
                <CustomModal
                  open={open}
                  setOpen={setOpen}
                  setRoute={setRoute}
                  activeItem={activeItem}
                  component={Verification}
                />
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
