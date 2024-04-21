"use client";
import React, { useState, FC } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import Courses from "./components/Route/Courses";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="Hitech-Arge"
        description="Hitech-Arge is a platform for students to learn and get help from teachers"
        keywords="Programming, MERN, REDUX, Machine Learning"
      />
       <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Hero />
      <Courses />
      <FAQ />
      <Footer />
    </div>
  );
};
export default Page;
