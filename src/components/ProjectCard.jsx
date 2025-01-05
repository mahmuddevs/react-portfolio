import { FaExternalLinkAlt } from "react-icons/fa"
import { Link } from "react-scroll"

const ProjectCard = ({ data }) => {
    const { id, name, short_description, drawbacks, technologies, image, live_link, client_git, server_git } = data
    return (
        <div className="rounded-lg bg-[#2d3032] drop-shadow-md overflow-hidden flex flex-col h-full">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="mb-4 text-sm">{short_description}</p>
            </div>
            <div className="p-6 mt-auto flex justify-between items-center">
                <Link
                    to={`/projects/${id}`}
                    className="color-accent py-2 px-3 md:px-5 rounded-md hover:bg-[#9615db]/60"
                >
                    View Details
                </Link>
                <a
                    href={live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-white/60 cursor-pointer hover:underline"
                >
                    <FaExternalLinkAlt className="w-5 h-5 mr-2" />
                    Live Demo
                </a>
            </div>
        </div>
    )
}

export default ProjectCard