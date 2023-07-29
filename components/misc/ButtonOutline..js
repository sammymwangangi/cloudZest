import Link from "next/link";
import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <Link href="/contact-us" className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-[#FE0000] text-[#FE0000] bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-[#FE0000] hover:text-white transition-all hover:shadow-orange ">
      {" "}
      {children}
    </Link>
  );
};

export default ButtonOutline;
