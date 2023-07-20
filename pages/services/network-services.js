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
        eyebrow="Secure and Reliable Infrastructures"
        title="We deliver scalable and reliable networks"
      >
        <p>
          As a network services provider, Cloud Zest offers a comprehensive
          range of services tailored to meet the specific needs of businesses.
          Some of the key services we can offer to businesses related to
          networks include:
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Network Design and Architecture">
          Cloud Zest specializes in designing scalable and secure network architectures tailored to your business requirements. We assess your network needs, plan and design network infrastructures, and create detailed network diagrams. Our network design services ensure optimal performance, reliability, and efficient data flow within your organization.
          </GridListItem>
          <GridListItem title="Network Installation and Configuration">
          Cloud Zest provides professional network installation and configuration services to set up your network infrastructure. We deploy network hardware, including switches, routers, firewalls, and access points, and configure them based on industry best practices and your specific needs. Our experts ensure a seamless installation process and optimal network performance.
          </GridListItem>
          <GridListItem title="Network Security">
          Cloud Zest prioritizes network security to protect your valuable data and infrastructure from unauthorized access and cyber threats. We implement robust security measures, including firewalls, intrusion detection systems, virtual private networks (VPNs), and encryption protocols. Our network security services safeguard your network against potential breaches and ensure compliance with industry regulations.
          </GridListItem>
          <GridListItem title="Network Monitoring and Management">
          Cloud Zest offers proactive network monitoring and management services to ensure the optimal performance and availability of your network. We employ advanced monitoring tools and techniques to detect and address network issues promptly. Our network management services include performance optimization, configuration management, and regular maintenance to keep your network running smoothly.
          </GridListItem>
          <GridListItem title="Network Troubleshooting and Support">
          Cloud Zest provides network troubleshooting and support services to address any network issues that may arise. Our experienced technicians perform comprehensive diagnostics, identify the root cause of network problems, and implement effective solutions. We offer timely support and guidance to resolve network-related issues and minimize downtime.
          </GridListItem>
          <GridListItem title="Network Upgrades and Expansion">
          Cloud Zest assists businesses in upgrading and expanding their existing network infrastructure to accommodate growing needs. We assess your network capacity, recommend necessary upgrades, and execute seamless expansion plans. Our services ensure that your network remains scalable, efficient, and able to support your evolving business requirements.
          </GridListItem>
          <GridListItem title="Network Virtualization">
          Cloud Zest specializes in network virtualization, leveraging technologies such as software-defined networking (SDN) and network function virtualization (NFV). We help businesses reduce hardware costs, enhance network flexibility, and improve resource utilization through virtualized network infrastructures. Our network virtualization services enable efficient management and control of network resources.
          </GridListItem>
          <GridListItem title="Network Consultancy and Planning">
          Cloud Zest offers network consultancy and planning services to help businesses develop comprehensive network strategies aligned with their goals. We assess your existing network, conduct feasibility studies, and provide expert recommendations for network enhancements and optimization. Our network consultants help you make informed decisions to support your business objectives.
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
              At Cloud Zest, we understand that every business has unique network requirements, and we tailor our services to meet your specific goals and objectives. Our team of skilled network engineers stays up to date with the latest networking technologies and best practices to deliver high-quality network solutions.
              </p>
              <p className="text-2xl mt-4 text-orange-600">
              Partner with Cloud Zest for your network-related needs, and let us empower your business with reliable, secure, and high-performing network infrastructure.
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
      <SeoHead title="Network Services" />
      <Layout>
        <div
          className="max-w-screen-xl mt-6 lg:mt-0 px-8 xl:px-16 mx-auto"
          id="about"
        >
          <ScrollAnimationWrapper>
            <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
              <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1 -mt-8 lg:mt-0">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                  Network Services.
                </h1>
                <p className="text-black-500 mt-4 mb-6">
                  Building Secure and Reliable Infrastructures Ensure seamless
                  connectivity, robust security, and optimal performance with
                  our comprehensive network services. From network design and
                  implementation to monitoring, maintenance, and
                  troubleshooting, we provide end-to-end solutions to keep your
                  network infrastructure running smoothly. Trust us to deliver
                  scalable and reliable networks that support your business
                  operations.
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
