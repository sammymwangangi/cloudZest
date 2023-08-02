import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

import { Blockquote } from "../components/Blockquote";
import { Border } from "../components/Border";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { FadeIn, FadeInStagger } from "../components/FadeIn";
import { PageIntro } from "../components/PageIntro";
import { Testimonial } from "../components/Testimonial";
import logoBrightPath from "../public/assets/clients/bright-path/logo-dark.svg";
import logoFamilyFund from "../public/assets/clients/family-fund/logo-dark.svg";
import logoGreenLife from "../public/assets/clients/green-life/logo-dark.svg";
import logoHomeWork from "../public/assets/clients/home-work/logo-dark.svg";
import logoMailSmirk from "../public/assets/clients/mail-smirk/logo-dark.svg";
import logoNorthAdventures from "../public/assets/clients/north-adventures/logo-dark.svg";
import logoPhobia from "../public/assets/clients/phobia/logo-dark.svg";
import clientLogo from "../public/assets/logo-light.svg";
import logoUnseal from "../public/assets/clients/unseal/logo-dark.svg";

function CaseStudies() {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Case studies
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        <FadeIn>
          <article>
            <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
              <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                  <Image
                    src={clientLogo}
                    alt=""
                    className="h-24 w-16 flex-none"
                    unoptimized
                  />
                  <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                    FamilyFund
                  </h3>
                </div>
                <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                  <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                    Web development, CMS
                  </p>
                  <p className="text-sm text-neutral-950 lg:mt-2">
                    January 2023
                  </p>
                </div>
              </div>
              <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                <p className="font-display text-4xl font-medium text-neutral-950">
                  <Link href="#">
                    Skip the bank, borrow from those you trust
                  </Link>
                </p>
                <div className="mt-6 space-y-6 text-base text-neutral-600">
                  <p>
                    FamilyFund is a crowdfunding platform for friends and
                    family. Allowing users to take personal loans from their
                    network without a traditional financial institution.
                  </p>
                  <br />
                  <p>
                    We developed a custom CMS to power their blog with and
                    optimised their site to rank higher for the keywords “Gary
                    Vee” and “Tony Robbins”.
                  </p>
                </div>
                <div className="mt-8 flex">
                  <Button href="#">Read case study</Button>
                </div>
                <Blockquote
                  author="Debra Fiscal, CEO of FamilyFund"
                  className="mt-12"
                >
                  Working with CloudZest, we felt more like a partner than a
                  customer. They really resonated with our mission to change the
                  way people convince their parents to cash out their pensions.
                </Blockquote>
              </div>
            </Border>
          </article>
        </FadeIn>
      </div>
    </Container>
  );
}

const clients = [
  ["Phobia", logoPhobia],
  ["Family Fund", logoFamilyFund],
  ["Unseal", logoUnseal],
  ["Mail Smirk", logoMailSmirk],
  ["Home Work", logoHomeWork],
  ["Green Life", logoGreenLife],
  ["Bright Path", logoBrightPath],
  ["North Adventures", logoNorthAdventures],
];

function Clients() {
  return (
    <Container className="mt-24 mb-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          You’re in good company
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {clients.map(([client, logo]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
                  <Image src={logo} alt={client} unoptimized />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  );
}

export const metadata = {
  title: "Our Work",
  description:
    "We believe in efficiency and maximizing our resources to provide the best value to our clients.",
};

export default function Work() {
  return (
    <>
      <SeoHead title="Case Studies" />
      <Layout>
        <PageIntro
            eyebrow="Our work"
            title="Proven solutions for real-world problems."
        >
            <p>
            We believe in efficiency and maximizing our resources to provide the
            best value to our clients. The primary way we do that is by re-using
            the same five projects we’ve been developing for the past decade.
            </p>
        </PageIntro>

        <CaseStudies />

        <Testimonial
            className="mt-24 sm:mt-32 lg:mt-40"
            client={{ name: "Mail Smirk", logo: logoMailSmirk }}
        >
            We approached <em>Cloud Zest</em> because we loved their past work. They
            delivered something remarkably similar in record time.
        </Testimonial>

        <Clients />
      </Layout>
    </>
  );
}
