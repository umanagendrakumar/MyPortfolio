import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

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

        e.target.reset(); // Reset the form after submission
    };
    return (
        <div className="body">
            <div className="contact">
                <h1 className="contact-heading">Come on, Lets's work together</h1>
                <div className="contact-btn-section">
                    <a href="https://www.linkedin.com/in/kunk/" className="linkedin contact-btn">LinkedIn</a>
                    <a href="https://github.com/umanagendrakumar" className="github contact-btn">GitHub</a>
                    <a href="mailto:kambalaumanagendrakumar@gmail.com" className="gmail contact-btn">Gmail</a>
                </div>
                <div className="contact-form">
                    <form onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="Name" required></input>
                        <input type="email" name="email" placeholder="Email" required></input>
                        <input type="tel" name="phno" pattern="[0-9]{10}" placeholder="Contact No" minLength={10} maxLength={10} required></input>
                        <textarea name="message" placeholder="Message" required></textarea>
                        <input className="contact-submit" type="submit" value={"S u b m i t  (if serious)"}></input>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default Contact;