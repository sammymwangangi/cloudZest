import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Computing from "../components/Computing";
import DigitalMarketing from "../components/DigitalMarketing";
import SoftwareDevelopment from "../components/SoftwareDevelopment";
import WebsiteDevelopment from "../components/WebsiteDevelopment";
import MobileApp from "../components/MobileApp";
import Ict from "../components/Ict";
import UiUx from "../components/UiUx";
import { supabase } from "../lib/supabaseClient";
import Link from "next/link";
import Head from "next/head";

const stats = [
  { label: "Founded", value: "2023" },
  { label: "Clients", value: "10" },
  { label: "Countries", value: "2" },
  { label: "Projects", value: "50" },
];

export default function Home({ services }) {
  return (
    <>
      <Head>
        <title>Transform Your Business with Tech Solutions | Request a Quote</title>
        <meta name="description" content="Supercharge growth through tech transformation. Elevate online presence & efficiency. Partner with Cloud Zest today for tailored solutions. Get a quote now!" />
      </Head>
      <Layout>
        <Hero />
        <Computing />
        <DigitalMarketing/>
        <Ict/>
        <SoftwareDevelopment/>
        <MobileApp/>
        <WebsiteDevelopment/>
        <UiUx/>
        
        
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const { data: services } = await supabase.from("services").select();

  return {
    props: {
      services,
    },
  };
}
