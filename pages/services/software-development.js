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
import imageWhiteboard from "../../public/assets/software.jpg";

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
        eyebrow="Software Development"
        title="We have the expertise to bring your vision to life"
      >
        <p>
          As a software development company, Cloud Zest offers a wide range of
          services tailored to meet the specific needs of businesses. Some of
          the key services we can offer to businesses related to software
          development include:
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Custom Software Development">
          Cloud Zest specializes in developing customized software solutions tailored to meet your unique business requirements. Our experienced team of developers works closely with you to understand your objectives and design software applications that address your specific challenges. We follow industry best practices and use cutting-edge technologies to deliver scalable, robust, and user-friendly software solutions.
          </GridListItem>
          <GridListItem title="Web Application Development">
          Cloud Zest offers web application development services to help businesses establish a strong online presence and streamline their operations. We develop intuitive and responsive web applications using the latest web technologies and frameworks. Our expertise includes front-end and back-end development, database integration, and third-party API integration to create secure and high-performing web applications.
          </GridListItem>
          <GridListItem title="Mobile App Development">
          Cloud Zest specializes in mobile app development for iOS and Android platforms. We create native and hybrid mobile applications that provide seamless user experiences, leveraging the capabilities of mobile devices. Our mobile app development services cover the entire development lifecycle, including ideation, design, development, testing, and deployment, ensuring your app meets the highest standards of quality and performance.
          </GridListItem>
          <GridListItem title="Software Integration and API Development">
          Cloud Zest offers software integration services to seamlessly connect different software systems within your organization. We specialize in developing custom APIs (Application Programming Interfaces) to facilitate data exchange and integration between disparate applications. Our expertise in software integration ensures efficient workflows, streamlined processes, and enhanced data flow across your organization.
          </GridListItem>
          <GridListItem title="Software Testing and Quality Assurance">
          Cloud Zest provides comprehensive software testing and quality assurance services to ensure the reliability and functionality of your software applications. We employ a range of testing methodologies, including manual and automated testing, to identify bugs, validate functionality, and improve the overall user experience. Our QA experts conduct thorough testing to deliver high-quality, bug-free software solutions.
          </GridListItem>

          <GridListItem title="Maintenance and Support">
          Cloud Zest offers software maintenance and support services to ensure the ongoing performance and reliability of your software applications. We provide timely updates, bug fixes, and enhancements to keep your software up to date. Our dedicated support team is available to address any technical issues, provide guidance, and offer ongoing assistance to ensure smooth operations.
          </GridListItem>
          <GridListItem title="Software Consulting and Strategy">
          Cloud Zest provides software consulting and strategic guidance to help businesses make informed decisions about their software development initiatives. We assess your business goals, analyze your existing technology stack, and recommend the most suitable software solutions. Our experts stay up to date with the latest industry trends and technologies to help you make strategic choices for long-term success.
          </GridListItem>
          <GridListItem title="UI/UX Design">
          Cloud Zest offers user interface (UI) and user experience (UX) design services to create visually appealing and intuitive software interfaces. We focus on understanding your target users, their needs, and behaviors to design interfaces that enhance usability and drive engagement. Our UI/UX designers work closely with our development team to ensure seamless integration of design elements into the final software product.
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
              At Cloud Zest, we understand that every business has unique software requirements, and we tailor our services to meet your specific goals and objectives. Our team of skilled developers, testers, and designers follows agile methodologies to deliver high-quality software solutions that align with your business needs.
              </p>
              <p className="text-2xl mt-4 text-[#F82409]">
              Partner with Cloud Zest for your software development needs, and let us empower your business with customized, scalable, and innovative software solutions.
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
      <SeoHead title="Software Development" />
      <Layout>
        <div
          className="max-w-screen-xl mt-6 lg:mt-0 px-8 xl:px-16 mx-auto pt-16"
          id="about"
        >
          <ScrollAnimationWrapper>
            <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
              <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1 -mt-20 lg:mt-0">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                  Software Development.
                </h1>
                <p className="text-black-500 mt-4 mb-6">
                  Tailored Solutions for Your Unique Needs Unlock your
                  business's potential with custom software solutions designed
                  specifically for your unique requirements. Our expert software
                  development team delivers scalable, secure, and user-friendly
                  applications that streamline processes, enhance productivity,
                  and drive innovation. Whether it's web-based, mobile, or
                  enterprise software, we have the expertise to bring your
                  vision to life.
                </p>
                <ButtonPrimary>Get Quote</ButtonPrimary>
              </div>
              <div className="flex w-full">
                <div className="h-full w-full">
                  <Image
                    src={imageWhiteboard}
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
