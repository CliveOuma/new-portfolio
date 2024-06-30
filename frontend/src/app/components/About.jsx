"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
      <ul className="list-disc pl-2">
        <li>Full-stack Web Development</li>
        <li>UI/UE Design</li>
        <li>Wordpress</li>
        </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Machakos University</li>
        <li>Bsc in Information Technology</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="about image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          As a junior software engineer, I am deeply passionate about crafting elegant solutions.
          With a solid foundation in programming languages and frameworks such as JavaScript, React, Next Js, 
          Node Js, Express js, Python, Django. I thrive in environments where creativity meets technical prowess.
          My collaborative spirit, coupled with my dedication to continuous learning, drives me to 
          adapt swiftly to new technologies and methodologies.In my spare time, 
          I enjoy exploring emerging technologies, and honing my skills
          through personal coding. My goal is to grow into a proficient
          software engineer who not only writes impeccable code but also fosters a culture of teamwork, 
          innovation, and excellence in every project I undertake.

          </p>
          <div className="flex flex-row justify-start mt-8">
          <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
            Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
            Skills{" "}
            </TabButton>
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;