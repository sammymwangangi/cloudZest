import { Container } from "../components/Container";
import { FadeIn } from "../components/FadeIn";
import { StylizedImage } from "../components/StylizedImage";
import { TagList, TagListItem } from "../components/TagList";
import imageWhiteboard from "../public/assets/laptop.jpg";
import { GridList, GridListItem } from "../components/GridList";
import { GridPattern } from "../components/GridPattern";
import { SectionIntro } from "../components/SectionIntro";
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

function OurValues() {
  return (
    <div className="relative my-10 pt-24 sm:mt-32 sm:pt-32 lg:mt-4 lg:pt-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-[2.5rem] bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          At Cloud Zest, we operate with a set of core values that guide our
          actions, decisions, and interactions with clients
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Integrity">
            We uphold the highest standards of integrity, honesty, and
            transparency in all our dealings. We believe in building trust and
            maintaining strong, long-term relationships with our clients.
          </GridListItem>
          <GridListItem title="Innovation">
            We embrace innovation and continuously strive to push the boundaries
            of what's possible. We leverage emerging technologies and creative
            solutions to drive innovation and help our clients stay ahead in
            their respective industries.
          </GridListItem>
          <GridListItem title="Collaboration">
            We believe in the power of collaboration and teamwork. We work
            closely with our clients, listening to their needs, sharing ideas,
            and collaborating to achieve shared goals. Together, we can achieve
            more.
          </GridListItem>
          <GridListItem title="Excellence">
            We have an unwavering commitment to excellence in everything we do.
            We set high standards for ourselves and consistently strive to
            exceed expectations, delivering solutions that are of the highest
            quality.
          </GridListItem>
          <GridListItem title="Continuous Learning">
            Technology is ever-evolving, and we understand the importance of
            continuous learning and development. We invest in the growth and
            development of our team to stay at the forefront of the industry and
            deliver the best possible solutions to our clients.
          </GridListItem>
          {/* <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem> */}
        </GridList>
      </Container>
    </div>
  );
}

export default function Values() {
  return (
    <>
      <OurValues />
    </>
  );
}
