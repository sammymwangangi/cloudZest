import React from "react";
import Link from "next/link";
import Image from "next/image";
import Ads from "../public/assets/ads.svg";
import Expert from "../public/assets/expert.jpg";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "ICT Equipment Sales.",
    description:
      "Cloud Zest provides a wide range of ICT equipment for businesses, including computers, laptops, servers, networking devices, storage solutions, and peripherals.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "ICT Equipment Installation and Configuration.",
    description:
      "Our team of experts ensures that the equipment is set up correctly, connected to the network, and configured to meet your specific requirements.",
    icon: LockClosedIcon,
  },
  {
    name: "ICT Equipment Maintenance and Support.",
    description:
      "We offer proactive monitoring, regular maintenance, and troubleshooting to ensure that your equipment operates at peak performance.",
    icon: ServerIcon,
  },
];

export default function Ict() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-orange-600">
                ICT Consultancy and Infrastructure
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Expert guidance on optimizing your technology infrastructure
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We Empower Your Digital Transformation Navigate the complex
                world of information and communication technology (ICT) with
                confidence.
              </p>
              <dl className="my-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-orange-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <Link
                href="/services/ict-consultancy-and-infrastructure"
                className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white transition-all hover:shadow-orange"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <Image
                  src={Expert}
                  alt="Product screenshot"
                  width={912}
                  height={541}
                  className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                />
              </div>
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
