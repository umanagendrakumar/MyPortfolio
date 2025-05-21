import emailjs from '@emailjs/browser';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'serviceidkunk',  // Replace with your EmailJS Service ID
            'template_1k0r4gz', // Replace with your EmailJS Template ID
            e.target,           // Form reference
            '-e4aQxH864emqv0fq'      // Replace with your EmailJS User ID
        )
            .then((result) => {
                alert('Message sent successfully!');
            }, (error) => {
                alert('Failed to send message. Please try again.');
            });

        e.target.reset();
    };
    return (
        <main className="bg-base-100 px-6 shadow-sm flex-1 flex justify-center items-center">
            <div className="p-4 w-[600px]">
                <h1 className="mb-4">Come on, Lets's <span className=' text-violet-300 text-xl'>connect eachOther</span></h1>
                <form onSubmit={sendEmail} className='flex flex-col gap-4'>
                    <input className='border p-2' type="text" name="name" placeholder="Name" required></input>
                    <input className='border p-2' type="email" name="email" placeholder="Email" required></input>
                    <input className='border p-2' type="tel" name="phno" pattern="[0-9]{10}" placeholder="Contact No (96761XXXXX)" minLength={10} maxLength={10} required></input>
                    <textarea className='border p-2' name="message" placeholder="Message" required></textarea>
                    <input className="btn btn-primary" type="submit" value={"Send Message"}></input>
                </form>
            </div>
        </main>
    );
};

export default Contact;