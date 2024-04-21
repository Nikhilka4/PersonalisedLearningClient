import { useGetCourseDetailsQuery } from "@/redux/features/courses/courseApi";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Heading from "@/app/utils/Heading";
import Header from "../Header";
import Footer from "../Footer";
import CourseDetails from "./CourseDetails";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";

type Props = {
  id: string;
};

const CourseDetailsPage = ({ id }: Props) => {
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState("Login");

  const { data, isLoading } = useGetCourseDetailsQuery(id);
  const { data: userData } = useLoadUserQuery(undefined, {});

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Heading
            title={data.course.name + "-Hitech-Arge"}
            description="Hitech-Arge is a platform for students to learn and get help from teachers"
            keywords={data?.course.tags}
          />
          <Header
            open={open}
            setOpen={setOpen}
            activeItem={1}
            setRoute={setRoute}
            route={route}
          />
          <CourseDetails
            data={data.course}
            setRoute={setRoute}
            setOpen={setOpen}
          />
          <Footer />
        </div>
      )}
    </>
  );
};

export default CourseDetailsPage;
