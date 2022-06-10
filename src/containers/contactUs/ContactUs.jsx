import { useState } from "react";
import emailjs from 'emailjs-com';

import SectionHeader from "../../components/sectionHeader/SectionHeader"
const ContactUs = () => {

  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [title , setTitle] = useState('');
  const [message , setMessage] = useState('');


  const nameHandler = (e) => {
    setName(e.target.value);
  }
  const emailHandler = (e) => {
    setEmail(e.target.value);
  }
  const titleHandler = (e) => {
    setTitle(e.target.value);
  }
const messageHandler = (e) => {
  setMessage(e.target.value);
}

const submitHandler = function (e){
  e.preventDefault();

  const params = {
    name: name,
    email: email,
    title: title,
    message: message
  }

  emailjs.send('service_yvfjzli', 'template_yy9bxny', params, '7l6cQR3Wju2ZMkMC8');


  setName('');
  setEmail('');
  setTitle('');
  setMessage('');
}
  return (
    <section className="contact" id="contactus">

       <SectionHeader title="Contact Us" />
    
       <div className="contact__wrapper">
            <div className="contact__info">
                <form method="POST" className="contact__info__form" onSubmit={submitHandler}>
                   <label htmlFor="fullname">Full Name</label>
                   <input type="text" name="fullname" id="fullname" className="contact__info__form--input" placeholder="First , Last Name" value={name} onChange={nameHandler} required/>

                     <label htmlFor="email">Email Address</label>
                     <input type="email" name="email" id="email" className="contact__info__form--input" placeholder="Example@example.com" value={email} onChange={emailHandler} required/>

                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" className="contact__info__form--input" placeholder="Title" value={title} onChange={titleHandler} required/>

                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" className="contact__info__form--message" value={message} onChange={messageHandler} ></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="contact__map">
            <iframe title="Amore Lounge Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.610868201735!2d-96.61552328480722!3d33.19807808084694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1361f149499b%3A0x364de1b58592bcb3!2sAmor%C3%A9%20Lounge%20Cafe%20%26%20Hookah!5e0!3m2!1sen!2sus!4v1654743924800!5m2!1sen!2sus" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </div>
        
    </section>
  )
}

export default ContactUs