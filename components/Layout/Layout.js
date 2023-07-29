import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Header2 from "./Header2";
import FloatingButtons from "/components/FloatingButtons";

export default function Layout({ children }) {
  return (
    <>
      <Header2 />
      {children}
      <FloatingButtons/>
      <Footer />
    </>
  );
};
