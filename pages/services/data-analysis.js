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
        eyebrow="Actionable Insights Data."
        title=" From data mining and visualization to predictive analytics and statistical modeling."
      >
        <p>
          As a data analysis services provider, Cloud Zest offers a
          comprehensive range of services tailored to meet the specific needs of
          businesses. Some of the key services we can offer to businesses
          related to data analysis include:
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Data Analysis and Interpretation">
            Cloud Zest specializes in analyzing large and complex datasets to
            extract meaningful insights. We employ advanced data analysis
            techniques, statistical modeling, and visualization tools to uncover
            patterns, trends, and correlations in your data. Our experts
            interpret the findings and provide actionable recommendations to
            drive data-driven decision-making.
          </GridListItem>
          <GridListItem title="Data Visualization">
            Cloud Zest offers data visualization services to present complex
            data in a visually appealing and easy-to-understand format. We use
            modern visualization tools and techniques to create interactive
            dashboards, charts, and graphs that effectively communicate key
            insights. Our data visualization services enable businesses to grasp
            trends, patterns, and outliers at a glance.
          </GridListItem>
          <GridListItem title="Predictive Analytics">
            Cloud Zest leverages predictive analytics to forecast future
            outcomes and trends based on historical data. We develop models and
            algorithms to analyze historical patterns, identify key predictors,
            and generate predictions and probabilities. Our predictive analytics
            services empower businesses to make informed decisions, optimize
            resources, and anticipate customer behavior.
          </GridListItem>
          <GridListItem title="Data Mining">
            Cloud Zest employs data mining techniques to discover hidden
            patterns, relationships, and insights in large datasets. We utilize
            algorithms and machine learning models to extract valuable
            information from your data. Our data mining services help businesses
            identify opportunities, optimize processes, and gain a competitive
            advantage through data-driven strategies.
          </GridListItem>
          <GridListItem title="Data Cleaning and Preprocessing">
            Cloud Zest offers data cleaning and preprocessing services to ensure
            the accuracy, consistency, and completeness of your data. We remove
            duplicates, handle missing values, standardize data formats, and
            resolve inconsistencies. Our data cleaning services enhance data
            quality and reliability, providing a solid foundation for accurate
            data analysis.
          </GridListItem>
          <GridListItem title="Data Integration and Warehousing">
            Cloud Zest helps businesses integrate and consolidate data from
            various sources into a centralized data warehouse. We design and
            implement data integration solutions that ensure data consistency,
            integrity, and accessibility. Our data warehousing services enable
            businesses to have a unified view of their data for comprehensive
            analysis and reporting.
          </GridListItem>
          <GridListItem title="Statistical Analysis">
            Cloud Zest performs statistical analysis on your data to uncover
            meaningful patterns and relationships. We apply a range of
            statistical techniques, including hypothesis testing, regression
            analysis, ANOVA, and clustering, to derive insights from your data.
            Our statistical analysis services provide businesses with a deeper
            understanding of their data and facilitate evidence-based
            decision-making.
          </GridListItem>
          <GridListItem title="Data Governance and Security">
            Cloud Zest focuses on ensuring the security, privacy, and compliance
            of your data. We implement data governance frameworks, develop data
            policies and procedures, and establish access controls. Our data
            governance and security services help businesses maintain data
            integrity, protect sensitive information, and adhere to relevant
            regulations.
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
                At Cloud Zest, we understand that every business has unique data
                analysis requirements, and we tailor our services to meet your
                specific goals and objectives. Our team of skilled data
                analysts, statisticians, and data scientists utilizes
                cutting-edge tools and techniques to deliver accurate and
                actionable insights from your data.
              </p>
              <p className="text-2xl mt-4 text-[#F82409]">
                Partner with Cloud Zest for your data analysis needs, and let us
                empower your business with valuable insights and data-driven
                strategies.
              </p>
            </blockquote>
          </figure>
        </FadeIn>
      </Container>
    </div>
  );
}

export default function DataAnalysis() {
  return (
    <>
      <Head>
        <title>Unlocking Insights Through Data Analysis</title>
        <meta name="description" content="Cloud Zest's data analysis services extract meaningful insights from your data. From visualization to predictive analytics, we help you make informed decisions. Get a quote." />
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
                Unlocking Insights Through Data Analysis
                </h1>
                <p className="text-black-500 mt-4 mb-6">
                  Transforming Data into Actionable Insights Data is a valuable
                  asset, and we help you unlock its full potential. Our data
                  analysis services employ advanced techniques and tools to
                  extract meaningful insights from your data. From data mining
                  and visualization to predictive analytics and statistical
                  modeling, we help you make informed decisions and drive
                  business growth based on data-driven insights.
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
