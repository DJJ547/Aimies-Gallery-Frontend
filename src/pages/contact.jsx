import React, { useState, useRef } from "react";
import Footer from "../components/footer";
import Popup from "reactjs-popup";

import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_2p1xtcx";
const TEMPLATE_ID = "template_8pwbfc7";
const PUBLIC_KEY = "fKX7-BILrHdblzfwf";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const onNameInput = (e) => {
    setName(e.target.value);
  };

  const onEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const onMessageInput = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (name && email && message) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  const onClear = () => {
    // 👇️ clear input value
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="overflow-y-scroll">
      <div className="flex items-center justify-center">
        <h1 className="font-lobster text-7xl max-w-fit max-h-fit hero container mx-auto py-20 pb-10 justify-center">
          Contact Me
        </h1>
      </div>
      <div className="block md:flex items-center justify-center mb-40">
        <div className="m-10">
          <p className="font-serif mb-5 text-2xl font-bold">
            Send me a message here:
          </p>
          <p className="font-serif mb-5 text-2xl font-bold">Contact me via:</p>
          <p className="font-serif mb-5 text-xl">Email: abcdefg@gmail.com</p>
          <p className="font-serif mb-5 text-xl">Phone: +1 xxx-xxx-xxxx</p>
          <p className="font-serif mb-5 text-xl">Fax: +1 xxx=xxx=xxxx</p>
        </div>
        <form className="justify-left m-10" ref={form} onSubmit={sendEmail}>
          <div className="">
            <div className="flex justify-start">
              <input
                className="m-1 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="name"
                value={name}
                onInput={onNameInput}
                name="user_name"
                placeholder="your full name"
              ></input>
              <input
                className="m-1 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="email"
                value={email}
                onInput={onEmailInput}
                name="user_email"
                placeholder="ex:abcd@gmail.com"
              ></input>
            </div>
            <div className="justify-start">
              <textarea
                className="m-1 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="message"
                value={message}
                onInput={onMessageInput}
                rows="6"
                placeholder="Please write your message here."
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                className="mt-5 mr-5 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-red-900 hover:bg-red-800"
                type="button"
                onClick={onClear}
              >
                clear
              </button>
              <Popup
                trigger={
                  <button
                    type="submit"
                    className="mt-5 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                  >
                    Send
                  </button>
                }
                position="bottom center"
                nested
              >
                {message && name && email ? (
                  <span className="text-green-500">message sent.</span>
                ) : (
                  <span className="text-red-500">
                    inputs cannot be empty, please try again.
                  </span>
                )}
              </Popup>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
