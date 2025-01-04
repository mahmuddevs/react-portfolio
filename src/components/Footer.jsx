import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa6"

export const Footer = () => {
  return (
    <footer className="bg-neutral p-4">
      <div className="text-neutral-content items-center w-11/12 md:container lg:w-9/12 mx-auto">
        <p className="text-center">Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>
    </footer>
  )
}
