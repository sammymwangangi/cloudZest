import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";
import LogoVPN from "../../public/assets/Logo.svg";
import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  CodeBracketSquareIcon,
  EyeDropperIcon,
  ServerStackIcon,
  PresentationChartLineIcon,
  GlobeAltIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const solutions = [
  {
    name: "Cloud Computing",
    description: "Get a better understanding of your traffic",
    href: "/services/cloud-computing",
    icon: CloudIcon,
  },
  {
    name: "Digital Marketing",
    description: "Speak directly to your customers",
    href: "/services/digital-marketing",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "ICT Consultancy & Infrastructure",
    description: "Your customers' data will be safe and secure",
    href: "/services/ict-consultancy-and-infrastructure",
    icon: FingerPrintIcon,
  },
  {
    name: "Software Development",
    description: "Connect with third-party tools",
    href: "/services/software-development",
    icon: SquaresPlusIcon,
  },
  {
    name: "Mobile App Development",
    description: "Build strategic funnels that will convert",
    href: "/services/mobile-app-development",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Websites & Web App Development",
    description: "Build strategic funnels that will convert",
    href: "/services/websites-and-web-app-development",
    icon: CodeBracketSquareIcon,
  },
  {
    name: "UI/UX Design",
    description: "Build strategic funnels that will convert",
    href: "/services/ui-ux-design",
    icon: EyeDropperIcon,
  },
  {
    name: "Network",
    description: "Build strategic funnels that will convert",
    href: "/services/network-services",
    icon: ServerStackIcon,
  },
  {
    name: "Data Analysis",
    description: "Build strategic funnels that will convert",
    href: "/services/data-analysis",
    icon: ChartPieIcon,
  },
];
const products = [
  {
    name: "Domain Name & Hosting",
    description: "Get a better understanding of your traffic",
    href: "/services/domain-name-and-hosting",
    icon: GlobeAltIcon,
  },
  {
    name: "ICT Equipment Supplies",
    description: "Speak directly to your customers",
    href: "/services/ict-equipment-supplies",
    icon: WrenchScrewdriverIcon,
  },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Link href="/" className="text-3xl font-medium text-red-600">CloudZest</Link>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            <Link
              href="/about"
              className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative"
            >
              About
            </Link>
            <Popover className="relative">
              <Popover.Button
                className={
                  "px-4 py-2 mx-2 inline-flex items-center gap-x-1 animation-hover relative focus:outline-none" +
                  (activeLink === "pricing"
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500 ")
                }
              >
                <span>Services & Solutions</span>
                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                  <div className="w-screen max-w-md flex-auto overflow-hidden bg-white-500 rounded-3xl text-sm leading-6 shadow-lg">
                    <div className="p-4">
                      {solutions.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex gap-x-4 items-center rounded-lg px-1 hover:bg-gray-50"
                        >
                          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <Link
                              href={item.href}
                              className="font-semibold text-gray-900"
                            >
                              {item.name}
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <Popover className="relative">
              <Popover.Button
                className={
                  "px-4 py-2 mx-2 inline-flex items-center gap-x-1 animation-hover relative focus:outline-none" +
                  (activeLink === "pricing"
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500 ")
                }
              >
                <span>Products</span>
                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                  <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white-500 text-sm leading-6 shadow-lg">
                    <div className="p-4">
                      {products.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex gap-x-4 items-center rounded-lg px-1 hover:bg-gray-50"
                        >
                          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <a
                              href={item.href}
                              className="font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <LinkScroll
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("pricing");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "pricing"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              Blog
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimoni"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              Contact Us
            </LinkScroll>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <ButtonOutline>Get Quote</ButtonOutline>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "about"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              About
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "feature"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Feature
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("pricing");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "pricing"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Pricing
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "testimoni"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Testimonial
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
