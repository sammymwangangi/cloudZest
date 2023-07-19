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
import UIUX from "../../public/assets/uiux.jpeg";

function OurValues() {
  return (
    <div className="relative mt-10 pt-24 sm:mt-32 sm:pt-32 lg:mt-4 lg:pt-20 pb-10">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-[2.5rem] bg-gradient-to-b from-orange-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-orange-200 stroke-orange-950/5 [mask-image:linear-gradient(to_bottom_left,white_30%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Intuitive, visually appealing, and user-centric interfaces"
        title="Elevate your digital products with designs that leave a lasting impression."
      >
        <p>
          As a UI/UX design company, Cloud Zest offers a comprehensive range of
          services tailored to meet the specific needs of businesses. Some of
          the key services we can offer to businesses related to UI/UX design
          include:
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="User Research and Persona Development">
          Cloud Zest conducts thorough user research to gain insights into your target audience. We analyze user behaviors, needs, and motivations to create accurate user personas. By understanding your users, we can design intuitive and user-centric interfaces that cater to their preferences and enhance their overall experience.
          </GridListItem>
          <GridListItem title="User Interface (UI) Design">
          Cloud Zest specializes in creating visually appealing and engaging user interfaces for websites, web applications, and mobile apps. We focus on creating intuitive layouts, selecting suitable typography and color schemes, and designing consistent UI elements that align with your brand identity. Our UI design services aim to provide a seamless and aesthetically pleasing user experience.
          </GridListItem>
          <GridListItem title="User Experience (UX) Design">
          Cloud Zest places a strong emphasis on creating exceptional user experiences. We design user flows, wireframes, and prototypes to ensure that the interaction between users and your digital product is intuitive and efficient. Our UX design services include information architecture, usability testing, and iterative design processes to optimize the overall user experience.
          </GridListItem>
          <GridListItem title="Interactive Prototyping">
          Cloud Zest develops interactive prototypes that allow you to visualize and test your digital product before development. Our prototypes provide a realistic representation of the final user interface, enabling you to gather feedback, validate design concepts, and make informed decisions. By prototyping, we ensure that your UI/UX design meets your expectations and user requirements.
          </GridListItem>
          <GridListItem title="Usability Testing and User Feedback">
          Cloud Zest conducts usability testing to evaluate the effectiveness and efficiency of your digital product. We observe users interacting with the interface, gather feedback, and identify areas for improvement. Through user testing, we refine the UI/UX design, ensuring that it aligns with user expectations, enhances usability, and delivers a positive user experience.
          </GridListItem>
          <GridListItem title="Responsive and Mobile Design">
          Cloud Zest understands the importance of responsive design and optimizing the user experience across various devices and screen sizes. We ensure that your UI/UX design adapts seamlessly to desktops, tablets, and mobile devices. Our responsive and mobile design services focus on providing a consistent and engaging experience regardless of the user's device.
          </GridListItem>
          <GridListItem title="Accessibility Design">
          Cloud Zest is committed to creating inclusive digital experiences. We design with accessibility in mind, ensuring that your digital product is usable by individuals with disabilities. Our accessibility design services comply with WCAG (Web Content Accessibility Guidelines) standards, making your product accessible to a broader audience.
          </GridListItem>
          <GridListItem title="UI/UX Audit and Consulting">
          Cloud Zest provides UI/UX audit and consulting services to evaluate the effectiveness of your existing user interfaces and suggest improvements. We assess your digital product's usability, visual appeal, and overall user experience. Our experts provide actionable recommendations to enhance your UI/UX design and elevate the user experience.
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
              At Cloud Zest, we understand that every business has unique UI/UX design requirements, and we tailor our services to meet your specific goals and objectives. Our team of skilled designers follows industry best practices, user-centered design principles, and the latest trends to deliver high-quality UI/UX design solutions.
              </p>
              <p className="text-2xl mt-4 text-orange-600">
              Partner with Cloud Zest for your UI/UX design needs, and let us empower your business with visually stunning, intuitive, and user-friendly digital experiences.
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
      <SeoHead title="UI/UX Design" />
      <Layout>
        <div
          className="max-w-screen-xl mt-6 lg:mt-0 px-8 xl:px-16 mx-auto pt-16"
          id="about"
        >
          <ScrollAnimationWrapper>
            <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
              <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                  UI/UX Design.
                </h1>
                <p className="text-black-500 mt-4 mb-6">
                  Enhancing User Experiences Great design is at the heart of
                  every successful digital product. Our UI/UX design services
                  focus on creating intuitive, visually appealing, and
                  user-centric interfaces. We conduct in-depth user research,
                  develop wireframes and prototypes, and apply best practices to
                  ensure a seamless and delightful user experience. Let us
                  elevate your digital products with designs that leave a
                  lasting impression.
                </p>
                <ButtonPrimary>Get Quote</ButtonPrimary>
              </div>
              <div className="flex w-full">
                <div className="h-full w-full">
                  <Image
                    src={UIUX}
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
