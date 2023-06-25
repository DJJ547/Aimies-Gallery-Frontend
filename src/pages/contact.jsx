import React from "react";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <div className="overflow-y-scroll">
      <div className="flex items-center justify-center">
        <h1 className="font-serif text-7xl font-bold max-w-fit max-h-fit hero container mx-auto py-20 pb-10 justify-center">
          Contact Me
        </h1>
      </div>
      <div className="flex items-center justify-center mb-40">
        <div className="justify-start mr-10">
          <p className="font-serif mb-5 text-2xl font-bold">
            Send me a message here:
          </p>
          <p className="font-serif mb-5 text-2xl font-bold">Contact me via:</p>
          <p className="font-serif mb-5 text-xl">Email: abcdefg@gmail.com</p>
          <p className="font-serif mb-5 text-xl">Phone: +1 xxx-xxx-xxxx</p>
          <p className="font-serif mb-5 text-xl">Fax: +1 xxx=xxx=xxxx</p>
        </div>
        <div className="justify-left m-10">
          <div className="">
            <div className="flex justify-start">
              <input
                className="m-1 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="name"
                placeholder="your name"
              ></input>
              <input
                className="m-1 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="email"
                placeholder="your e-mail"
              ></input>
            </div>
            <div className="justify-start">
              <textarea
                className="m-1 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                rows="6"
                placeholder="Please write your message here."
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="mt-5 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
