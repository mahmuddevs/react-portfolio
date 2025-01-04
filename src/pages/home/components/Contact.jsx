import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa6';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_migmzl4', 'template_8830v9y', form.current, {
                publicKey: 'L8hHHRfhM2JRdmQse',
            })
            .then(
                () => {
                    form.current.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section id='contact' className='w-11/12 md:container lg:w-8/12 mx-auto py-14 md:py-24'>
            <div className="space-y-4 w-full md:w-9/12 text-center mx-auto mb-14">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-center">Contact <span className="text-accent">Me</span></h2>
                <p>Feel free to reach out if you have any questions, collaboration opportunities, or simply want to connect. I’m always open to new conversations and would love to hear from you!</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="place-self-center flex-1 space-y-6">
                    <h2 className="text-2xl md:text-2xl text-center md:text-left">Direct <span className="text-accent">Contact</span></h2>
                    <div className="flex items-center space-x-4">
                        <FaEnvelope className="text-3xl text-accent" />
                        <a href="mailto:mahmud.devs@gmail.com" className="hover:text-[#9615db]"><span className='font-semibold text-white'>Email: </span>mahmud.devs@gmail.com</a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaPhone className="text-3xl text-accent" />
                        <a href="tel:+8801875396416" className="hover:text-[#9615db]"><span className='font-semibold text-white'>Phone: </span>+8801875396416</a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaWhatsapp className="text-3xl text-accent" />
                        <a href="https://wa.me/01875396416" className="hover:text-[#9615db]"><span className='font-semibold text-white'>WhatsApp: </span>01875396416</a>
                    </div>
                </div>
                <form className="card-body flex-1" ref={form} onSubmit={sendEmail}>
                    <h2 className="text-2xl md:text-2xl text-center md:text-left">Or Send <span className="text-accent">Message</span></h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" name="from_name" placeholder="name" className="input input-bordered input-md text-black" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" name="from_email" placeholder="email" className="input input-bordered input-md text-black" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered text-black" name="message" rows="3" placeholder="Write your message here..."></textarea>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn color-accent text-white border-0 hover:bg-[#9615db]/60">Send</button>
                    </div>
                </form>
            </div>
        </section >
    )
}

export default Contact