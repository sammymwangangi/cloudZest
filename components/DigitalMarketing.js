import React from "react";
import Link from "next/link";
import Image from "next/image";
import Ads from "../public/assets/ads.svg";
import DigitalMarket from "../public/assets/digital-marketing.svg";


export default function DigitalMarketing() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <Link
            href="/services/digital-marketing"
            className="text-base font-semibold leading-7 text-indigo-600"
          >
            Digital Marketing
          </Link>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Achieve your marketing goals
          </p>
          <p className="mt-6 mb-6 text-lg leading-8 text-gray-600">
            Accelerate Your Online Presence Stand out in the digital landscape
            with our comprehensive digital marketing solutions.
          </p>
          <Link
            href="/services/digital-marketing"
            className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white transition-all hover:shadow-orange"
          >
            Learn more
          </Link>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src={DigitalMarket}
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
