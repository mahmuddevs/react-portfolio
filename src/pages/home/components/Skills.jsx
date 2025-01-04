import html from "../../../assets/icons/html.png"
import css from "../../../assets/icons/css.png"
import tailwind from "../../../assets/icons/tailwind.png"
import bootstrap from "../../../assets/icons/bootstrap.png"
import js from "../../../assets/icons/js.png"
import react from "../../../assets/icons/react.png"
import firebase from "../../../assets/icons/firebase.png"
import mongodb from "../../../assets/icons/mongodb.png"
import express from "../../../assets/icons/express.png"

const Skills = () => {
    return (
        <section id='skills' className='w-11/12 md:container mx-auto py-14 md:py-24'>
            <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-center">My <span className="text-accent">Skills</span></h2>
                <div className="grid md:grid-cols-2 mt-14 gap-8">
                    <div className="space-y-8">
                        <div className="flex gap-4 items-center">
                            <img src={html} alt="" className="w-12" />
                            <progress className="progress text-[#9615db]/60 w-10/12 h-4 bg-[#dfdedd]" value="90" max="100"></progress>
                        </div>
                        <div className="flex gap-4 items-center">
                            <img src={css} alt="" className="w-12" />
                            <progress className="progress text-[#9615db]/60 w-10/12 h-4 bg-[#dfdedd]" value="80" max="100"></progress>
                        </div>
                        <div className="flex gap-4 items-center">
                            <img src={tailwind} alt="" className="w-12" />
                            <progress className="progress text-[#9615db]/60 w-10/12 h-4 bg-[#dfdedd]" value="85" max="100"></progress>
                        </div>
                        <div className="flex gap-4 items-center">
                            <img src={bootstrap} alt="" className="w-12" />
                            <progress className="progress text-[#9615db]/60 w-10/12 h-4 bg-[#dfdedd]" value="90" max="100"></progress>
                        </div>
                        <div className="flex gap-4 items-center">
                            <img src={js} alt="" className="w-12" />
                            <progress className="progress text-[#9615db]/60 w-10/12 h-4 bg-[#dfdedd]" value="90" max="100"></progress>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="flex gap-2 items-center">
                            <img src={react} alt="" className="w-12" />
                            <progress className="progress text-[#9615db]/60 w-10/12 h-4 bg-[#dfdedd]" value="75" max="100"></progress>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src={firebase} alt="" className="w-12" />
                            <progress className="progress text-[#9615db]/60 w-10/12 h-4 bg-[#dfdedd]" value="65" max="100"></progress>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src={mongodb} alt="" className="w-12" />
                            <progress className="progress text-[#9615db]/60 w-10/12 h-4 bg-[#dfdedd]" value="70" max="100"></progress>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src={express} alt="" className="w-12" />
                            <progress className="progress text-[#9615db]/60 w-10/12 h-4 bg-[#dfdedd]" value="75" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills