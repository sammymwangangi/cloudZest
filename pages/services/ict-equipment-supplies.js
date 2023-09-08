import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "../../components/misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../components/Layout/ScrollAnimationWrapper";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout/Layout";
import SeoHead from "../../components/SeoHead";
import { GridList, GridListItem } from "../../components/GridList";
import { GridPattern } from "../../components/GridPattern";
import { SectionIntro } from "../../components/SectionIntro";
import { Container } from "../../components/Container";
import { FadeIn } from "../../components/FadeIn";
import clsx from "clsx";
import Head from "next/head";

function OurValues() {
  return (
    <div className="relative mt-10 pt-24 sm:mt-32 sm:pt-32 lg:mt-4 lg:pt-20 pb-10">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-[2.5rem] bg-gradient-to-b from-red-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-red-200 stroke-red-950/5 [mask-image:linear-gradient(to_bottom_left,white_30%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Reliable and innovative solutions."
        title="High-quality ICT equipment supplies"
      >
        <p>
        As an ICT equipment supplier, Cloud Zest offers a comprehensive range of services tailored to meet the specific needs of businesses. Some of the key services we can offer include:
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="ICT Equipment Sales">
          Cloud Zest provides a wide range of ICT equipment for businesses, including computers, laptops, servers, networking devices, storage solutions, and peripherals. We offer high-quality and reliable ICT equipment from trusted brands, ensuring that businesses have access to the latest technology to support their operations.
          </GridListItem>
          <GridListItem title="ICT Equipment Installation and Configuration">
          Cloud Zest offers professional installation and configuration services for ICT equipment. Our team of experts ensures that the equipment is set up correctly, connected to the network, and configured to meet your specific requirements. We ensure that your ICT equipment is ready for seamless operation and optimal performance.
          </GridListItem>
          <GridListItem title="ICT Equipment Upgrades and Expansion">
          Cloud Zest assists businesses in upgrading their existing ICT equipment or expanding their ICT infrastructure to accommodate growth. We assess your current equipment, identify areas for improvement or expansion, and recommend suitable upgrades or additional equipment. Our services ensure that your ICT infrastructure remains up to date and supports your evolving needs.
          </GridListItem>
          <GridListItem title="ICT Equipment Leasing and Financing">
          Cloud Zest offers leasing and financing options for businesses looking to acquire ICT equipment. We provide flexible payment plans and leasing arrangements to make the procurement process more affordable and manageable. Our leasing and financing services enable businesses to access the necessary ICT equipment without straining their budgets.
          </GridListItem>
          <GridListItem title="ICT Equipment Maintenance and Support">
          Cloud Zest provides ongoing maintenance and support services for ICT equipment. We offer proactive monitoring, regular maintenance, and troubleshooting to ensure that your equipment operates at peak performance. Our support team is available to address any technical issues and provide timely assistance, minimizing downtime and maximizing productivity.

          </GridListItem>
          <GridListItem title="ICT Equipment Consultancy">
          Cloud Zest offers ICT equipment consultancy services to help businesses make informed decisions about their equipment needs. We assess your requirements, recommend suitable equipment based on your budget and objectives, and provide guidance on technology trends and best practices. Our consultancy services ensure that you invest in the right ICT equipment to meet your business goals.

          </GridListItem>
          <GridListItem title="ICT Equipment Disposal and Recycling">
          Cloud Zest assists businesses in responsible disposal and recycling of outdated or retired ICT equipment. We ensure that the equipment is properly decommissioned, data is securely erased, and components are recycled or disposed of in an environmentally friendly manner. Our disposal and recycling services adhere to regulatory requirements and help businesses maintain their sustainability goals.  
          </GridListItem>
          <GridListItem title="ICT Equipment Procurement and Logistics">
          Cloud Zest handles the procurement and logistics of ICT equipment, ensuring a streamlined and efficient process. We source equipment from trusted suppliers, manage procurement processes, handle shipping and logistics, and ensure on-time delivery. Our services eliminate the complexities of equipment procurement, allowing businesses to focus on their core operations.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

function CloudTestimony({ className }) {
  return (
    <div
      className={clsx(
        "relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32",
        className
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-red-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                
At Cloud Zest, we understand the importance of reliable and efficient ICT equipment for businesses. We tailor our services to meet your specific requirements, providing high-quality equipment, expert installation, ongoing support, and sustainable solutions.
              </p>
              <p className="text-2xl mt-4 text-[#F82409]">
              Partner with Cloud Zest for your ICT equipment supply needs, and let us provide you with top-notch equipment, reliable support, and seamless procurement processes, enabling your business to thrive with the right ICT infrastructure.
              </p>
            </blockquote>
          </figure>
        </FadeIn>
      </Container>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Get Reliable and High-Quality ICT Equipment Supplies</title>
        <meta name="description" content="Cloud Zest offers a comprehensive range of ICT equipment supplies including computers, laptops, servers, and networking devices. Partner with us for reliable solutions." />
      </Head>
      <Layout>
        <div
          className="max-w-screen-xl mt-6 lg:mt-0 px-8 xl:px-16 mx-auto"
          id="about"
        >
          <ScrollAnimationWrapper>
            <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
              <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1 -mt-6 lg:mt-0">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                Get Reliable and High-Quality ICT Equipment Supplies
                </h1>
                <p className="text-black-500 mt-4 mb-6">
                  Powering Your Technology Infrastructure At Cloud Zest, we
                  offer a wide range of high-quality ICT equipment supplies to
                  meet your business's technology needs. From computers,
                  laptops, and servers to networking devices and peripherals, we
                  provide reliable and innovative solutions from trusted brands.
                  We ensure that you have the right equipment to drive your
                  operations forward.
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
        <OurValues />
        <CloudTestimony />
      </Layout>
    </>
  );
}
