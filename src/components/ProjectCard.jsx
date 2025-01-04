import { FaExternalLinkAlt } from "react-icons/fa"

const ProjectCard = ({ title = "asdsa", description = "adasd", imageUrl = 'https://dummyimage.com/1920x1080/000/fff', liveUrl }) => {
    return (
        <div className="rounded-lg shadow-md overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="mb-4">{description}</p>
                <div className="flex justify-between items-center">
                    <button className="color-accent py-2 px-3 md:px-5 rounded-md hover:bg-[#9615db]/60">View Details</button>
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white hover:text-white/60 cursor-pointer hover:underline"
                    >
                        <FaExternalLinkAlt className="w-5 h-5 mr-2" />
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard