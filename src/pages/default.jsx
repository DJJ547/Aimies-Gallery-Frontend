import React from "react";
import TextArea from "../components/textArea";
import Slider from "../components/slider";
import Footer from "../components/footer";
import Test from "../components/test"
import Animation from "../components/animation"

export default function Default() {
  return (
    <div className="overflow-y-scroll">
      <Animation />
    </div>
  );
}