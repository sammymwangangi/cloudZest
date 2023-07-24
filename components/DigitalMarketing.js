import React from "react";
import Link from "next/link";
import Image from "next/image";
import Ads from "../public/assets/ads.svg";
import DigitalMarket from "../public/assets/digital-marketing.svg";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'


const features = [


  {
    name: 'Search Engine Optimization (SEO).',
    description:
      "We specializes in implementing effective SEO strategies to improve your website's visibility in search engine results.",
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Pay-Per-Click Advertising (PPC).',
    description: 'Cloud Zest can manage your PPC campaigns to drive targeted traffic to your website.',
    icon: LockClosedIcon,
  },
  {
    name: 'Social Media Marketing.',
    description: 'Cloud Zest helps businesses establish a strong presence on social media platforms.',
    icon: ServerIcon,
  },
]

export default function DigitalMarketing() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg mb-10">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Achieve your marketing goals</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Digital Marketing</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Accelerate Your Online Presence Stand out in the digital landscape with our comprehensive digital marketing solutions.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <Link
            href="/services/ui-ux-design"
            className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white transition-all hover:shadow-orange"
          >
            Learn more
          </Link>
          </div>
          <div className="flex items-start justify-center lg:justify-end lg:order-first">
            <Image
              src={DigitalMarket}
              alt="Product screenshot"
              className="w-[30rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
