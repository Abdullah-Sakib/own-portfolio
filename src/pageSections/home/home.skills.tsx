import Bootstrap from "../../assets/skills/Bootstrap.png";
import css from "../../assets/skills/css.png";
import figma from "../../assets/skills/Figma.png";
import tailwind from "../../assets/skills/Tailwind.png";
import mongodb from "../../assets/skills/MongoDB.png";
import express from "../../assets/skills/express.png";
import firebase from "../../assets/skills/firebase.png";
import git from "../../assets/skills/git.png";
import github from "../../assets/skills/github.png";
import html from "../../assets/skills/html.png";
import js from "../../assets/skills/js.png";
import netlify from "../../assets/skills/netlify.svg";
import jwt from "../../assets/skills/jwt.png";
import node from "../../assets/skills/node.png";
import react from "../../assets/skills/react.png";
import redux from "../../assets/skills/redux.png";
import ts from "../../assets/skills/typeScript.jpg";
import vercel from "../../assets/skills/vercel.png";
import sass from "../../assets/skills/sass.png";
import mongoose from "../../assets/skills/mongoose.png";
import rtkQuery from "../../assets/skills/rtk-query.jpg";

const HomeSkills = () => {
  const skills = [
    {
      name: "HTML",
      image: html,
    },
    {
      name: "CSS",
      image: css,
    },
    {
      name: "Tailwind",
      image: tailwind,
    },
    {
      name: "SASS",
      image: sass,
    },
    {
      name: "Bootstrap",
      image: Bootstrap,
    },
    {
      name: "Figma",
      image: figma,
    },
    {
      name: "JavaScript",
      image: js,
    },
    {
      name: "TypeScript",
      image: ts,
    },
    {
      name: "React",
      image: react,
    },
    {
      name: "Redux",
      image: redux,
    },
    {
      name: "RTK Query",
      image: rtkQuery,
    },
    {
      name: "Express",
      image: express,
    },
    {
      name: "Node",
      image: node,
    },
    {
      name: "MongoDB",
      image: mongodb,
    },
    {
      name: "Mongoose",
      image: mongoose,
    },
    {
      name: "Firebase",
      image: firebase,
    },
    {
      name: "JWT",
      image: jwt,
    },
    {
      name: "Git",
      image: git,
    },
    {
      name: "GitHub",
      image: github,
    },
    {
      name: "Netlify",
      image: netlify,
    },
    {
      name: "Vercel",
      image: vercel,
    },
  ];
  return (
    <section className="text-gray-600 body-font" id="skills">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Skills
            </h1>
            <div className="h-1 w-10 bg-green-500 rounded" />
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 -m-4 ">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="w-24 p-4 shadow-md cursor-pointer rounded-lg bg-gray-100"
            >
              <a className="block h-4/6  relative p-2 overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-contain object-center rounded-lg w-full h-full block "
                  src={skill.image}
                />
              </a>
              <div className="mt-3 text-center">
                <h3 className="text-gray-500 text-[13px]  title-font mb-1">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSkills;
