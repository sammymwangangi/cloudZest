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
import Mobile from "../../public/assets/software.jpg";

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
        eyebrow="Mobile App Development"
        title="From concept and design to development and deployment."
      >
        <p>
          As a mobile app development company, Cloud Zest offers a comprehensive
          range of services tailored to meet the specific needs of businesses.
          Some of the key services we can offer to businesses related to mobile
          app development include:
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Mobile App Strategy and Consulting">
            Cloud Zest provides mobile app strategy and consulting services to
            help businesses define their mobile app goals, identify target
            audiences, and devise a strategic roadmap. We conduct market
            research, competitor analysis, and feasibility studies to ensure
            that your mobile app aligns with your business objectives and stands
            out in the market.
          </GridListItem>
          <GridListItem title="Native Mobile App Development">
            Cloud Zest specializes in native mobile app development for iOS and
            Android platforms. We have a team of experienced developers
            proficient in Swift, Objective-C, Java, and Kotlin, who can create
            high-performance, feature-rich, and user-friendly native mobile
            apps. Our native app development services ensure optimal
            performance, seamless integration with device capabilities, and
            enhanced user experiences.
          </GridListItem>
          <GridListItem title="Hybrid Mobile App Development">
            Cloud Zest offers hybrid mobile app development using frameworks
            like React Native, Flutter, and Ionic. With hybrid app development,
            we can build cross-platform apps that run on multiple platforms,
            reducing development costs and time to market. Our hybrid app
            development services ensure consistent user experiences across
            different devices while maximizing code reusability.
          </GridListItem>
          <GridListItem title="Mobile App UI/UX Design">
            Cloud Zest specializes in mobile app UI/UX design, creating visually
            appealing and intuitive interfaces. Our UI/UX designers understand
            the importance of a user-friendly design that enhances engagement
            and delivers a seamless experience. We focus on usability,
            simplicity, and brand consistency to create mobile app designs that
            captivate users and drive positive interactions.
          </GridListItem>
          <GridListItem title="Mobile App Backend Development">
            Cloud Zest provides backend development services for mobile apps,
            building robust and scalable server-side architectures. We develop
            APIs, databases, and server components that enable seamless
            communication between the mobile app and the backend systems. Our
            backend development ensures efficient data handling, secure user
            authentication, and smooth app functionality.
          </GridListItem>

          <GridListItem title="Mobile App Testing and Quality Assurance">
            Cloud Zest offers comprehensive mobile app testing and quality
            assurance services to ensure that your app performs flawlessly
            across different devices and operating systems. Our QA experts
            conduct rigorous testing, including functional testing, performance
            testing, compatibility testing, and security testing, to identify
            and resolve any issues before the app is launched.
          </GridListItem>
          <GridListItem title="App Store Deployment and Maintenance">
            Cloud Zest assists businesses in deploying mobile apps to the
            respective app stores (App Store and Google Play Store). We ensure
            that the app meets the guidelines and requirements of each platform.
            Additionally, we provide app maintenance and support services,
            including bug fixing, updates, and performance optimization, to
            ensure that your app remains up-to-date and functions smoothly.
          </GridListItem>
          <GridListItem title="App Analytics and Optimization">
            Cloud Zest helps businesses gain valuable insights into user
            behavior and app performance through app analytics. We integrate
            analytics tools into your mobile app to track user engagement,
            conversions, and other key metrics. With this data, we provide
            optimization recommendations to enhance user experiences, increase
            retention rates, and drive app growth.
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
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
              At Cloud Zest, we understand that every business has unique mobile app requirements, and we tailor our services to meet your specific goals and objectives. Our team of skilled developers, designers, and testers follows agile methodologies to deliver high-quality mobile apps that resonate with your target audience.

              </p>
              <p className="text-2xl mt-4 text-[#F82409]">
              Partner with Cloud Zest for your mobile app development needs, and let us empower your business with innovative, user-friendly, and engaging mobile applications.
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
      <SeoHead title="Mobile App Development" />
      <Layout>
        <div
          className="max-w-screen-xl mt-6 lg:mt-0 px-8 xl:px-16 mx-auto"
          id="about"
        >
          <ScrollAnimationWrapper>
            <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
              <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1 -mt-14 lg:mt-0">
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
        <OurValues />
        <CloudTestimony />
      </Layout>
    </>
  );
}
