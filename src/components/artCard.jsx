import React, { useState, useEffect, useRef } from "react";
import Spinner from "./loadingSpinner"

export default function ArtCard({ name, source, i }) {
  const [loading, setLoading] = useState(false);
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-110"
      key={i}
    >
      <div className="p-4">
      {!loading && <Spinner/>}
      <a href={source} target="_blank">
        <img
          className="object-contain h-48 w-96 "
          src={source}
          onLoad={() => setLoading(true)}
          alt={name}
        ></img>
      </a>
        <div className="font-bold text-xl mb-2 text-center">{name}</div>
        {/* <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p> */}
      </div>
    </div>
  );
}
