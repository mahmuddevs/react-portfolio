import aboutImg from "../../../assets/image/mahmud2.png"

const About = () => {
    return (
        <section id='about' className="bg-[#313436]">
            <div className='w-11/12 md:container mx-auto py-14 md:py-24 grid md:grid-cols-2 place-items-center gap-6'>
                <img src={aboutImg} alt="mahmud-about-img" className="border-4 border-[#9615db] rounded-full w-1/2 mx-auto" />
                <div className="space-y-4 w-full md:w-9/12 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl">About <span className="text-accent">Me</span></h2>
                    <p>I'm a passionate Web Developer specializing in the MERN stack. I focus on building responsive, user-friendly websites and full-stack applications. My goal is to continuously learn and grow while delivering seamless digital experiences and contributing to exciting projects.</p>
                </div>
            </div>
        </section>
    )
}

export default About