import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSucces] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);


        emailjs.sendForm(
            'serviceidkunk',  // Replace with your EmailJS Service ID
            'template_1k0r4gz', // Replace with your EmailJS Template ID
            e.target,           // Form reference
            '-e4aQxH864emqv0fq'      // Replace with your EmailJS User ID
        )
            .then((result) => {
                setIsFormSubmitted(true);
                setIsLoading(false);
                setIsSucces(true);

                setTimeout(() => {
                    setIsFormSubmitted(false);
                    setIsSucces(false);
                }, 2000);

            }, (error) => {
                setIsFormSubmitted(true);
                setIsLoading(false);
                setIsSucces(false);
                setTimeout(() => {
                    setIsFormSubmitted(false);
                }, 2000);

            });

        e.target.reset();
    };

    return (
        <main className="bg-base-100 px-6 shadow-sm flex-1 flex justify-center items-center">
            <div className="toast toast-center toast-top mt-32 z-2">
                {isFormSubmitted && isSuccess && (
                    <div className="alert alert-success">
                        <span>Message sent successfully.</span>
                    </div>
                )}
                {isFormSubmitted && !isSuccess && (
                    <div className="bg-orange-700 alert">
                        <span>Failed to send message. Please try again.</span>
                    </div>
                )}
            </div>
            <div className="p-4 w-[600px]">
                <h1 className="mb-4">Come on, Lets's <span className=' text-violet-300 text-xl'>connect eachOther</span></h1>
                <form onSubmit={sendEmail} className='flex flex-col gap-4'>
                    <input className='border p-2' type="text" name="name" placeholder="Name" required></input>
                    <input className='border p-2' type="email" name="email" placeholder="Email" required></input>
                    <input className='border p-2' type="tel" name="phno" pattern="[0-9]{10}" placeholder="Contact No (96761XXXXX)" minLength={10} maxLength={10} required></input>
                    <textarea className='border p-2' name="message" placeholder="Message" required></textarea>
                    <button className="btn btn-primary flex items-center gap-2" type="submit">
                        <span className={`${isLoading ? 'loading loading-dots loading-xs' : ''}`}></span>
                        {isLoading ? 'Sending' : 'Send Message'}
                    </button>

                </form>
            </div>
        </main>
    );
};

export default Contact;