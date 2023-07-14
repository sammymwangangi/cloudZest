import React, { useMemo } from "react";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SeoHead title="Cloud Computing" />
      <Layout>
        <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <nav className="flex items-center justify-center mb-5" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div>
                <Link href="/" className="text-red-400 hover:text-gray-500">
                  Home
                </Link>
              </div>
            </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <div className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    About
                  </div>
                </div>
              </li>
          </ol>
        </nav>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About CloudZest
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            We empower businesses like yours with cutting-edge solutions for growth, efficiency, and success.
            </p>
          </div>
        </div>
        <section class="relative pt-20 md:pt-28 md:pb-28 overflow-hidden">
  <div class="relative">
    <img class="hidden lg:block absolute top-1/2 right-0 max-w-lg xl:max-w-none xl:h-200 transform -translate-y-1/2" src="saturn-assets/images/applications/group-app-light.png" alt="" />
    <div class="relative container px-4 mx-auto">
      <div class="max-w-xl mx-auto lg:mx-0">
        <div class="max-w-lg mb-2">
          <span class="inline-block py-1 px-3 mb-5 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">&#x1F44B; MEET SATURN UI LIBRARY</span>
          <h1 class="font-heading text-5xl xs:text-6xl md:text-7xl font-bold mb-5">
            <span>Manage your</span>
            <span class="font-serif italic">products</span>
            <span>with saturn</span>
          </h1>
          <p class="text-xl text-gray-500 font-semibold">Nisi eu pellentesque felis volutpat aliquet pulvinar sed. Vitae fames vestibulum urna vel odio mauris urna orci est.</p>
          <img class="block ml-auto -mt-4 -mr-8" src="saturn-assets/images/applications/arrow-left.png" alt="" />
        </div>
        <div class="sm:flex items-center mb-8">
          <input class="w-full mb-3 sm:mb-0 sm:mr-4 py-4 px-6 text-gray-500 placeholder-gray-400 border border-gray-200 rounded-full focus:border-purple-500 focus:outline-purple" type="email" placeholder="Enter email address" />
          <button class="relative group sm:flex-shrink-0 inline-block w-full sm:w-auto py-4 px-6 text-center text-orange-50 bg-orange-900 font-semibold rounded-full overflow-hidden" type="submit">
            <div class="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
            <span class="relative">Start 14-days trial</span>
          </button>
        </div>
        <div class="flex flex-wrap items-center -mx-4">
          <div class="w-full md:w-1/3 px-4 mb-6 md:mb-0">
            <div class="flex items-center">
              <img src="saturn-assets/images/applications/avatar-photo1.png" alt="" />
              <img class="-ml-3" src="saturn-assets/images/applications/avatar-photo2.png" alt="" />
              <img class="-ml-3" src="saturn-assets/images/applications/avatar-photo3.png" alt="" />
            </div>
          </div>
          <div class="w-full md:w-1/3 px-4 mb-6 md:mb-0">
            <div>
              <span class="block text-2xl font-bold text-gray-900">500+</span>
              <span class="text-sm text-gray-400">Happy Customers</span>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-4">
            <div>
              <span class="block text-2xl font-bold text-gray-900">5.0/5</span>
              <div class="flex items-center">
                <div class="flex items-center mr-2">
                  <img class="mr-1" src="saturn-assets/images/applications/star.svg" alt="" />
                  <img class="mr-1" src="saturn-assets/images/applications/star.svg" alt="" />
                  <img class="mr-1" src="saturn-assets/images/applications/star.svg" alt="" />
                  <img class="mr-1" src="saturn-assets/images/applications/star.svg" alt="" />
                  <img src="saturn-assets/images/applications/star.svg" alt="" />
                </div>
                <span class="text-sm text-gray-400">Review</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img class="block w-full pl-8 mt-20 ml-auto lg:hidden" src="saturn-assets/images/applications/app-full-image.png" alt="" />
  </div>
</section>
      </Layout>
    </>
  );
}
