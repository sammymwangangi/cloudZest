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
      <SeoHead title="Mobile App Development" />
      <Layout>
        <div className="max-w-screen-xl mt-2 px-8 xl:px-16 mx-auto" id="about">
          <ScrollAnimationWrapper>
            <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
              <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                  Mobile App Development.
                </h1>
                <p className="text-black-500 mt-4 mb-6">
                  Tap into the Mobile Revolution Capture the ever-growing mobile
                  market with our cutting-edge mobile app development services.
                  Our team of experienced developers creates intuitive,
                  feature-rich, and visually appealing mobile applications for
                  iOS and Android platforms. From concept and design to
                  development and deployment, we ensure a seamless and engaging
                  user experience that delights your customers.
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
