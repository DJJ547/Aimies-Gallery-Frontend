import React, { useState, useEffect, useRef } from "react";
import ArtCard from "../components/artCard";
import Pagination from "../components/pagination"

export default function Clayworks() {
  const [imgs, setImgs] = useState([]);
  const [currentImg, setCurrentImg] = useState(1);
  const [imgsPerPage] = useState(9);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/arts/clayworks")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImgs(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // Get current images
  const indexOfLastImg = currentImg * imgsPerPage;
  const indexOfFirstImg = indexOfLastImg - imgsPerPage;
  const currentImgs = imgs.slice(indexOfFirstImg, indexOfLastImg);

  // Change page
  const paginate = pageNumber => setCurrentImg(pageNumber);

  return (
    <div className="container mx-auto py-36 px-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-8">
        {currentImgs.map((img, i) => (
          <ArtCard name={"name"} source={img} key={i}></ArtCard>
        ))}
      </div>
      <Pagination
        imgsPerPage={imgsPerPage}
        totalImgs={imgs.length}
        paginate={paginate}
      />
    </div>
  );
}
