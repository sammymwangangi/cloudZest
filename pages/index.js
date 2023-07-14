import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import About from "../components/About";
import Computing from "../components/Computing";
import DigitalMarketing from "../components/DigitalMarketing";
import SoftwareDevelopment from "../components/SoftwareDevelopment";
import MobileApp from "../components/MobileApp";
import Ict from "../components/Ict";
import { supabase } from "../lib/supabaseClient";
import Link from "next/link";

const stats = [
  { label: "Founded", value: "2023" },
  { label: "Clients", value: "10" },
  { label: "Countries", value: "2" },
  { label: "Projects", value: "50" },
];

export default function Home({ services }) {
  return (
    <>
      <SeoHead title="CloudZest" />
      <Layout>
        <Hero />
        <About />
        <Computing />
        <DigitalMarketing/>
        <Ict/>
        <SoftwareDevelopment/>
        {/* <MobileApp/> */}
        
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
