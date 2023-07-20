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
import Expert from "../../public/assets/Illustration2.png";

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
        eyebrow="Navigate the complex world of ICT with confidence"
        title="Expert guidance on optimizing your technology infrastructure"
      >
        <p>
        As an ICT consultancy and infrastructure provider, Cloud Zest offers a comprehensive range of services tailored to meet the specific needs of businesses. Some of the key services we can offer to businesses related to ICT consultancy and infrastructure include:
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="ICT Consultancy">
            Cloud Zest provides expert ICT consultancy services to help businesses leverage technology effectively. We assess your business goals and requirements, conduct a thorough analysis of your existing IT infrastructure, and provide strategic recommendations to optimize your technology stack. Our consultancy services cover areas such as IT strategy, infrastructure planning, system integration, and technology roadmap development.
          </GridListItem>
          <GridListItem title="Network Infrastructure Design and Implementation">
          Cloud Zest specializes in designing and implementing robust network infrastructures to ensure optimal connectivity and performance. We assess your business requirements, design scalable and secure network architectures, and deploy the necessary hardware and software components. Our services include network planning, configuration, installation, and ongoing management to support your business operations.
          </GridListItem>
          <GridListItem title="Cloud Infrastructure Services">
          Cloud Zest offers cloud infrastructure services, providing businesses with the scalability, flexibility, and cost-efficiency of cloud computing. We help you migrate your infrastructure to the cloud, design and implement cloud-based solutions, and ensure seamless integration with existing systems. Our expertise covers Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS) solutions.
          </GridListItem>
          <GridListItem title="Virtualization Solutions">
          Cloud Zest provides virtualization services to optimize your IT infrastructure and enhance resource utilization. We implement virtualization technologies such as server virtualization, desktop virtualization, and storage virtualization to improve efficiency, reduce hardware costs, and simplify IT management. Our virtualization solutions enable businesses to maximize their computing resources and streamline operations.
          </GridListItem>
          <GridListItem title="IT Security and Compliance">
          Cloud Zest prioritizes the security and compliance of your IT infrastructure. We conduct comprehensive security assessments, identify vulnerabilities, and implement robust security measures to protect your data and systems. Our services include firewall setup, intrusion detection and prevention, data encryption, access control, and security audits. We also ensure compliance with industry regulations and standards.
          </GridListItem>

          <GridListItem title="Disaster Recovery and Business Continuity">
          Cloud Zest helps businesses develop and implement disaster recovery and business continuity strategies to safeguard critical data and ensure uninterrupted operations. We design and implement backup solutions, replication mechanisms, and recovery plans tailored to your business needs. Our services minimize downtime, protect against data loss, and enable swift recovery in the event of a disaster.
          </GridListItem>
          <GridListItem title="ICT Project Management">
          Cloud Zest offers professional project management services to ensure the successful implementation of ICT projects. We define project goals, create detailed project plans, manage resources, monitor progress, and mitigate risks throughout the project lifecycle. Our experienced project managers ensure that projects are delivered on time, within budget, and aligned with your business objectives.
          </GridListItem>
          <GridListItem title="IT Support and Maintenance">
          Cloud Zest provides comprehensive IT support and maintenance services to keep your infrastructure running smoothly. We offer proactive monitoring, troubleshooting, and resolution of IT issues, ensuring minimal downtime and optimal system performance. Our dedicated support team is available to address technical queries, provide guidance, and offer ongoing maintenance for your ICT environment.
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
              At Cloud Zest, we understand that every business has unique requirements, and we tailor our ICT consultancy and infrastructure services to meet your specific goals. Our experienced team of professionals stays abreast of the latest technologies and best practices to deliver exceptional solutions and support.
              </p>
              <p className="text-2xl mt-4 text-orange-600">
              Partner with Cloud Zest to leverage the expertise of our ICT consultancy and infrastructure services, enabling your business to thrive in the digital era.
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
      <SeoHead title="ICT Consultancy & Infrastructure" />
      <Layout>
        <div className="max-w-screen-xl mt-6 lg:mt-0 px-8 xl:px-16 mx-auto pt-16" id="about">
          <ScrollAnimationWrapper>
            <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
              <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1 -mt-20 lg:mt-0">
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
                    src={Expert}
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
