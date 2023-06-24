import React from "react";
import TextArea from "../components/textArea";
import Slider from "../components/slider";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="overflow-y-scroll">
      <TextArea />
      <Slider />
      <Footer />
    </div>
  );
}
