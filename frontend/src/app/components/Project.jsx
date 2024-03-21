"use client"
import React,{useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
      id: 1,
      title: "Landing Page",
      description: "A simple and responsive landing page to showcase laptops and their prices",
      image: "/images/projects/landing.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/CliveOuma/landing-page",
      previewUrl: "https://laptops-landing-page.vercel.app/",
    },
    {
      id: 2,
      title: "Student Management System",
      description: "A solution for managing students,students to also access details securely.",
      image: "/images/projects/std-image.png",
      tag: ["All"],
      gitUrl: "https://github.com/CliveOuma/student-management-system",
      previewUrl: "/",
    },
]  

const Project = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );
  return (
    <>
    <h2 className='text-center text-4xl font-bold mt-4  pb-5 text-white'>My Works</h2>
    <section className="project my-12 md:my-12 pt-4  gap-2" id="project">
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
    <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}/>
    <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"}/>
    </div>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {
            filteredProjects.map((project) => (
                <ProjectCard key={project.id}
                title={project.title}
                description= {project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                />
            ))
        }
    </div>
    </section>
    </>
  )
}

export default Project