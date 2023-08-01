import React from "react";
import TextArea from "../components/textArea";
import Slider from "../components/slider";
import Footer from "../components/footer";
import Test from "../components/test"
import Animation from "../components/animation"

export default function Home() {
  return (
    <div className="overflow-y-scroll">
      {/* <Test /> */}
      {/* <Animation /> */}
      <TextArea />
      <Slider />
      <Footer />
    </div>
  );
}
