import React, { useMemo } from "react";
import Image from "next/image";
import clsx from "clsx";
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
import DigitalMarket from "../../public/assets/digital-marketing.svg";
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
        eyebrow="Accelerate your online presence"
        title="Achieve your marketing goals"
      >
        <p>
          As a digital marketing service provider, Cloud Zest offers a
          comprehensive range of services tailored to meet the specific needs of
          businesses. Some of the key services we can offer to businesses
          related to digital marketing include:
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Search Engine Optimization (SEO)">
            Cloud Zest specializes in implementing effective SEO strategies to
            improve your website's visibility in search engine results. We
            conduct in-depth keyword research, optimize website content and
            structure, and employ technical SEO techniques to enhance your
            organic rankings and attract targeted organic traffic.
          </GridListItem>
          <GridListItem title="Pay-Per-Click Advertising (PPC)">
            Cloud Zest can manage your PPC campaigns to drive targeted traffic
            to your website. We conduct thorough keyword research, design
            compelling ad copy, optimize landing pages, and monitor campaign
            performance to ensure optimal ROI. Our expertise covers platforms
            such as Google Ads, Bing Ads, and social media advertising networks.
          </GridListItem>
          <GridListItem title="Social Media Marketing">
            Cloud Zest helps businesses establish a strong presence on social
            media platforms. We create and execute tailored social media
            strategies, develop engaging content, manage social media accounts,
            and run targeted advertising campaigns. Our focus is on building
            brand awareness, fostering audience engagement, and driving
            conversions through social media channels.
          </GridListItem>
          <GridListItem title="Content Marketing">
            Cloud Zest offers comprehensive content marketing services to
            attract, engage, and convert your target audience. We develop
            content strategies, create high-quality and relevant content,
            optimize it for search engines, and promote it across various
            channels. Our content marketing approach includes blog posts,
            articles, videos, infographics, and more to establish your business
            as a thought leader and drive organic traffic.
          </GridListItem>
          <GridListItem title="Email Marketing">
            Cloud Zest helps businesses leverage the power of email marketing to
            nurture leads and drive conversions. We design and execute targeted
            email campaigns, segment your audience, and utilize marketing
            automation to deliver personalized messages. Our focus is on
            building strong customer relationships, promoting your products or
            services, and driving repeat business through effective email
            marketing.
          </GridListItem>

          <GridListItem title="Conversion Rate Optimization (CRO)">
            Cloud Zest specializes in optimizing your website and digital assets
            to improve conversion rates. We analyze user behavior, conduct A/B
            testing, optimize landing pages, and fine-tune website elements to
            maximize conversions. Our CRO strategies aim to enhance the user
            experience, reduce friction in the conversion process, and increase
            the overall effectiveness of your digital marketing efforts.
          </GridListItem>
          <GridListItem title="Online Reputation Management">
            Cloud Zest assists businesses in managing their online reputation
            effectively. We monitor online mentions, reviews, and comments about
            your brand, and devise strategies to maintain a positive online
            image. Our team can help address negative feedback, engage with
            customers, and build a strong reputation that instills trust and
            credibility in your target audience.
          </GridListItem>
          <GridListItem title="Analytics and Reporting">
            Cloud Zest provides comprehensive analytics and reporting services
            to measure the effectiveness of your digital marketing campaigns. We
            track key metrics, analyze data, and generate detailed reports to
            provide insights into campaign performance and areas for
            improvement. Our data-driven approach allows us to make informed
            decisions and optimize your digital marketing strategies.
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
                At Cloud Zest, we understand that every business is unique, and
                we tailor our digital marketing services to align with your
                specific goals and requirements. We stay abreast of the latest
                industry trends, tools, and techniques to ensure that our
                clients receive cutting-edge strategies and exceptional results.
              </p>
              <p className="text-2xl mt-4 text-[#F82409]">
                Partner with Cloud Zest to harness the power of digital
                marketing and elevate your business's online presence and
                growth.
              </p>
            </blockquote>
          </figure>
        </FadeIn>
      </Container>
    </div>
  );
}

export default function DigitalMarketing() {
  return (
    <>
      <Head>
        <title>Boost Your Brand with Digital Marketing</title>
        <meta name="description" content="Unlock online success with Cloud Zest's tailored digital marketing solutions. From SEO to social media, drive traffic and conversions. Get a quote now." />
      </Head>
      <Layout>
        <div
          className="max-w-screen-xl mt-6 lg:mt-0 px-8 xl:px-16 mx-auto pt-16"
          id="about"
        >
          <ScrollAnimationWrapper>
            <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
              <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1 -mt-24 lg:mt-0">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                  Boost Your Brand with Digital Marketing
                </h1>
                <p className="text-black-500 mt-4 mb-6">
                  Accelerate Your Online Presence Stand out in the digital
                  landscape with our comprehensive digital marketing solutions.
                  From strategic planning and market research to search engine
                  optimization (SEO), social media marketing, content creation,
                  and paid advertising, we help businesses create impactful
                  digital marketing campaigns that drive traffic, engage
                  customers, and boost conversions. Let us help you accelerate
                  your online presence and achieve your marketing goals.
                </p>
                <ButtonPrimary>Get Quote</ButtonPrimary>
              </div>
              <div className="flex w-full">
                <div className="h-full w-full">
                  <Image
                    src={DigitalMarket}
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
