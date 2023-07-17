import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import ButtonOutline from "../misc/ButtonOutline.";
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
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

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
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];
const company = [
  { name: "About us", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Support", href: "#" },
  { name: "Press", href: "#" },
  { name: "Blog", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={
        "fixed top-0 w-full z-30 bg-[#fff] transition-all " +
        (scrollActive ? " shadow-md pt-0" : " pt-4")
      }
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="text-3xl font-medium text-orange-600">
            CloudZest
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-4">
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
                <div className="w-screen max-w-md flex-auto overflow-hidden bg-white rounded-3xl text-sm leading-6 shadow-lg">
                  <div className="p-2">
                    {solutions.map((item) => (
                      <Link
                        href={item.href}
                        key={item.name}
                        className="group relative flex gap-x-4 items-center rounded-lg px-1 py-1 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <div className="group font-semibold text-gray-900">
                            {item.name}
                          </div>
                        </div>
                      </Link>
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
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg">
                  <div className="p-2">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex gap-x-4 items-center rounded-lg px-1 py-1 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-orange-600"
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
            Case Studies
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
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ButtonOutline>Get Quote</ButtonOutline>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between mt-5">
            <Link href="/" className="text-3xl font-medium text-orange-600">
              CloudZest
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...solutions, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Products
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {products.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/case-studies"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Case Studies
                </Link>
                <Link
                  href="/contact-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>
              <div className="py-6">
                <ButtonOutline>Get Quote</ButtonOutline>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
