import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa6"
import img from '../../../assets/image/mahmud.png'
import { Typewriter } from "react-simple-typewriter"

const Banner = () => {
    return (
        <section id="banner" className='w-11/12 md:container lg:w-9/12 mx-auto grid place-items-center md:grid-cols-2 pt-14 md:pt-24 gap-6'>
            <img src={img} alt="mahmud" className="place-self-center md:place-self-end md:col-start-2 md:row-start-1 w-9/12 sm:w-7/12 md:w-full" />
            <div className="space-y-4 md:col-start-1 md:row-start-1 mb-8 md:mb-0 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                    Hi, I'm <span className="text-accent">
                        <Typewriter
                            words={['Mahmud Rashid', "A Web Developer"]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
                <p className="text-base w-10/12 sm:w-full xl:w-9/12 mx-auto md:mx-0">I'm a Developer eager to create responsive and user-friendly websites, with a growing knowledge of backend technologies to build complete web solutions.</p>
                <div className="flex justify-center md:justify-start gap-4 text-3xl">
                    <a href="https://www.facebook.com/mahmud.rashid.729768" className="border p-2 rounded-full hover:-translate-y-1 duration-300 transition-transform"><FaFacebookF /></a>
                    <a href="https://github.com/mahmuddevs" className="border p-2 rounded-full hover:-translate-y-1 duration-300 transition-transform"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/themahmudrashid/" className="border p-2 rounded-full hover:-translate-y-1 duration-300 transition-transform"><FaLinkedin /></a>
                </div>
                <button className="color-accent py-3 px-2 md:px-5 rounded-md flex mx-auto md:mx-0 hover:bg-[#9615db]/60">Download Resume</button>
            </div>
        </section>
    )
}

export default Banner