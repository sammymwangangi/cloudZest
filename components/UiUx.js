import React from "react";
import Link from "next/link";
import Image from "next/image";
import Ads from "../public/assets/ads.svg";
import UIUX from "../public/assets/uiux.jpeg";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [


  {
    name: 'Visual Design.',
    description:
      "Creating the overall look and feel of the product's interfaces",
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Prototyping.',
    description: 'Building interactive prototypes to demonstrate and test concepts.',
    icon: LockClosedIcon,
  },
  {
    name: 'Information Architecture.',
    description: 'Structuring and organizing content to optimize usability.',
    icon: ServerIcon,
  },
]
export default function UiUx() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg mb-10">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Elevate your digital products with designs that leave a lasting impression.</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">UI/UX Design</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Our UI/UX design services focus on creating intuitive, visually appealing, and user-centric interfaces.
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
              src={UIUX}
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
