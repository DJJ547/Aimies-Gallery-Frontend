import React from "react";

export default function ArtCard({ name, source, i }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-110" key={i}>
      <img className="object-contain h-48 w-96 " src={source} alt={name} onclick="window.open(, '_blank');"></img>
      <div className="p-4">
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
