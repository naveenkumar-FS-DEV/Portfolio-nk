import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i44c69d', 'template_x88byvy', form.current, {
        publicKey: 'GJbB243s0libY4uSu',
      })
      .then(
        () => {
          setSubmitted(true); 
          form.current.reset();
          toast.success('Submitted, buddy!'); // Show success toast
          // console.log('SUCCESS!');
        },
        (error) => {
          toast.error('Failed to send message.'); // Show error toast
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="bg-gray-50" id='contact'>
      <h2 className="text-2xl font-bold text-center pt-8">Contact Us</h2>
      <div className="flex items-center justify-center p-16">
        <div className="bg-white p-6 rounded-lg shadow-md w-96 ">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Your Name"
                name='name'
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Your Email"
                name='email'
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Your Message"
                name='message'
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
