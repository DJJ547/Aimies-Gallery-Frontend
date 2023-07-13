import React from "react";
import TextArea from "../components/textArea";
import Slider from "../components/slider";
import Footer from "../components/footer";
import Test from "../components/test"

export default function Home() {
  return (
    <div className="overflow-y-scroll">
      <Test />
      <TextArea />
      <Slider />
      <Footer />
    </div>
  );
}
