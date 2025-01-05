import { li } from "motion/react-client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams()
    const [project, setProject] = useState([])
    const [selectedImage, setSelectedImage] = useState(null)

    const { name, short_description, description, drawbacks, technologies, projectImages, live_link, client_git, server_git } = project

    useEffect(() => {
        fetch('/projects.json')
            .then((res) => res.json())
            .then((data) => {
                const currentProject = data.find((item) => item.id === id)
                setProject(currentProject)
            })
            .catch((err) => {
                console.error(err)
            });
    }, []);

    return (
        <>

            <div className="min-h-scree py-14 md:py-24">
                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <div className="px-4 py-6 sm:px-0">
                            <div className="bg-[#313436] drop-shadow-lg overflow-hidden sm:rounded-lg pb-14">
                                <div className="px-4 py-5 sm:px-6 space-y-4">
                                    <h2 className="my-8 text-2xl md:text-3xl lg:text-4xl text-center">Project <span className="text-accent">Overview</span></h2>
                                    <h4 className="text-xl font-semibold">Name: {name}</h4>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-200">{short_description}</p>
                                </div>
                                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                        <div className="sm:col-span-2">
                                            <dt className="text-sm font-semibold text-gray-200">Description</dt>
                                            <dd className="mt-1 text-sm text-white">{description}</dd>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <dt className="text-sm font-semibold text-gray-200">Drawbacks</dt>
                                            <dd className="mt-1 text-sm text-white">
                                                <ol>
                                                    {drawbacks?.map((item, index) => {
                                                        return <li key={index}>{item}</li>
                                                    })}
                                                </ol>
                                            </dd>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <dt className="text-sm font-semibold text-gray-200">Technologies</dt>
                                            <dd className="mt-1 text-sm text-white">
                                                <ul className="flex flex-wrap gap-2">
                                                    {technologies?.map((tech, index) => (
                                                        <li key={index} className="bg-blue-100 text-blue-700 font-medium px-2 py-1 rounded-full text-xs">
                                                            {tech}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </dd>
                                        </div>
                                        <div className="sm:col-span-1">
                                            <dt className="text-sm font-semibold text-gray-200">Live Link</dt>
                                            <dd className="mt-1 text-sm text-white">
                                                <a href={live_link} className="text-accent font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
                                                    View Live Site
                                                </a>
                                            </dd>
                                        </div>
                                        <div className="sm:col-span-1">
                                            <dt className="text-sm font-semibold text-gray-200">GitHub Repositories</dt>
                                            <dd className="mt-1 text-sm text-white">
                                                <a href={client_git} className="text-accent font-semibold hover:underline mr-4" target="_blank" rel="noopener noreferrer">
                                                    Frontend
                                                </a>
                                                <a href={server_git} className="text-accent font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
                                                    Backend
                                                </a>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 bg-[#313436] drop-shadow-lg rounded-lg px-4 py-5 sm:px-6 pb-14">
                            <h2 className="my-8 text-2xl md:text-3xl lg:text-4xl text-center">Project <span className="text-accent">Gallary</span></h2>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {projectImages?.map((src, index) => (
                                    <div key={index} className="bg-gray-200 rounded-lg overflow-hidden cursor-pointer">
                                        <img
                                            src={src}
                                            alt={`Project image ${index + 1}`}
                                            width={600}
                                            height={400}
                                            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                                            onClick={() => setSelectedImage(src)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {selectedImage && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                            onClick={() => setSelectedImage(null)}
                        >
                            <div className="max-w-4xl w-full h-full flex items-center justify-center p-4">
                                <img
                                    src={selectedImage}
                                    alt="Full-screen view"
                                    width={1200}
                                    height={800}
                                    className="max-w-full max-h-full object-contain bg-[#2d3032] drop-shadow-md"
                                />
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </>
    )
}

export default Details