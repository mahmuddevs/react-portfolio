import { useEffect, useState } from "react"
import ProjectCard from "../../../components/ProjectCard"
import Spinner from "../../../components/Spinner";

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('/projects.json')
            .then((res) => res.json())
            .then((data) => {
                setProjects(data)
            })
            .catch((err) => {
                console.error(err)
            });
    }, []);

    return (
        <section id='projects' className="bg-[#313436]">
            <div className="w-11/12 md:container lg:w-9/12 mx-auto py-14 md:py-24">
                <div className="space-y-4 w-full md:w-9/12 text-center mx-auto">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-center">My <span className="text-accent">Projects</span></h2>
                    <p>Here are some of the projects I’ve worked on, showcasing my skills in building functional and visually appealing web applications.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-14">
                    {
                        !projects.length && <Spinner />
                    }
                    {
                        projects?.map((project) => {
                            return <ProjectCard key={project.id} data={project} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects