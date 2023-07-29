import React, { useMemo } from "react";

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import ButtonPrimary from "./misc/ButtonPrimary";
import Link from "next/link";
import Image from "next/image";
import Cloud from "../public/assets/cc.jpg";
import Pattern1 from "../public/assets/pattern1.png";


const Computing = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-4 sm:py-20 lg:overflow-visible lg:px-0">
      
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
        {/* <img src="assets/pattern1.png" alt="pattern" className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[108rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true" /> */}
      </div>
      <div className="absolute inset-0 text-4xl font-bold leading-8 text-gray-900 sm:text-4xl text-center py-4">Our Core Services</div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 items-center">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 mt-20">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-0 lg:mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Cloud Computing Services
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Revolutionize your business with cloud computing. Access
                scalable, flexible, and cost-efficient solutions for streamlined
                operations and accelerated growth. Experience the cloud
                advantage today.
              </p>
            </div>
            <div className="lg:pr-4 pt-6 lg:pt-12">
              <Link
              href="/services/cloud-computing"
              className="font-medium tracking-wide py-2 px-5 sm:px-8 cursor-pointer border border-[#F82409] text-[#F82409] bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-[#F82409] hover:text-white transition-all hover:shadow-orange"
            >
              Learn more
            </Link>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-0 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[30rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={Cloud}
            alt="cc"
          />
        </div>
      </div>
    </div>
  );
};

export default Computing;
