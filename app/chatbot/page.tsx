"use client";
import React, { useState } from 'react'
import Footer from '../components/Footer'
import Heading from '../utils/Heading'
import Header from '../components/Header'
import Chatbot from '../components/Chatbot/Chatbot'


type Props = {}

const Page = (props: Props) => {
    const [route, setRoute] = useState("Login");
    const [open, setOpen] = useState(false);
  return (
    <div>
       
        <>
          <Header
            route={route}
            setRoute={setRoute}
            open={open}
            setOpen={setOpen}
            activeItem={5}
          />
          <div className="w-[95%] 800px:w-[85%] m-auto min-h-[100vh]">
            <Heading
              title={"Roadmaps - Elearning"}
              description={"Elearning is a programming community."}
              keywords={
                "programming community, coding skills, expert insights, collaboration, growth"
              }
            />
            <br />
            <Chatbot />
          </div>
          <Footer />
        </>
    </div>
  )
}

export default Page