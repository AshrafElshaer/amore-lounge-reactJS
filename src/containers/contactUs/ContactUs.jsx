import SectionHeader from "../../components/sectionHeader/SectionHeader"
const ContactUs = () => {
  return (
    <section className="contact" id="contactus">
        <SectionHeader title="Contact Us" />

        <div className="contact__container">
            <div className="contact__info">
                <form action="#" className="contact__info__form">
                    <fieldset>
                        <legend>Full Name</legend>
                        <input type="text" placeholder="Enter Your Full Name" className="contact__info__form--input" required/>
                    </fieldset>
                    <fieldset>
                        <legend>Email Address</legend>
                        <input type="email" placeholder="example@gmail.com" className="contact__info__form--input"required/>
                    </fieldset>
                    <fieldset>
                        <legend>Title</legend>
                        <input type="text" placeholder="Enter Message Title" className="contact__info__form--input" required/>
                    </fieldset>
                    <fieldset>
                        <legend>Message</legend>
                        <textarea  rows="4" cols="50" placeholder="Enter Message" className="contact__info__form--textArea"required />
                    </fieldset>
                    <button type="submit">Send</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
            <div className="contact__map">

            </div>
        </div>
    </section>
  )
}

export default ContactUs