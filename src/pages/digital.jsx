import React, { useState, useEffect, useRef } from "react";
import ArtCard from "../components/artCard";

export default function Digitals() {
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/arts/digital")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUrls(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container mx-auto py-36 px-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-8">
        {/* <img
          className="object-contain h-48 w-96 "
          src={urls}
          alt={"test"}
        ></img> */}
        {urls.map((url, i) => (
          <ArtCard name={"name"} source={url} key={i}></ArtCard>
        ))}
      </div>
    </div>
  );
}
