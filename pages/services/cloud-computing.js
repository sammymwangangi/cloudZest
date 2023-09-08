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
// import CloudTestimony from "../../components/CloudTestimony";
import clsx from "clsx";
import Head from "next/head";

const features = [
  {
    name: "Cloud Infrastructure Services.",
    description:
      "Cloud Zest provides Infrastructure as a Service (IaaS), which offers businesses virtualized computing resources such as virtual machines, storage, and networks. We help businesses build their own IT infrastructure in the cloud, providing flexibility, scalability, and cost savings without the need for upfront hardware investments.",
  },
  {
    name: "Cloud Application Development and Deployment.",
    description:
      "With our Platform as a Service (PaaS) offerings, Cloud Zest provides a development environment where businesses can build, test, and deploy applications effortlessly. We offer pre-configured development tools, databases, and runtime environments, allowing developers to focus on application development rather than infrastructure management.",
  },
  {
    name: "Software as a Service (SaaS) Solutions.",
    description:
      "Cloud Zest offers a wide range of ready-to-use software applications over the internet through our Software as a Service (SaaS) offerings. Businesses can access applications such as customer relationship management (CRM) systems, project management tools, collaboration suites, and more on a subscription basis. SaaS solutions eliminate the need for installation, maintenance, and upfront software costs.",
  },
  {
    name: "Cloud Migration and Integration.",
    description:
      "Cloud Zest assists businesses in migrating their existing infrastructure, applications, and data to the cloud. Our experts ensure a smooth transition, minimizing disruption to operations. We also provide integration services to connect cloud-based solutions with existing systems, enabling seamless data flow and process synchronization.",
  },
  {
    name: "Cloud Security and Compliance.",
    description:
      "Data security is a top priority at Cloud Zest. We implement robust security measures, including encryption, regular backups, and disaster recovery strategies, to protect sensitive business information. Our team ensures compliance with industry regulations and helps businesses address security concerns in the cloud environment.",
  },
  {
    name: "Cloud Monitoring and Performance Optimization.",
    description:
      "Cloud Zest offers monitoring and optimization services to ensure the optimal performance of cloud infrastructure. We monitor resource utilization, identify bottlenecks, and provide recommendations for optimizing performance and cost-efficiency. Continuous monitoring helps businesses proactively address issues and make informed decisions.",
  },
  {
    name: "Cloud Consulting and Strategy.",
    description:
      "Our team of cloud experts provides consulting and strategic guidance to businesses, helping them develop cloud adoption strategies aligned with their specific goals and requirements. We assess the existing IT infrastructure, analyze business needs, and provide recommendations for leveraging cloud technologies to drive innovation, agility, and cost savings.",
  },
  {
    name: "Cloud Backup and Disaster Recovery.",
    description:
      "Cloud Zest offers backup and disaster recovery services to protect businesses from data loss and ensure business continuity. We employ redundancy and multiple data centers to replicate and back up critical data, minimizing the impact of hardware failures, natural disasters, or other unforeseen events.",
  },
  {
    name: "Cloud Training and Support.",
    description:
      "Cloud Zest provides training and support services to help businesses effectively utilize cloud computing resources. We offer training programs to educate employees on cloud technologies, best practices, and security measures. Our dedicated support team is available to address any technical queries or issues that may arise.",
  },
];

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
              By offering these comprehensive services, Cloud Zest enables businesses to leverage the full potential of cloud computing, empowering them with scalability, cost savings, security, and agility in today's competitive market.
              </p>
              <p className="text-2xl mt-4 text-[#F82409]">
                Partner with Cloud Zest and experience the cloud advantage today.
              </p>
            </blockquote>
          </figure>
        </FadeIn>
      </Container>
    </div>
  );
}

export default function CloudComputing() {
  return (
    <>
      <Head>
        <title>Revolutionize Business with Cloud Computing</title>
        <meta name="description" content="Scale, streamline & grow with Cloud Zest's cloud computing solutions. Expert services for infrastructure, migration, security & more. Request a quote now." />
      </Head>
      <Layout>
        <div
          className="max-w-screen-xl mt-6 lg:mt-0 px-8 xl:px-16 mx-auto"
          id="about"
        >
          <ScrollAnimationWrapper>
            <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
              <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1 -mt-20 lg:mt-0">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                  Cloud Computing.
                </h1>
                <p className="text-black-500 mt-4 mb-6">
                  Revolutionize your business with cloud computing. Access
                  scalable, flexible, and cost-efficient solutions for
                  streamlined operations and accelerated growth. Experience the
                  cloud advantage today.
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
        <div className="bg-red-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Revolutionize Business with Cloud Computing
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                As a cloud computing service provider, Cloud Zest offers a
                comprehensive range of services tailored to meet the specific
                needs of businesses. Some of the key services we can offer to
                businesses related to cloud computing include:
              </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="font-semibold text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-1 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <CloudTestimony/>
      </Layout>
    </>
  );
}
