import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
  } from '@heroicons/react/20/solid'
  import Software from "../public/assets/software.jpg";
import Image from 'next/image';
  
  const features = [
    {
      name: 'eCommerce Platforms and Online Stores.',
      description: 'We build and customize eCommerce platforms that scale to grow your online business.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Custom Business Web Applications.',
      description: 'We develop secure and scalable web apps optimized for your unique business processes.',
      icon: LockClosedIcon,
    },
    {
      name: 'CMS Implementation and Integration.',
      description: 'We customize and integrate CMS platforms into your tech stack for easy content management.',
      icon: ArrowPathIcon,
    },
    {
      name: 'API and Backend Development.',
      description: 'We build robust APIs and cloud backends to power your apps and enable integration.',
      icon: FingerPrintIcon,
    },
    {
      name: 'Blockchain Integration and Dapps.',
      description: 'We integrate blockchain technology to enable new capabilities like smart contracts and dapps.',
      icon: Cog6ToothIcon,
    },
    {
      name: 'Chatbots and Virtual Assistants.',
      description: 'We create smart chatbots and virtual assistants to automate customer interactions.',
      icon: ServerIcon,
    },
  ]

  export default function WebsiteDevelopment() {
    return (
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Web Development</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">We are your Trusted Partner Web & App Development</p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            At Cloud Zest, we specialize in creating visually stunning, user-friendly, and high-performance websites and web applications.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
              width={2432}
              height={1442}
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                  {feature.name}
                </dt>{' '}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }