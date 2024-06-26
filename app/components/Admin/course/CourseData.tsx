import { AiOutlinePlusCircle, AiFillDelete } from "react-icons/ai";
import { styles } from "@/app/styles/style";
import React, { FC } from "react";
import toast from "react-hot-toast";

type Props = {
  benefits: { title: string }[];
  setBenefits: (benefits: { title: string }[]) => void;
  prerequisites: { title: string }[];
  setPrerequisities: (prerequisites: { title: string }[]) => void;
  active: number;
  setActive: (active: number) => void;
};

const CourseData: FC<Props> = ({
  benefits,
  setBenefits,
  prerequisites,
  setPrerequisities,
  active,
  setActive,
}) => {
  const handleBenefitChange = (index: number, value: any) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[index].title = value;
    setBenefits(updatedBenefits);
  };

  const handleDeleteBenefit = (index: number) => {
    if (benefits.length > 1) {
      const updatedBenefits = [...benefits];
      updatedBenefits.splice(index, 1);
      setBenefits(updatedBenefits);
    }
  };

  const handleAddBenefit = () => {
    setBenefits([...benefits, { title: "" }]);
  };

  const handlePrerequisitesChange = (index: number, value: any) => {
    const updatedPrerequisites = [...prerequisites];
    updatedPrerequisites[index].title = value;
    setPrerequisities(updatedPrerequisites);
  };

  const handleDeletePrerequisite = (index: number) => {
    if (prerequisites.length > 1) {
      const updatedPrerequisites = [...prerequisites];
      updatedPrerequisites.splice(index, 1);
      setPrerequisities(updatedPrerequisites);
    }
  };

  const handleAddPrerequisites = () => {
    setPrerequisities([...prerequisites, { title: "" }]);
  };

  const prevButton = () => {
    setActive(active - 1);
  };

  const handleOptions = () => {
    if (
      benefits[benefits.length - 1]?.title !== "" &&
      prerequisites[prerequisites.length - 1]?.title !== ""
    ) {
      setActive(active + 1);
    } else {
      toast.error("Please fill the fields for go to next!");
    }
  };

  return (
    <div className="w-[80%] m-auto mt-15 800px:mt-24 block">
      <div>
        <label className={`${styles.label} text-[20px]`} htmlFor="email">
          What are the benefits for students in this course?
        </label>
        <br />

        {benefits.map((benefit: any, index: number) => (
          <div key={index} className="flex items-center">
            <input
              type="text"
              name=""
              placeholder="You will be able to build a full stack LMS Platform..."
              required
              className={`${styles.input} my-2 flex-grow`}
              value={benefit.title}
              onChange={(e) => handleBenefitChange(index, e.target.value)}
            />
            <AiFillDelete
              className="text-black dark:text-white ml-2 cursor-pointer"
              style={{ cursor: benefits.length > 1 ? 'pointer' : 'not-allowed' }}
              onClick={() => handleDeleteBenefit(index)}
            />
          </div>
        ))}
        <AiOutlinePlusCircle
          className="text-black dark:text-white"
          style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}
          onClick={handleAddBenefit}
        />
      </div>

      <div>
        <label className={`${styles.label} text-[20px]`} htmlFor="email">
          What are the prerequisites for starting this course?
        </label>
        <br />
        {prerequisites.map((prerequisite: any, index: number) => (
          <div key={index} className="flex items-center">
            <input
              type="text"
              name=""
              placeholder="You need basic knowledge of MERN stack"
              required
              className={`${styles.input} my-2 flex-grow`}
              value={prerequisite.title}
              onChange={(e) => handlePrerequisitesChange(index, e.target.value)}
            />
            <AiFillDelete
              className="text-black dark:text-white ml-2 cursor-pointer"
              style={{ cursor: prerequisites.length > 1 ? 'pointer' : 'not-allowed' }}
              onClick={() => handleDeletePrerequisite(index)}
            />
          </div>
        ))}
        <AiOutlinePlusCircle
          className="text-black dark:text-white"
          style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}
          onClick={handleAddPrerequisites}
        />
      </div>
      <div className="w-full flex items-center justify-between">
        <div
          className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 m-[20px] cursor-pointer"
          onClick={() => prevButton()}
        >
          Prev
        </div>
        <div
          className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 m-[20px] cursor-pointer"
          onClick={() => handleOptions()}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default CourseData;
