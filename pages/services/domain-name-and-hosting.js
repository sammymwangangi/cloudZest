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
import Cloud from "../../public/assets/cc.jpg";

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
        eyebrow="Secure the perfect domain name for your business."
        title="Digital Identity Starts Here."
      >
        <p>
        As a domain name and hosting provider, Cloud Zest offers a comprehensive range of services tailored to meet the specific needs of businesses. Some of the key services we can offer include:
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Domain Name Registration">
          Cloud Zest assists businesses in registering domain names for their online presence. We help you search for available domain names, choose the most suitable options, and complete the registration process. Our domain registration services ensure that your business has a unique and memorable online identity.

          </GridListItem>
          <GridListItem title="Domain Transfer and Management">
          Cloud Zest facilitates the transfer of existing domain names to our platform, ensuring a smooth transition and uninterrupted online presence. We also provide domain management services, including DNS management, domain renewal, and domain privacy protection. Our domain management services ensure the secure and hassle-free management of your domain portfolio.
          </GridListItem>
          <GridListItem title="Web Hosting Services">
          Cloud Zest offers reliable and high-performance web hosting services to ensure your website is accessible to visitors at all times. We provide a range of hosting options, including shared hosting, virtual private servers (VPS), and dedicated servers, tailored to your business requirements. Our hosting services include secure data storage, regular backups, and robust server infrastructure.
          </GridListItem>
          <GridListItem title="Email Hosting">
          Cloud Zest provides email hosting services to enable businesses to have professional email addresses associated with their domain names. We offer secure email hosting solutions with features such as spam filtering, virus protection, and email forwarding. Our email hosting services ensure efficient and reliable communication channels for your business.
          </GridListItem>
          <GridListItem title="Cloud Hosting">
          Cloud Zest specializes in cloud hosting services, offering the scalability, flexibility, and cost-efficiency of cloud computing. We provide infrastructure-as-a-service (IaaS) solutions that allow businesses to host their websites, applications, and databases in the cloud. Our cloud hosting services ensure high availability, scalability, and security for your digital assets.
          </GridListItem>
          <GridListItem title="Managed Hosting">
          Cloud Zest offers managed hosting services, where our team takes care of the technical aspects of your hosting environment. We handle server setup, configuration, optimization, and ongoing maintenance, allowing you to focus on your core business activities. Our managed hosting services provide peace of mind and ensure the smooth operation of your online platforms.
          </GridListItem>
          <GridListItem title="SSL Certificates">
          Cloud Zest assists businesses in securing their websites with SSL certificates. We provide and install SSL certificates, enabling secure communication between your website and its visitors. Our SSL certificate services help build trust, protect sensitive data, and improve search engine rankings.
          </GridListItem>
          <GridListItem title="Technical Support">
          Cloud Zest offers dedicated technical support to address any hosting-related issues or inquiries. Our support team is available to provide assistance, troubleshoot problems, and offer guidance on domain name and hosting matters. We ensure timely and reliable support to keep your online presence up and running smoothly.
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
              At Cloud Zest, we understand the importance of a reliable and secure online presence for businesses. We tailor our domain name and hosting services to meet your specific requirements, ensuring seamless performance, security, and support.
              </p>
              <p className="text-2xl mt-4 text-[#F82409]">
              Partner with Cloud Zest for your domain name and hosting needs, and let us provide you with a robust infrastructure and reliable technical support, enabling your business to thrive online.
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
      <SeoHead title="Domain Name and Hosting" />
      <Layout>
        <div className="max-w-screen-xl mt-6 lg:mt-0 px-8 xl:px-16 mx-auto pt-16" id="about">
          <ScrollAnimationWrapper>
            <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
              <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1 -mt-20 lg:mt-0">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                  Domain Name and Hosting.
                </h1>
                <p className="text-black-500 mt-4 mb-6">
                  Your Digital Identity Starts Here Establish your online
                  presence with our domain name and hosting services. We assist
                  you in securing the perfect domain name for your business and
                  provide reliable hosting solutions to ensure your website is
                  always accessible and secure. Trust us to handle the technical
                  aspects while you focus on building your brand and engaging
                  with your audience.
                </p>
                <ButtonPrimary>Get Quote</ButtonPrimary>
              </div>
              <div className="flex w-full">
                <div className="h-full w-full">
                  <Image
                    src={Cloud}
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
