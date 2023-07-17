import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "../../components/misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../components/Layout/ScrollAnimationWrapper";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout/Layout";
import SeoHead from "../../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="ICT Consultancy & Infrastructure" />
      <Layout>
        <div className="max-w-screen-xl mt-6 lg:mt-0 px-8 xl:px-16 mx-auto" id="about">
          <ScrollAnimationWrapper>
            <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
              <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                  ICT Consultancy & Infrastructure.
                </h1>
                <p className="text-black-500 mt-4 mb-6">
                  Empowering Your Digital Transformation Navigate the complex
                  world of information and communication technology (ICT) with
                  confidence. Our ICT consultancy services provide expert
                  guidance on optimizing your technology infrastructure,
                  aligning IT strategies with business objectives, and
                  implementing best practices for efficiency and security. From
                  network design and implementation to cybersecurity and
                  infrastructure management, we have you covered.
                </p>
                <ButtonPrimary>Get Quote</ButtonPrimary>
              </div>
              <div className="flex w-full">
                <div className="h-full w-full">
                  <Image
                    src="/assets/cloud_computing.jpg"
                    alt="VPN Illustrasi"
                    quality={100}
                    width={612}
                    height={613}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </Layout>
    </>
  );
}
