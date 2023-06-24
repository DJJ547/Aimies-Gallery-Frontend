import React from "react";
import Footer from "../components/footer";

export default function About() {
  return (
    <div>
      <div className="bg-violet-50 ml-96 mr-96">
        <div className="flex justify-center items-center p-5 m-5">
          <div className="h-auto max-w-xs bg-gray-400 rounded-full overflow-hidden m-5">
            <img
              className="object-contain"
              src={"utils/profilePic/profile1.jpg"}
              alt="profile picture 1"
            ></img>
          </div>
          <div className="h-auto max-w-xs bg-gray-400 rounded-full overflow-hidden m-5">
            <img
              className="object-scale-down"
              src={"utils/profilePic/profile2.jpg"}
              alt="profile picture 1"
            ></img>
          </div>
          <div className="h-auto max-w-xs bg-gray-400 rounded-full overflow-hidden m-5">
            <img
              className="object-scale-down"
              src={"utils/profilePic/profile3.png"}
              alt="profile picture 1"
            ></img>
          </div>
        </div>
        <div className="p-10 mb-40">
          <h1 className="font-dancingScript text-5xl text-center mb-5">
            YUET TUNG FUNG
          </h1>
          <h5 className="font-serif text-xl text-center mb-5">
            HONG KONG - BORN ARTIST
          </h5>
          <div className="w-2/3 ml-40 mr-40">
            <p className="font-serif text-lg">
              Hong Kong artist Aimie Fung is currently living in San Francisco,
              CA.
            </p>
            <p className="font-serif text-lg">
              She got her AA in Environmental Studies in mid-2019 and got her BA
              in Studio Art and geology in mid-2021.
            </p>
            <p className="font-serif text-lg">
              Fung has been living in Bay Area for six years, fulfilling her
              dreams of being an artist.
            </p>
            <p className="font-serif text-lg">
              Her works are not just focusing on drawing and painting, but also
              other mixed media.
            </p>
            <p className="font-serif text-lg">
              Fung is also an Earth Science student.
            </p>
            <p className="font-serif text-lg">
              She wishes to invite viewers to see the nature in the combination
              of art and earth sciences through her artworks and photography.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
