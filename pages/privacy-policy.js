import React, { useMemo } from "react";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <SeoHead title="Cloud Computing" />
      <Layout>
        <div className="bg-white px-6 pt-10 sm:pt-32 lg:px-8">
          <nav
            className="flex items-center justify-center mb-5 mt-6 lg:mt-0"
            aria-label="Breadcrumb"
          >
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div>
                  <Link href="/" className="text-[#FE0000] hover:text-gray-500">
                    Home
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <div className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                    Privacy Policy
                  </div>
                </div>
              </li>
            </ol>
          </nav>
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Privacy Policy
            </h2>
            <div className="flex flex-col space-y-2 mt-6 text-left text-lg leading-8 text-gray-600">
            <div className="font-semibold">Privacy Policy </div>

            <div>Effective Date: July 8, 2023</div> 

            <div className="pb-4">At Cloud Zest, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard the data you provide to us when accessing our website or using our services.</div>

            <div className="font-semibold">Information We Collect:</div>
            <div className="pb-4">We may collect personal information such as your name, email address, contact number (e.g., 0725626388), and other relevant details when you interact with our website, subscribe to our newsletters, request information, or use our services.</div>

            <div className="font-semibold">How We Use Your Information:</div>
            <div className="pb-4">We use the information collected to deliver our services, communicate with you, process transactions, improve user experience, and send relevant updates and promotional content.</div>

            <div className="font-semibold">Data Security:</div>
            <div className="pb-4">We employ industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</div>

            <div className="font-semibold">Third-Party Disclosure:</div>
            <div className="pb-4">We may share your information with trusted third-party service providers who assist us in operating our website and delivering services to you. We ensure they adhere to strict confidentiality and data protection standards.</div>

            <div className="font-semibold">Cookies and Analytics:</div>
            <div className="pb-4">We may use cookies and similar tracking technologies to analyze website traffic, improve our services, and personalize your browsing experience. You can opt-out of cookie usage through your browser settings.</div>

            <div className="font-semibold">Your Rights:</div>
            <div className="pb-4">You have the right to access, update, or delete your personal information. Please contact us at <a className="text-[#FE0000]" href="mailto:info@cloudzest.net">info@cloudzest.net</a> or call <a className="text-[#FE0000]" href="tel:+254725626388">0725626388</a> to exercise these rights.</div>

            <div className="font-semibold">Updates to Privacy Policy:</div>
            <div className="pb-4">This Privacy Policy may be updated from time to time. We recommend reviewing this page periodically for any changes.</div>

            <div className="font-semibold">Consent:</div>
            <div className="pb-4">By using our website and services, you consent to our Privacy Policy and agree to the collection and use of your information as outlined herein.</div>

            <div className="font-semibold">Contact Us:</div>
            <div className="pb-4">If you have any questions, concerns, or requests regarding our Privacy Policy or your personal information, please contact us at <a className="text-[#FE0000]" href="mailto:info@cloudzest.net">info@cloudzest.net</a> or call <a className="text-[#FE0000]" href="tel:+254725626388">0725626388</a>.</div>

            <div className="pb-4">By continuing to use our website and services, you signify your acceptance of this Privacy Policy. Thank you for choosing Cloud Zest as your technology partner.</div>
            </div>
          </div>
        </div>
        
      </Layout>
    </>
  );
}
