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
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-[2.5rem] bg-gradient-to-b from-orange-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-orange-200 stroke-orange-950/5 [mask-image:linear-gradient(to_bottom_left,white_30%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Visually stunning, user-friendly, and high-performance websites"
        title="We are your Trusted Partner Web & App Development."
      >
        <p>
        As a website and web app development company, Cloud Zest offers a comprehensive range of services tailored to meet the specific needs of businesses. Some of the key services we can offer to businesses related to website and web app development include:
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Website Design and Development">
          Cloud Zest specializes in designing and developing visually appealing and user-friendly websites. We create custom websites tailored to your business goals and target audience. Our team of skilled designers and developers utilize the latest web technologies and frameworks to deliver responsive, fast-loading, and search engine optimized websites.

          </GridListItem>
          <GridListItem title="Responsive Web Design">
          Cloud Zest ensures that your website is accessible and visually appealing across multiple devices and screen sizes. We adopt a responsive web design approach, optimizing the layout, images, and content to provide a seamless user experience on desktops, tablets, and mobile devices. Our responsive web designs enhance user engagement and improve conversion rates.
          </GridListItem>
          <GridListItem title="E-Commerce Development">
          Cloud Zest offers comprehensive e-commerce development services to help businesses establish a strong online presence and drive sales. We build secure and feature-rich e-commerce websites tailored to your specific requirements. Our e-commerce solutions include shopping cart integration, payment gateway integration, inventory management, order tracking, and user-friendly interfaces.
          </GridListItem>
          <GridListItem title="Content Management Systems (CMS)">
          Cloud Zest develops websites and web applications using popular content management systems such as WordPress, Drupal, and Joomla. We create custom themes, plugins, and modules to provide flexibility, scalability, and easy content management. Our CMS solutions empower businesses to update and maintain their websites without technical expertise.

          </GridListItem>
          <GridListItem title="Web Application Development">
          Cloud Zest specializes in developing web applications that provide advanced functionality and automation to streamline business processes. We utilize modern web technologies and frameworks such as Angular, React, and Vue.js to build scalable and interactive web applications. Our solutions can range from customer portals and online booking systems to custom business tools and intranet applications.
          </GridListItem>

          <GridListItem title="API Development and Integration">
          Cloud Zest offers API development and integration services to connect your website or web application with third-party systems and services. We develop custom APIs to enable seamless data exchange, integration, and functionality between different software applications. Our expertise covers RESTful APIs, SOAP APIs, and GraphQL APIs.

          </GridListItem>
          <GridListItem title="Web Maintenance and Support">
          Cloud Zest provides ongoing website maintenance and support services to ensure that your website remains secure, up-to-date, and optimized. We offer regular backups, security updates, performance monitoring, and bug fixing. Our support team is available to address any technical issues promptly and provide guidance on website enhancements and updates.
          </GridListItem>
          <GridListItem title="UI/UX Design">
          Cloud Zest focuses on delivering exceptional user experiences through intuitive and visually appealing UI/UX design. We conduct user research, create wireframes, design user interfaces, and perform usability testing to ensure a seamless and engaging user experience. Our UI/UX design services are aimed at enhancing user satisfaction and achieving business objectives.
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
              At Cloud Zest, we understand that every business has unique website and web app requirements, and we tailor our services to meet your specific goals and objectives. Our team of skilled designers, developers, and testers follows industry best practices and uses the latest technologies to deliver high-quality, custom web solutions.

              </p>
              <p className="text-2xl mt-4 text-orange-600">
              Partner with Cloud Zest for your website and web app development needs, and let us empower your business with compelling, functional, and user-friendly digital experiences.
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
      <SeoHead title="Website & Web App Development" />
      <Layout>
        <div className="max-w-screen-xl mt-6 lg:mt-0 px-8 xl:px-16 mx-auto pt-16" id="about">
          <ScrollAnimationWrapper>
            <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
              <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                  Website & Web App Development.
                </h1>
                <p className="text-black-500 mt-4 mb-6">
                  Engaging Digital Experiences Your website and web applications
                  are your digital storefronts. At Cloud Zest, we specialize in
                  creating visually stunning, user-friendly, and
                  high-performance websites and web applications. Whether you
                  need a corporate website, e-commerce platform, or custom web
                  app, our team combines creative design, seamless
                  functionality, and the latest technologies to deliver engaging
                  digital experiences that captivate your audience.
                </p>
                <ButtonPrimary>Get Quote</ButtonPrimary>
              </div>
              <div className="flex w-full">
                <div className="h-full w-full">
                  <Image
                    src={Mobile}
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
