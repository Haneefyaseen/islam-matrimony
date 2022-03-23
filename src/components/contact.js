function Contact () {
    return (
        <div>
        <div className="contact">
            <h2>Contact Page</h2>
            <h3>Phone: 9551432893</h3>
            <h3>Email: islam.matrimony@gmail.com</h3>
            <h3>GPay: bathoolza@okicici</h3>
            <h4>Service Charge: Rs: 500/-</h4>
        </div>
        <div className="contact-form">
            <h2>Send your contact details</h2>
            <form action="mailto:islam.matrimony@gmail.com?subject=Re: Alliance" method="post" enctype="text/plain">
                <input type="text" placeholder="name" />
                <input type="text" placeholder="mobile" />
                <textarea className="description" placeholder="description"/>
                <strong>Upload photo</strong><input type="file" accept="image/*" />
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    )
}

export default Contact;