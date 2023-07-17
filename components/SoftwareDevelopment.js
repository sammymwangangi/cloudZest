import { Container } from "../components/Container";
import { FadeIn } from "../components/FadeIn";
import { StylizedImage } from "../components/StylizedImage";
import { TagList, TagListItem } from "../components/TagList";
import imageWhiteboard from "../public/assets/laptop.jpg";
import Link from "next/link";

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  );
}

function Discover() {
  return (
    <Section title="Software Development" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Tailored Solutions for Your Unique Needs Unlock your business's
          potential with custom software solutions designed specifically for
          your unique requirements.
        </p>
        <p>
          Our expert software development team delivers scalable, secure, and
          user-friendly applications that streamline processes, enhance
          productivity, and drive innovation.
        </p>
        <p>
          Whether it's web-based, mobile, or enterprise software, we have the
          expertise to bring your vision to life.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this service
      </h3>
      <TagList className="mt-4 mb-16">
        <TagListItem>CRM</TagListItem>
        <TagListItem>ERP</TagListItem>
        <TagListItem>CMS</TagListItem>
        <TagListItem>Inventory management</TagListItem>
        <TagListItem>Software Upgrade</TagListItem>
        <TagListItem>Software Maintenance</TagListItem>
      </TagList>

      <Link
        href="/services/software-development"
        className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white transition-all hover:shadow-orange"
      >
        Learn more
      </Link>
    </Section>
  );
}

export default function SoftwareDevelopment() {
  return (
    <>
      <div className="mt-10 space-y-24 [counter-reset:section] sm:mt-20 sm:space-y-32 lg:mt-10 lg:space-y-40">
        <Discover />
      </div>
    </>
  );
}
