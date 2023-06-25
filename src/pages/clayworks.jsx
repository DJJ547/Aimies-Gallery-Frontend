import React from "react";
import ArtCard from "../components/artCard";
import clay1 from "../assets/clayworks/clay1.jpg";
import clay2 from "../assets/clayworks/clay2.png";
import clay3 from "../assets/clayworks/clay3.jpg";
import clay4 from "../assets/clayworks/clay4.png";
import clay5 from "../assets/clayworks/clay5.jpg";
import clay6 from "../assets/clayworks/clay6.jpg";
import clay7 from "../assets/clayworks/clay7.jpg";
import clay8 from "../assets/clayworks/clay8.jpg";
import clay9 from "../assets/clayworks/clay9.jpg";
import clay10 from "../assets/clayworks/clay10.jpg";

const clayList = [
  { name: "clay1", img: clay1 },
  { name: "clay2", img: clay2 },
  { name: "clay3", img: clay3 },
  { name: "clay4", img: clay4 },
  { name: "clay5", img: clay5 },
  { name: "clay6", img: clay6 },
  { name: "clay7", img: clay7 },
  { name: "clay8", img: clay8 },
  { name: "clay9", img: clay9 },
  { name: "clay10", img: clay10 },
];

export default function Clayworks() {
  return (
    <div className="container mx-auto py-36 px-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-8">
        {clayList.map((clay, i) => (
          <ArtCard name={clay.name} source={clay.img} key={i}></ArtCard>
        ))}
      </div>
    </div>
  );
}
