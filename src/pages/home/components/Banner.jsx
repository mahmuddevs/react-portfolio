import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa6"
import img from '../../../assets/image/mahmud.png'

const Banner = () => {
    return (
        <section id="banner" className='h-screen w-11/12 md:container lg:w-9/12 mx-auto grid place-items-center grid-cols-2'>
            <div className="text-white space-y-4">
                <h1 className="text-4xl font-semibold">Front End Developer</h1>
                <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi placeat optio, natus vitae dolore repellendus quidem inventore sint dolor culpa ea aspernatur voluptatum perspiciatis corporis accusamus, sit suscipit nulla magnam!</p>
                <div className="flex gap-4 text-3xl">
                    <a href="" className="border p-2 rounded-full hover:-translate-y-1 duration-300 transition-transform"><FaFacebookF /></a>
                    <a href="" className="border p-2 rounded-full hover:-translate-y-1 duration-300 transition-transform"><FaGithub /></a>
                    <a href="" className="border p-2 rounded-full hover:-translate-y-1 duration-300 transition-transform"><FaLinkedin /></a>
                </div>
                <button className="color-accent py-3 px-2 md:px-5 rounded-md">Download Resume</button>
            </div>
            <img src={img} alt="mahmud" />
        </section>
    )
}

export default Banner