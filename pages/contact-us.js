import React, { useRef, useState } from "react";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";
import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function ContactUs() {
  
    const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the form from being submitted and page refresh

    emailjs
      .sendForm(
        "service_o77e2fh",
        "template_e27yfwo",
        form.current,
        "uanLdZGnkAacKCHJF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true);
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <SeoHead title="Contact Us" />
      <Layout>
        <div className="relative isolate bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                  <svg
                    className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                        width={200}
                        height={200}
                        x="100%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                      >
                        <path d="M130 200V.5M.5 .5H200" fill="none" />
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      strokeWidth={0}
                      fill="white"
                    />
                    <svg
                      x="100%"
                      y={-1}
                      className="overflow-visible fill-gray-50"
                    >
                      <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                    </svg>
                    <rect
                      width="100%"
                      height="100%"
                      strokeWidth={0}
                      fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Let’s work together
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We can’t wait to hear from you.
                </p>
                <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Address</span>
                      <BuildingOffice2Icon
                        className="h-7 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>Nairobi,Kenya</dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <PhoneIcon
                        className="h-7 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <a
                        className="hover:text-gray-900"
                        href="tel:+254714798820"
                      >
                        +254725626388
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <EnvelopeIcon
                        className="h-7 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <a
                        className="hover:text-gray-900"
                        href="mailto:info@cloudzest.net"
                      >
                        info@cloudzest.net
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            {isEmailSent ? (
              <div className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 rounded-md bg-green-50">
              <div className="flex items-center justify-center">
                <div className="flex-shrink-0">
                  <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">Email Sent Successfully!</h3>
                  <div className="mt-2 text-sm text-green-700">
                    <p>Thank you for contact us. We will reach out shortly.</p>
                  </div>
                </div>
              </div>
            </div>
              
              
            ) : (
              <form
                ref={form}
                onSubmit={sendEmail}
                className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
              >
                <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        First name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="first_name"
                          id="first_name"
                          autoComplete="first_name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Last name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="last_name"
                          id="last-name"
                          autoComplete="last-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Phone number
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="tel"
                          name="phone_number"
                          id="phone-number"
                          autoComplete="tel"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        How can we help you?
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          name="message"
                          id="message"
                          rows={4}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button
                        type="submit" // Change 'button' back to 'submit'
                        className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-[#F82409] text-[#F82409] bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-[#F82409] hover:text-white transition-all hover:shadow-orange"
                    >
                        Send message
                    </button>
                    </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
