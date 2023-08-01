import React, { useState, useEffect, useRef } from "react";
import ArtCard from "../components/artCard";

export default function Drawings() {
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/arts/drawings")
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
        {urls.map((url, i) => (
          <ArtCard name={"name"} source={url} key={i}></ArtCard>
        ))}
      </div>
    </div>
  );
}
