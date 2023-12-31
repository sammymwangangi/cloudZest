import React, { useMemo } from "react";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import AboutUs from "../components/About";
import Values from "../components/Values";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Empowering Business Growth with Tech Solutions</title>
        <meta name="description" content="Unlock growth, efficiency & success with Cloud Zest. Your trusted tech partner for innovative solutions. Request a quote for your business needs." />
      </Head>
      <Layout>
        <div className="bg-white px-6 pt-10 sm:pt-32 lg:px-8">
          <nav
            className="flex items-center justify-center mb-5 mt-6 lg:mt-0"
            aria-label="Breadcrumb"
          >
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
                  <div className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                    About
                  </div>
                </div>
              </li>
            </ol>
          </nav>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Empowering Business Growth with Tech Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We empower businesses like yours with cutting-edge solutions for
              growth, efficiency, and success.
            </p>
          </div>
        </div>
        <AboutUs/>
        <Values/>
      </Layout>
    </>
  );
}
