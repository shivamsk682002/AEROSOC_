import { useRef } from 'react'
import React from 'react'
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_h3iev0h', 'template_x17zjcc', form.current, {
        publicKey: 'C-kl8z54FjxPDl4xb',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message sent")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form  ref={form} onSubmit={sendEmail} className='w-[85%] m-auto shadow-2xl p-8 bg-sky-700 rounded-3xl'>
    <div id='form' className='md:flex justify-cente  w-[100%] m-auto'>
    <div id='left' className='w-[100%] flex-row justify-center pr-8'>
    <div>
      <label>First Name</label>
      <input type="text " id='name' name ="name" placeholder="First Name" className="form-control md:h-[7vh]"  ></input>
    </div>
    <div>
      <label>Last Name</label>
      <input type="text"  placeholder="First Name" class="form-control md:h-[7vh]"  ></input>
    </div>
    <div>
      <label>E-mail</label>
      <input type="Email" id='Email' name ="Email" placeholder="First Name" class="form-control md:h-[7vh]"  ></input>
    </div>
    <div>
      <label>Subject</label>
      <input type="text" id='subject' name ="subject"  placeholder="Subject" class="form-control md:h-[7vh]"  ></input>
    </div>
    </div>
    <div id='right' className='w-[100%]'>
    <div>
      <label>Leave us a Message..</label>
      <textarea type="text" id='message' name = "message" placeholder="Your Message goes here..." class="form-control h-[20vh] md:h-[40vh]"  ></textarea>
    </div>
    </div>
    
    </div>
    <div className=" flex justify-center  text-center pt-[5vh]">
    <button  className=" flex justify-center  text-center hover: bg-blue-600  text-white font-bold py-2 px-[5vh] rounded-full text hover:text-slate-900 hover:text-xl">Submit</button> 
    </div>
  </form>
  );
}
export default ContactUs;