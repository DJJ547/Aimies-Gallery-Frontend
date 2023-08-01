import React, { useState, useEffect, useRef } from "react";
import ArtCard from "../components/artCard";

export default function Digitals() {
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/arts/digital")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImgs(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container mx-auto py-36 px-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-8">
        {imgs.map((img, i) => (
          <ArtCard name={img.name} source={img.signed_url} key={i}></ArtCard>
        ))}
      </div>
    </div>
  );
}
