import React from "react";
import ArtCard from "../components/artCard";
import { clayworkList } from "../dummyData/clayworkSample.js";

export default function Clayworks() {
  return (
    <div className="container mx-auto py-36 px-8">
      <div className="grid lg:grid-cols-3">
        <img src="utils/slider/img1.jpg"></img>
        {clayworkList.map((claywork, i)=> (
          <ArtCard name={claywork.title} img={claywork.source} key={i}></ArtCard>
        ))}
      </div>
    </div>
  );
}
