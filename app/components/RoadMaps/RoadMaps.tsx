import Link from "next/link";
import React from "react";
import { IoEyeSharp } from "react-icons/io5";


type Props = {};

const RoadMaps = (props: Props) => {
  return (
    <div className="w-full">
      <h1 className="text-[35px] text-black dark:text-white font-Poppins font-[700] ">
        Roadmaps
      </h1>
      <div className="flex justify-start mt-10">
        <div className="border-t-2 border-black dark:border-white w-[40%] h-10 mt-6 mr-3" />
        <div className="mx-auto border-2 pt-2 px-6 h-[45px] rounded-xl border-black dark:border-white text-black dark:text-white font-Poppins">
          Role Based Roadmaps
        </div>
        <div className="border-t-2 border-black dark:border-white w-[40%] h-10 mt-6 ml-3" />
      </div>
      <div className="w-full grid grid-cols-3 gap-4 border-2 text-black dark:text-white border-black dark:border-white p-6 rounded-xl mt-10 justify-items-center">
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Frontend Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/frontend" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Backend Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/backend" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">DevOps Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/devops" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Full-Stack Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/full-stack" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">AI & DataScience Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/ai-data-scientist" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Data Analyst Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/data-analyst" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Android Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/android" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">PostgreSQL Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/postgresql-dba" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Blockchain Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/blockchain" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">QA Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/qa" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">
              Software Architect Roadmap
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/software-architect" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Flutter Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/flutter" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Cyber Security Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/cyber-security" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">UX Design Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/ux-design" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">React Native Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/react-native" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Game Developer Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/game-developer" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Technical Writer Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/technical-writer" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">MLOps Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/mlops" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-start mt-10">
        <div className="border-t-2 border-black dark:border-white w-[40%] h-10 mt-6 mr-3" />
        <div className="mx-auto border-2 pt-2 px-6 h-[45px] rounded-xl border-black dark:border-white text-black dark:text-white font-Poppins">
          Skill Based Roadmaps
        </div>
        <div className="border-t-2 border-black dark:border-white w-[40%] h-10 mt-6 ml-3" />
      </div>
      <div className="w-full grid grid-cols-3 gap-4 text-black dark:text-white border-2 border-black dark:border-white p-6 rounded-xl mt-10 justify-items-center">
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Computer Science Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/computer-science" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">React Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/react" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Angular Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/angular" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Vue Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/vue" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Javascript Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/javascript" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Node.js Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/nodejs" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Typescript Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/typescript" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Python Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/python" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">SQL Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/sql" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">System Design Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/system-design" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">ASP.NET Core Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/aspnet-core" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Java Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/java" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">C++ Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/cpp" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Spring Boot Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/spring-boot" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Go Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/golang" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Rust Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/rust" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">GraphQL Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/graphql" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">
              Design and Architecture Roadmap
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/software-design-architecture" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Design System Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/design-system" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">AWS Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/aws" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Code Review Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/code-review" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Docker Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/docker" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Kubernetes Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/kubernetes" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">MongoDB Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/mongodb" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">
              Prompt Engineering Roadmap
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/prompt-engineering" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">
              Data Structures & Algorithms Roadmap
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/datastructures-and-algorithms" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-start mt-10">
        <div className="border-t-2 border-black dark:border-white w-[40%] h-10 mt-6 mr-3" />
        <div className="mx-auto border-2 pt-2 px-6 h-[45px] rounded-xl border-black dark:border-white text-black dark:text-white font-Poppins">
          Best Practices
        </div>
        <div className="border-t-2 border-black dark:border-white w-[40%] h-10 mt-6 ml-3" />
      </div>
      <div className="w-full grid grid-cols-3 gap-4 text-black dark:text-white border-2 border-black dark:border-white p-6 rounded-xl mt-10 justify-items-center mb-9">
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">
              Backend Performance Roadmap
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/best-practices/backend-performance" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">
              Frontend Performance Roadmap
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/best-practices/frontend-performance" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">API Security Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/best-practices/api-security" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">Code Reviews Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/best-practices/code-review" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[390px] border-2 border-black dark:border-white px-7 py-4 rounded-xl">
          <div>
            <p className="text-[25px] text-center">AWS Roadmap</p>
          </div>
          <div className="flex justify-center">
            <Link href="https://roadmap.sh/best-practices/aws" target="_blank">
              <div className="w-[155px] flex justify-between items-center border-2 border-black dark:border-white px-3 py-2 rounded-xl mt-3">
                <IoEyeSharp />
                View Roadmap
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMaps;
