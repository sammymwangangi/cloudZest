import Link from "next/link";
import React from "react";

const ButtonPrimary = ({ children, addClass }) => {
  return (
    <Link href="/contact-us"
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-[#F82409] hover:shadow-orange-md transition-all outline-none " +
        addClass
      }
    >
      {children}
    </Link>
  );
};

export default ButtonPrimary;
